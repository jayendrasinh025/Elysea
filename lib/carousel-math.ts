export interface CarouselCardTransform {
  x: number;
  y: number;
  rotateY: number;
  scale: number;
  zIndex: number;
  opacity: number;
}

export function wrapOffset(offset: number, trackLength: number): number {
  if (trackLength <= 0) return 0;
  return ((offset % trackLength) + trackLength) % trackLength;
}

/**
 * Computes a wrapped 3D curved arc position for a card in an infinite right-to-left carousel.
 * Cards remain continuously mounted so underlying <video> elements never reset timestamps.
 */
export function computeCardPosition(
  index: number,
  scrollDistance: number,
  step: number,
  totalCards: number,
  viewportWidth: number
): CarouselCardTransform {
  const trackLength = step * totalCards;
  if (trackLength <= 0 || viewportWidth <= 0) {
    return { x: 0, y: 0, rotateY: 0, scale: 1, zIndex: 1, opacity: 1 };
  }

  const raw = index * step - scrollDistance;
  // Wrap symmetrically into [-trackLength / 2, trackLength / 2)
  let centered = ((raw % trackLength) + trackLength) % trackLength;
  if (centered >= trackLength / 2) {
    centered -= trackLength;
  }

  // Normalized horizontal position relative to half-viewport
  const halfSpan = Math.max(viewportWidth * 0.55, step * 1.5);
  const norm = Math.max(-1.4, Math.min(1.4, centered / halfSpan));

  // Reelmark-inspired panoramic arc: subtle concave sweep + gentle tilt toward center
  const absNorm = Math.abs(norm);
  const y = Math.pow(absNorm, 1.85) * 28;
  const rotateY = norm === 0 ? 0 : norm * -11;
  const scale = 1 - Math.min(0.12, absNorm * 0.08);
  const zIndex = Math.round(50 - absNorm * 20);
  const opacity = absNorm > 1.25 ? Math.max(0.4, 1 - (absNorm - 1.25) * 2) : 1;

  return {
    x: centered,
    y,
    rotateY,
    scale,
    zIndex,
    opacity,
  };
}

/**
 * Blends pointer release velocity smoothly back toward the steady auto-scroll cruise velocity.
 */
export function blendVelocity(
  currentVelocity: number,
  cruiseVelocity: number,
  dtSeconds: number,
  damping = 4.5
): number {
  const factor = 1 - Math.exp(-damping * Math.max(0, dtSeconds));
  return currentVelocity + (cruiseVelocity - currentVelocity) * factor;
}
