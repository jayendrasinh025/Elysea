'use client';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { EXPERIENCE_REELS, type ExperienceReelItem } from '@/lib/clinic-data';

export default function ExperienceCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const [pausedReels, setPausedReels] = useState<Record<string, boolean>>({});
  const [unmutedId, setUnmutedId] = useState<string | null>(null);
  const [autoGlide, setAutoGlide] = useState(true);

  // Subtle horizontal auto-drift for the patient experience track
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !autoGlide) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let rafId = 0;
    let last = performance.now();

    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (track.scrollWidth > track.clientWidth) {
        track.scrollLeft += 28 * dt;
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 2) {
          track.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [autoGlide]);

  const togglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setPausedReels((prev) => ({ ...prev, [id]: false }));
    } else {
      video.pause();
      setPausedReels((prev) => ({ ...prev, [id]: true }));
    }
  };

  const toggleMute = (id: string) => {
    const nextUnmuted = unmutedId === id ? null : id;
    Object.entries(videoRefs.current).forEach(([key, vid]) => {
      if (!vid) return;
      vid.muted = key !== nextUnmuted;
    });
    setUnmutedId(nextUnmuted);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-[#777078]">
          Authentic in-clinic clinical procedure recordings from ELYSEA Aesthetic Clinic.
        </p>
        <button
          type="button"
          onClick={() => setAutoGlide((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-full border border-[#EBC2D0] bg-white px-4 py-1.5 text-xs tracking-[0.08em] uppercase text-[#292126] transition-colors hover:border-[#A94F70] hover:text-[#A94F70]"
        >
          {autoGlide ? (
            <>
              <Pause className="h-3.5 w-3.5" />
              <span>Pause Carousel Drift</span>
            </>
          ) : (
            <>
              <Play className="h-3.5 w-3.5" />
              <span>Resume Carousel Drift</span>
            </>
          )}
        </button>
      </div>

      <div
        ref={trackRef}
        onPointerDown={() => setAutoGlide(false)}
        className="no-scrollbar flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
      >
        {EXPERIENCE_REELS.map((reel: ExperienceReelItem) => {
          const isPaused = Boolean(pausedReels[reel.id]);
          const isUnmuted = unmutedId === reel.id;
          return (
            <article
              key={reel.id}
              className="w-[270px] sm:w-[310px] shrink-0 snap-start space-y-3"
            >
              <div className="relative aspect-[9/14] overflow-hidden rounded-[24px] border border-[#EBC2D0] bg-[#F6DCE5]">
                <video
                  ref={(el) => {
                    videoRefs.current[reel.id] = el;
                  }}
                  src={reel.videoSrc}
                  poster={reel.posterSrc}
                  autoPlay
                  muted={!isUnmuted}
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#292126]/80 via-[#292126]/25 to-transparent"
                />

                {/* Play & Audio Controls */}
                <div className="absolute right-3 top-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => togglePlay(reel.id)}
                    aria-label={isPaused ? `Play ${reel.title}` : `Pause ${reel.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF8FA]/90 text-[#292126] backdrop-blur-sm transition-colors hover:bg-white"
                  >
                    {isPaused ? (
                      <Play className="h-4 w-4" />
                    ) : (
                      <Pause className="h-4 w-4" />
                    )}
                  </button>

                  {reel.hasAudio && (
                    <button
                      type="button"
                      onClick={() => toggleMute(reel.id)}
                      aria-label={
                        isUnmuted
                          ? `Mute ${reel.title}`
                          : `Unmute audio for ${reel.title}`
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#A94F70]/90 text-white backdrop-blur-sm transition-colors hover:bg-[#8C3D5A]"
                    >
                      {isUnmuted ? (
                        <Volume2 className="h-4 w-4" />
                      ) : (
                        <VolumeX className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-[10px] tracking-[0.16em] uppercase text-[#F6DCE5]">
                    {reel.verifiedType}
                  </p>
                  <h3 className="mt-1 font-editorial text-lg leading-snug">
                    {reel.title}
                  </h3>
                </div>
              </div>

              <div className="px-1">
                <p className="text-[11px] tracking-[0.12em] uppercase text-[#A94F70]">
                  {reel.procedure}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[#777078]">
                  {reel.caption}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
