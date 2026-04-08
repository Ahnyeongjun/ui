'use client';

import { useState, useEffect } from 'react';

export interface BOJStats {
  handle: string;
  tier: number;
  rating: number;
  solvedCount: number;
  rank: number;
  maxStreak: number;
  loading: boolean;
  error: boolean;
}

const CACHE_TTL = 1000 * 60 * 60;

export function getTierName(tier: number): string {
  const tiers = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ruby'];
  const levels = ['V', 'IV', 'III', 'II', 'I'];
  if (tier === 0) return 'Unrated';
  if (tier === 31) return 'Master';
  return `${tiers[Math.floor((tier - 1) / 5)]} ${levels[(tier - 1) % 5]}`;
}

export function getTierColor(tier: number): string {
  if (tier === 0) return '#2d2d2d';
  if (tier <= 5) return '#ad5600';
  if (tier <= 10) return '#435f7a';
  if (tier <= 15) return '#ec9a00';
  if (tier <= 20) return '#27e2a4';
  if (tier <= 25) return '#00b4fc';
  if (tier <= 30) return '#ff0062';
  return '#b300e0';
}

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

export function useBOJStats(handle: string, apiUrl = '/api/boj'): BOJStats {
  const [stats, setStats] = useState<BOJStats>({ handle: '', tier: 0, rating: 0, solvedCount: 0, rank: 0, maxStreak: 0, loading: true, error: false });

  useEffect(() => {
    const cacheKey = `boj_stats_${handle}`;
    const cached = getCache(cacheKey);
    if (cached) {
      setStats({ ...cached.stats, loading: false, error: false });
      return;
    }

    async function fetchStats() {
      try {
        const res = await fetch(`${apiUrl}?handle=${handle}`);
        if (!res.ok) throw new Error('Failed to fetch BOJ stats');
        const data = await res.json();
        const newStats = { handle: data.handle, tier: data.tier || 0, rating: data.rating || 0, solvedCount: data.solvedCount || 0, rank: data.rank || 0, maxStreak: data.maxStreak || 0 };
        setCache(cacheKey, newStats);
        setStats({ ...newStats, loading: false, error: false });
      } catch {
        setStats((prev) => ({ ...prev, loading: false, error: true }));
      }
    }

    fetchStats();
  }, [handle, apiUrl]);

  return stats;
}
