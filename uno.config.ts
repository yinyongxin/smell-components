import {
  defineConfig,
  presetIcons,
  presetWind3,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: [
  ],
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    colors: {
      // primary: 'var(--color-primary)',
      // danger: 'var(--color-danger)',
      // warning: 'var(--color-warning)',
      // success: 'var(--color-success)',
      primary: '#3390fa',
      danger: '#f53d3d',
      warning: '#ff7b00',
      success: '#00b32a',
    },

  },
  presets: [
    presetWind3({
    }),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})