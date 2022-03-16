// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'introduction',
    },
    {
      type: 'category',
      label: 'Scene setup',
      collapsible: true,
      collapsed: true,
      items: [
        'scene-setup/scene-setup',
        'scene-setup/getting-started',
        'scene-setup/adding-lights',
        'scene-setup/adding-camera',
        'scene-setup/adding-renderer',
        'scene-setup/animation-loop',
        'scene-setup/put-it-together',
        'scene-setup/quick-demo',
        'scene-setup/postscript',
        'scene-setup/checkpoint',
      ]
    },
    {
      type: 'category',
      label: 'Adding objects',
      collapsible: true,
      collapsed: true,
      items: [
        'adding-objects/adding-objects',
        'adding-objects/creating-objects',
        'adding-objects/creating-grid',
        'adding-objects/put-it-together',
        'adding-objects/spinning-grid',
        'adding-objects/postscript',
        'adding-objects/checkpoint',
      ],
    },
    {
      type: 'category',
      label: 'Adding behavior',
      collapsible: true,
      collapsed: true,
      items: [
        'adding-behavior/adding-behavior',
        'adding-behavior/tracking-state',
        'adding-behavior/cell-behavior',
        'adding-behavior/group-behavior',
        'adding-behavior/computing-behavior',
        'adding-behavior/put-it-together',
        'adding-behavior/postscript',
        'adding-behavior/checkpoint',
      ],
    },
    {
      type: 'doc',
      label: 'Wrapping up',
      id: 'wrapping-up',
    },
  ],
};

module.exports = sidebars;
