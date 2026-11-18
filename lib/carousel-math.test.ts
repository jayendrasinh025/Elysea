import test from 'node:test';
import assert from 'node:assert/strict';
import { blendVelocity, computeCardPosition, wrapOffset } from './carousel-math';

test('wrapOffset keeps offsets within [0, trackLength)', () => {
  assert.equal(wrapOffset(250, 1000), 250);
  assert.equal(wrapOffset(1250, 1000), 250);
  assert.equal(wrapOffset(-150, 1000), 850);
  assert.equal(wrapOffset(0, 1000), 0);
});

test('computeCardPosition wraps seamlessly without gaps', () => {
  const totalCards = 8;
  const step = 340;
  const viewportWidth = 1440;

  const centerCard = computeCardPosition(0, 0, step, totalCards, viewportWidth);
  assert.equal(centerCard.x, 0);
  assert.equal(centerCard.y, 0);
  assert.equal(centerCard.rotateY, 0);
  assert.equal(centerCard.scale, 1);

  // Moving scrollDistance by full trackLength returns identical coordinates
  const wrappedCard = computeCardPosition(0, step * totalCards, step, totalCards, viewportWidth);
  assert.equal(wrappedCard.x, centerCard.x);
  assert.equal(wrappedCard.y, centerCard.y);

  // Adjacent cards follow symmetric curve
  const rightCard = computeCardPosition(1, 0, step, totalCards, viewportWidth);
  const leftCard = computeCardPosition(7, 0, step, totalCards, viewportWidth);
  assert.equal(rightCard.x, step);
  assert.equal(leftCard.x, -step);
  assert.ok(rightCard.y > 0);
  assert.ok(Math.abs(rightCard.y - leftCard.y) < 0.001);
});

test('blendVelocity converges smoothly toward cruiseVelocity', () => {
  const v1 = blendVelocity(400, 60, 0.2, 5);
  assert.ok(v1 < 400 && v1 > 60);

  const v2 = blendVelocity(v1, 60, 2.0, 5);
  assert.ok(Math.abs(v2 - 60) < 0.5);
});
