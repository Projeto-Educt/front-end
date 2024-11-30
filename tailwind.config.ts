import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          100: '#ecbec4',
          200: '#d87e8a',
          300: '#c53d4f',
          400: '#942e3c',
          500: '#6d212b',
        },
        gray: {
          100: '#e6e7ea',
          200: '#caccd3',
          300: '#afb2bc',
          400: '#9397a4',
          500: '#777d8d',
          600: '#606472',
          700: '#484c56',
          800: '#31333b',
          900: '#1a1b1f',
        },
        primary: {
          50: '#F0F3FF',
          100: '#dbe1f5',
          200: '#b7c3ea',
          300: '#93a4e0',
          400: '#6f86d5',
          500: '#4b68cb',
          600: '#3552b7',
          700: '#2b4496',
          800: '#223576',
          900: '#192655',
        },
        secondary: {
          100: '#84ece9',
          200: '#47e2de',
          300: '#1fc2be',
          400: '#158582',
          500: '#0c4e4c',
        },
        yellow: {
          100: '#f6e5aa',
          200: '#edcb56',
          300: '#cfa616',
          400: '#a18111',
          500: '#735c0c',
        },
        green: {
          100: '#aef1e0',
          200: '#5de3c0',
          300: '#21c197',
          400: '#1a9676',
          500: '#126b54',
        },
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
