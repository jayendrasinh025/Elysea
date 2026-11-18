'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
  title: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  title,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width <= 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(4, Math.min(96, Math.round(pct))));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons === 0 && e.pointerType === 'mouse') return;
    updateFromClientX(e.clientX);
  };

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        data-testid="before-after-slider"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        style={{ touchAction: 'pan-y' }}
        className="relative aspect-[3/4] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-[#EBC2D0] bg-[#F6DCE5]"
      >
        {/* After layer (full base) */}
        <Image
          src={afterSrc}
          alt={`${title} — ${afterLabel}`}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          referrerPolicy="no-referrer"
          className="pointer-events-none object-cover"
        />

        {/* Before layer clipped smoothly from the right */}
        <div
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          className="pointer-events-none absolute inset-0"
        >
          <Image
            src={beforeSrc}
            alt={`${title} — ${beforeLabel}`}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            referrerPolicy="no-referrer"
            className="object-cover"
          />
        </div>

        {/* Hairline divider + rose drag handle */}
        <div
          style={{ left: `${position}%` }}
          className="pointer-events-none absolute inset-y-0 -translate-x-1/2"
        >
          <div className="h-full w-[1.5px] bg-white shadow-[0_0_8px_rgba(41,33,38,0.4)]" />
          <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#EBC2D0] bg-[#FFF8FA] text-[#A94F70] shadow-md">
            <MoveHorizontal className="h-4 w-4" />
          </div>
        </div>

        {/* Crisp labels */}
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-[#292126]/75 px-3 py-1 text-[10px] font-medium tracking-[0.14em] uppercase text-white">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-[#A94F70]/90 px-3 py-1 text-[10px] font-medium tracking-[0.14em] uppercase text-white">
          {afterLabel}
        </span>
      </div>

      {/* Accessible range control */}
      <div className="flex items-center gap-3">
        <span className="text-[11px] tracking-[0.12em] uppercase text-[#777078]">
          Slide
        </span>
        <input
          type="range"
          min={4}
          max={96}
          value={position}
          aria-label={`Comparison slider for ${title}`}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="h-1.5 w-full cursor-pointer accent-[#A94F70]"
        />
        <span className="w-10 text-right text-xs tabular-nums text-[#777078]">
          {position}%
        </span>
      </div>
    </div>
  );
}
