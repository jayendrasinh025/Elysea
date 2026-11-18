'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { CAROUSEL_VIDEOS, type CarouselVideoItem } from '@/lib/clinic-data';
import { blendVelocity, computeCardPosition } from '@/lib/carousel-math';

const CRUISE_SPEED_PX_PER_SEC = 58; // Positive distance = cards move right-to-left

export default function ContinuousVideoCarousel() {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const scrollDistanceRef = useRef(0);
  const velocityRef = useRef(CRUISE_SPEED_PX_PER_SEC);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const lastDragXRef = useRef(0);
  const lastDragTimeRef = useRef(0);
  const dragVelocityRef = useRef(CRUISE_SPEED_PX_PER_SEC);

  const [isDragging, setIsDragging] = useState(false);
  const [failedIds, setFailedIds] = useState<Record<string, boolean>>({});

  // Enforce muted + autoplay + loop + playsInline and keep videos playing unconditionally
  useEffect(() => {
    const videos = videoRefs.current.filter((v): v is HTMLVideoElement => v !== null);
    const syncMasterByGroup: Record<string, HTMLVideoElement> = {};

    const ensurePlaying = (video: HTMLVideoElement) => {
      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.playsInline = true;
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {
            // Autoplay retry occurs on first user interaction below
          });
        }
      }
    };

    const cleanupFns: (() => void)[] = [];

    videos.forEach((video, idx) => {
      const item = CAROUSEL_VIDEOS[idx];
      ensurePlaying(video);

      const handleCanPlay = () => {
        // Synchronize playback across cards sharing the same source group without resetting running videos
        if (item) {
          const master = syncMasterByGroup[item.syncGroup];
          if (!master) {
            syncMasterByGroup[item.syncGroup] = video;
          } else if (master !== video && master.readyState >= 2) {
            const delta = Math.abs(video.currentTime - master.currentTime);
            if (delta > 0.35 && Number.isFinite(master.currentTime)) {
              try {
                video.currentTime = master.currentTime;
              } catch {
                // Ignore seek error before buffer readiness
              }
            }
          }
        }
        ensurePlaying(video);
      };

      const handlePause = () => {
        // Never remain paused due to scroll, drag, or hover
        ensurePlaying(video);
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('pause', handlePause);
      cleanupFns.push(() => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('pause', handlePause);
      });
    });

    const unlockAutoplay = () => {
      videos.forEach((video) => ensurePlaying(video));
    };

    window.addEventListener('pointerdown', unlockAutoplay, { passive: true });
    window.addEventListener('touchstart', unlockAutoplay, { passive: true });

    return () => {
      cleanupFns.forEach((fn) => fn());
      window.removeEventListener('pointerdown', unlockAutoplay);
      window.removeEventListener('touchstart', unlockAutoplay);
    };
  }, []);

  // Continuous 60fps curved panoramic animation loop (never calls setState)
  useEffect(() => {
    let rafId = 0;
    let lastTime = performance.now();

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      const stage = stageRef.current;
      const viewportWidth = stage ? stage.clientWidth : 1200;
      const isCompact = viewportWidth < 640;
      const cardWidth = isCompact ? 236 : viewportWidth < 1024 ? 276 : 316;
      const gap = isCompact ? 18 : 26;
      const step = cardWidth + gap;

      const targetCruise = prefersReduced ? 18 : CRUISE_SPEED_PX_PER_SEC;

      if (!isDraggingRef.current) {
        velocityRef.current = blendVelocity(
          velocityRef.current,
          targetCruise,
          dt,
          3.8
        );
        scrollDistanceRef.current += velocityRef.current * dt;
      }

      const totalCards = CAROUSEL_VIDEOS.length;
      for (let i = 0; i < totalCards; i++) {
        const card = cardRefs.current[i];
        if (!card) continue;

        const t = computeCardPosition(
          i,
          scrollDistanceRef.current,
          step,
          totalCards,
          viewportWidth
        );

        card.style.transform = `translate3d(${t.x}px, ${t.y}px, 0) perspective(1300px) rotateY(${t.rotateY}deg) scale(${t.scale})`;
        card.style.zIndex = String(t.zIndex);
        card.style.opacity = String(t.opacity);
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    lastDragXRef.current = e.clientX;
    lastDragTimeRef.current = performance.now();
    dragVelocityRef.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const now = performance.now();
    const dx = e.clientX - lastDragXRef.current;
    const dt = Math.max(0.008, (now - lastDragTimeRef.current) / 1000);

    // Dragging left (dx < 0) advances right-to-left distance
    scrollDistanceRef.current -= dx;
    dragVelocityRef.current = Math.max(-750, Math.min(750, -dx / dt));

    lastDragXRef.current = e.clientX;
    lastDragTimeRef.current = now;
  };

  const handlePointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    velocityRef.current =
      Math.abs(dragVelocityRef.current) > 10
        ? dragVelocityRef.current
        : CRUISE_SPEED_PX_PER_SEC;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div
      data-testid="continuous-video-carousel"
      className="relative w-full overflow-hidden py-6 md:py-10 select-none"
    >
      {/* Curved top & bottom subtle pink architectural mask hints */}
      <div
        ref={stageRef}
        role="region"
        aria-label="Continuous treatment video carousel — drag horizontally to explore"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        style={{ touchAction: 'pan-y' }}
        className={`relative mx-auto h-[410px] sm:h-[470px] md:h-[530px] w-full ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {CAROUSEL_VIDEOS.map((item: CarouselVideoItem, index: number) => {
          const hasFailed = Boolean(failedIds[item.id]);
          return (
            <div
              key={item.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-testid="carousel-video-card"
              className="absolute left-1/2 top-4 -ml-[118px] w-[236px] sm:-ml-[138px] sm:w-[276px] md:-ml-[158px] md:w-[316px] aspect-[9/14] overflow-hidden rounded-[26px] border border-[#EBC2D0] bg-[#F6DCE5] shadow-[0_18px_45px_rgba(169,79,112,0.12)] will-change-transform"
            >
              {!hasFailed ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={item.videoSrc}
                  poster={item.posterSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  onError={() =>
                    setFailedIds((prev) => ({ ...prev, [item.id]: true }))
                  }
                  className="pointer-events-none h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={item.posterSrc}
                  alt={item.title}
                  fill
                  sizes="320px"
                  referrerPolicy="no-referrer"
                  className="pointer-events-none object-cover"
                />
              )}

              {/* Subtle bottom scrim for editorial readability */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#292126]/85 via-[#292126]/35 to-transparent"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#F6DCE5]">
                  {item.category} · {item.durationLabel}
                </p>
                <h3 className="mt-1 font-editorial text-lg leading-snug text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
