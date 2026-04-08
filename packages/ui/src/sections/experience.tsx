'use client';

import { Building2, GraduationCap, Users, Award, Github, Code2 } from 'lucide-react';
import { useGitHubStats } from '../hooks/useGitHubStats';
import { useBOJStats, getTierName, getTierColor } from '../hooks/useBOJStats';

export interface CareerInfo {
  company: string;
  position: string;
  period: string;
  duration: string;
  description: string;
}

export interface ActivityItem {
  title: string;
  type: string;
  period: string;
  description: string;
}

export interface EducationItem {
  school: string;
  major: string;
  period: string;
  info: string;
}

export interface CertificationItem {
  year: string;
  title: string;
}

export interface ExperienceSectionProps {
  career: CareerInfo;
  activities: ActivityItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  githubUsername: string;
  githubProfileUrl: string;
  bojHandle: string;
  bojProfileUrl: string;
  bojApiUrl?: string;
}

export function ExperienceSection({ career, activities, education, certifications, githubUsername, githubProfileUrl, bojHandle, bojProfileUrl, bojApiUrl }: ExperienceSectionProps) {
  const github = useGitHubStats(githubUsername);
  const boj = useBOJStats(bojHandle, bojApiUrl);

  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">경력 & <span className="text-gradient">활동</span></h2>
            <p className="text-muted-foreground">회사 경력과 다양한 활동 경험입니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="glass rounded-xl p-6 animate-fade-in">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">회사 경력</h3>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-semibold text-foreground">{career.company}</span>
                      <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded">{career.duration}</span>
                    </div>
                    <p className="text-muted-foreground">{career.position}</p>
                    <p className="text-sm text-muted-foreground">{career.period}</p>
                    <p className="text-sm text-muted-foreground mt-2">{career.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">학력</h3>
                  </div>
                  <div className="space-y-3">
                    {education.map((edu, i) => (
                      <div key={i}>
                        <p className="font-medium text-foreground text-sm">{edu.school}</p>
                        <p className="text-xs text-muted-foreground">{edu.major}</p>
                        <p className="text-xs text-muted-foreground">{edu.info}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass rounded-xl p-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold text-foreground">자격증</h3>
                  </div>
                  <div className="space-y-1.5">
                    {certifications.map((cert, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-xs font-mono text-muted-foreground">{cert.year}</span>
                        <span className="text-sm text-foreground">{cert.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 animate-fade-in md:h-fit" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 mb-5">
                <Users className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">활동 & 교육</h3>
              </div>
              <div className="space-y-5">
                {activities.map((activity, i) => (
                  <div key={i} className="flex items-start gap-4 pb-5 border-b border-border last:border-0 last:pb-0">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground">{activity.title}</span>
                        <span className={`px-2 py-0.5 text-xs rounded ${activity.type === '동아리' ? 'bg-accent/20 text-accent' : 'bg-secondary text-muted-foreground'}`}>
                          {activity.type}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{activity.period}</p>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-6 animate-fade-in hover:border-primary/50 transition-colors" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 mb-4">
                <Github className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">GitHub</h3>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-foreground">{github.loading ? '...' : github.totalContributions.toLocaleString()}</span>
                <p className="text-sm text-muted-foreground mt-1">contributions</p>
              </div>
            </a>
            <a href={bojProfileUrl} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-6 animate-fade-in hover:border-primary/50 transition-colors" style={{ animationDelay: '0.55s' }}>
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">BOJ</h3>
              </div>
              {boj.loading ? (
                <div className="text-center text-muted-foreground">...</div>
              ) : boj.error ? (
                <div className="text-center text-muted-foreground">불러오기 실패</div>
              ) : (
                <div className="text-center">
                  <span className="text-2xl font-bold" style={{ color: getTierColor(boj.tier) }}>{getTierName(boj.tier)}</span>
                  <p className="text-sm text-muted-foreground mt-1">{boj.solvedCount}문제 solved</p>
                </div>
              )}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
