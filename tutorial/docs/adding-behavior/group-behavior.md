---
id: group-behavior
title: Building group behavior
sidebar_position: 3
sidebar_label: Group behavior
description: Using state information to enable group behavior
keywords:
  - animation
  - creative coding
  - graphics
  - javascript
  - three.js
  - 3D
  - tutorial
---

```javascript
/**
 * Create an initial square grid of cells.
 *
 * @param {*} gridWidth the width of the grid in cells
 * @param {*} maxSize the maximum size the cell can grow to; this must be a
 *        positive number
 * @param {*} minSize the minimum size the cell can shrink to; this must be
 *        less than maxSize and greater than or equal to zero
 * @param {number} growthRate how fast the cell can grow each time the next cell
 *        state is generated
 * @returns {Array<Array<object>>} a two dimensional array of the cells
 */
function buildBehaviorGrid(gridWidth, maxSize, minSize, growthRate) {
  let cells = [];

  for (let x = 0; x < gridWidth; x++) {
    cells[x] = [];

    for (let y = 0; y < gridWidth; y++) {
      cells[x][y] = spawnCell(maxSize, minSize, growthRate);
    }
  }

  return cells;
}
```
