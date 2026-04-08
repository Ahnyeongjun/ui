'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2, User, Users, Calendar } from 'lucide-react';
import { Tag } from '../tag';
import { Badge } from '../badge';

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  status: 'live' | 'beta' | 'development' | 'deployed';
  type: 'company' | 'team' | 'personal';
  category: ('fullstack' | 'backend' | 'frontend' | 'ai')[];
  company?: string;
  period?: string;
  role?: string;
  details?: string[];
  achievements?: string[];
  href?: string;
}

const statusStyles: Record<ProjectCardProps['status'], string> = {
  live: 'bg-primary/20 text-primary border-primary/30',
  beta: 'bg-accent/20 text-accent border-accent/30',
  development: 'bg-muted text-muted-foreground border-muted',
  deployed: 'bg-blue-500/20 text-blue-600 border-blue-500/30',
};

const statusLabels: Record<ProjectCardProps['status'], string> = {
  live: 'Live',
  beta: 'Beta',
  development: '개발중',
  deployed: '운영중',
};

function getRoleTags(role: string, category?: string[]): string[] {
  const tags: string[] = [];
  const lower = role.toLowerCase();
  if (lower.includes('pm') || lower.includes('기획')) tags.push('PM');
  const hasFront = lower.includes('프론트') || lower.includes('frontend');
  const hasBack = lower.includes('백엔드') || lower.includes('backend') || lower.includes('api');
  const isFullstack =
    lower.includes('풀스택') ||
    lower.includes('fullstack') ||
    category?.includes('fullstack') ||
    (hasFront && hasBack);
  if (isFullstack) {
    tags.push('풀스택');
  } else {
    if (hasFront) tags.push('프론트');
    if (hasBack) tags.push('백엔드');
  }
  if (lower.includes('ai') || lower.includes('머신러닝') || lower.includes('모델')) tags.push('AI');
  if (lower.includes('devops') || lower.includes('인프라') || lower.includes('아키텍처')) tags.push('Ops');
  if (lower.includes('서버') && !tags.includes('백엔드') && !isFullstack) tags.push('서버');
  return tags.length > 0 ? tags : ['Dev'];
}

export function ProjectCard({ id, title, description, tags, imageUrl, status, type, category, company, period, role, href }: ProjectCardProps) {
  return (
    <Link href={href ?? `/projects/${id}`} className="block group">
      <div className="glass rounded-xl overflow-hidden hover-lift flex flex-col h-[420px] sm:h-[440px] lg:h-[460px]">
        <div className="relative h-48 sm:h-52 lg:h-56 bg-secondary overflow-hidden shrink-0">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="text-4xl font-bold text-gradient">{title.charAt(0)}</div>
            </div>
          )}
          <div className="absolute top-3 left-3">
            <Badge
              variant="secondary"
              className={type === 'company' ? 'bg-blue-500/20 text-blue-600 border-blue-500/30' : undefined}
              icon={
                type === 'company' ? <Building2 className="w-3 h-3" /> :
                type === 'team' ? <Users className="w-3 h-3" /> :
                <User className="w-3 h-3" />
              }
            >
              {type === 'company' ? (company || '회사') : type === 'team' ? '팀' : '개인'}
            </Badge>
          </div>
          <div className={`absolute top-3 right-3 px-2.5 py-1 text-xs font-medium rounded-full border ${statusStyles[status]}`}>
            {statusLabels[status]}
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            {period && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                <Calendar className="w-3 h-3" />{period}
              </div>
            )}
            <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
          </div>
          <div className="mt-4">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {role && getRoleTags(role, category).map((t) => (
                <Tag key={t} variant="primary" className="font-medium">{t}</Tag>
              ))}
              {tags.slice(0, 3).map((t) => (
                <Tag key={t} variant="mono">{t}</Tag>
              ))}
            </div>
            <div className="flex items-center gap-1 text-sm text-primary">
              자세히 보기 <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
