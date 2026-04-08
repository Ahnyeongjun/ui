'use client';

import { useState, useEffect } from 'react';

export interface GitHubStats {
  totalContributions: number;
  publicRepos: number;
  followers: number;
  loading: boolean;
  error: boolean;
}

const CACHE_TTL = 1000 * 60 * 60;

function getCache(key: string) {
  if (typeof window === 'undefined') return null;
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
    const data = JSON.parse(cached);
    return Date.now() - data.timestamp > CACHE_TTL ? null : data;
  } catch {
    return null;
  }
}

function setCache(key: string, stats: object) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify({ stats, timestamp: Date.now() }));
}

export function useGitHubStats(username: string): GitHubStats {
  const [stats, setStats] = useState<GitHubStats>({ totalContributions: 0, publicRepos: 0, followers: 0, loading: true, error: false });

  useEffect(() => {
    const cacheKey = `github_stats_${username}`;
    const cached = getCache(cacheKey);
    if (cached) {
      setStats({ ...cached.stats, loading: false, error: false });
      return;
    }

    async function fetchStats() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error('Failed to fetch user');
        const userData = await userRes.json();

        const contribRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        let totalContributions = 0;
        if (contribRes.ok) {
          const contribData = await contribRes.json();
          totalContributions = contribData.total?.lastYear || 0;
        }

        const newStats = { totalContributions, publicRepos: userData.public_repos || 0, followers: userData.followers || 0 };
        setCache(cacheKey, newStats);
        setStats({ ...newStats, loading: false, error: false });
      } catch {
        setStats((prev) => ({ ...prev, loading: false, error: true }));
      }
    }

    fetchStats();
  }, [username]);

  return stats;
}
