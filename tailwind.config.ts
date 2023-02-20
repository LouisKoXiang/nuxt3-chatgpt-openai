import type { Config } from 'tailwindcss'
import tailwindForms from '@tailwindcss/forms'

export default <Partial<Config>>{
  darkMode: 'class',
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd'
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  content: [
    './node_modules/flowbite/**/*.js'
  ],
  plugins: [
    tailwindForms,
    require('flowbite')
  ]
}
