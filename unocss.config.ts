import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
  rules: [
    ['hc-font-style', {
      'filter': 'drop-shadow(2px 2px 2px var(--schwarz))',
      '-webkit-text-stroke': '1px #000',
      'background': 'linear-gradient(45deg, #f7a823, #e4003a)',
      '-webkit-text-fill-color': 'transparent',
      '-webkit-background-clip': 'text',
      'text-transform': 'uppercase',
      'transition': 'all 0.1s ease-in-out',
    }],
    ['action-comics', {
      'font-family': 'action-comics-black',
    }],
    ['comic-kings', {
      'font-family': 'comic-kings',
    }],
    ['hidden-controls', {
      '-moz-appearance': 'textfield',
    }],
    ['scale', {
      transform: 'scale(1.1)',
      cursor: 'pointer',
      filter: 'drop-shadow(15px 15px 15px var(--schwarz))',
    }],
  ],
})
