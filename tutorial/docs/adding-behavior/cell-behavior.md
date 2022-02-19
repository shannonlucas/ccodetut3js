---
sidebar_position: 2
---

# Building cell behavior

```javascript
/**
 * Create a new cell with a random size and growth direction.
 *
 * @param {number} maxSize the maximum size the cell can grow to; this must be a
 *        positive number
 * @param {number} minSize the minimum size the cell can shrink to; this must be
 *        less than maxSize and greater than or equal to zero
 * @param {number} growthRate how fast the cell can grow each time the next cell
 *        state is generated
 * @returns {object} an object containing the cell information
 */
function spawnCell(maxSize, minSize, growthRate) {
  const size = Math.random() * (maxSize - minSize) + minSize;
  const direction = Math.random() < 0.5 ? -1 : 1;
  const growth = growthRate * direction;

  return {
    size,
    growth,
    maxSize,
    minSize,
  };
}
```
