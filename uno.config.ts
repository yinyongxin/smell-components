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
      primary: 'var(--color-primary)',
      danger: 'var(--color-danger)',
      warning: 'var(--color-warning)',
      success: 'var(--color-success)',
    },

  },
  presets: [
    presetWind3(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})