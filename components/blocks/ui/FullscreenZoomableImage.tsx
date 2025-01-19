

'use client'

import React, { useState, useRef, useEffect } from 'react';

interface FullscreenZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
}

const FullscreenZoomableImage: React.FC<FullscreenZoomableImageProps> = ({ src, alt, className, onLoad, }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleImageClick = () => {
    setIsFullscreen(true);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleFullscreenClick = (e: React.MouseEvent) => {
    if (e.target === containerRef.current) {
      setIsFullscreen(false);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (isFullscreen) {
      e.preventDefault();
      const newZoom = zoom + e.deltaY * -0.01;
      setZoom(Math.min(Math.max(1, newZoom), 5));
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isFullscreen && zoom > 1) {
      const { left, top, width, height } = imageRef.current!.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setPosition({ x: x - 0.5, y: y - 0.5 });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
        setZoom(1);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
        onLoad={ onLoad }
      />
      {isFullscreen && (
        <div
          ref={containerRef}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleFullscreenClick}
          onWheel={handleWheel}
          onMouseMove={handleMouseMove}
        >
          <img
            ref={imageRef}
            src={src}
            alt={alt}
            className="max-h-full max-w-full object-contain"
            style={{
              transform: `scale(${zoom}) translate(${position.x * 100}px, ${position.y * 100}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          />
        </div>
      )}
    </>
  );
};

export default FullscreenZoomableImage;

