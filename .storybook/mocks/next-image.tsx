import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  onError?: () => void;
  [key: string]: unknown;
}

const Image = ({ src, alt, width, height, fill, className, onError }: ImageProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={typeof src === 'string' ? src : ''}
    alt={alt}
    width={fill ? undefined : width}
    height={fill ? undefined : height}
    className={className}
    onError={onError}
    style={fill ? { width: '100%', height: '100%', objectFit: 'cover' } : undefined}
  />
);

export default Image;
