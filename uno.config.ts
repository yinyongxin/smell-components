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
  theme:{
    colors: {
      default: '#ffffff',
      primary: 'hsl(var(--hue, 217) 78% 51%)',
      secondary: '#ff0000',
      danger: '#ff0000',
      warning: '#ffff00',
      success: '#00ff00',
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