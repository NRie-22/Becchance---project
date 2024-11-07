export interface Theme {
  space: number[];
  fontSizes: number[];
  fontWeights: number[];
  lineHeights: number[];
  width: number[];
  heights: number[];
  colors: {
    browns: string[];
    blue: string[];
    red: string[];
    pink: string[];
    orange: string[];
    green: string[];
    yellow: string[];
    gray: string[];
    white: string[];
    boxShadow: string[];
    gradient: string[];
    backdropColor: string[];
  };
  breakpoints: string[];
  body?: string;
  textColor?: string;
  boxShadowNav?: string;
  hoverColor?: string;
  accentColor?: string;
}

const browns = [
  '#f9f6f3',
  '#f0ebe4',
  '#e1d4c7',
  '#cdb8a4',
  '#bea08a',
  '#a97f66',
  '#825b4c',
  '#6a4b42',
  '#573e37',
  '#2e201c',
];
const blue = [
  '#f2f7fc',
  '#e3ecf6',
  '#cde0f0',
  '#aecde7',
  '#82aed8',
  '#6494cd',
  '#507BC0',
  '#4669af',
  '#3e578f',
  '#364972',
  '#242f47',
  '#22d3eeff',
  '#312e81ff',
];
const red = ['#f87171ff', '#8b2605'];
const pink = ['#ec4899ff', '#f54c7a'];
const orange = [
  '#fff5ed',
  '#ffe8d5',
  '#fed0aa',
  '#fdb274',
  '#fb923cff',
  '#f97c16',
  '#ea700c',
  '#c25e0c',
  '#9a4f12',
  '#7c4212',
  '#432207',
];
const green = [
  '#f2fde8',
  '#e0fbcc',
  '#c2f6a0',
  '#9cee69',
  '#78e13a',
  '#58c71b',
  '#409f11',
  '#337912',
  '#2c6014',
  '#275116',
  '#102d06',
];
const yellow = ['#fcd34dff'];
const gray = ['#9ca3afff'];
const white = ['#ffffffff'];

const boxShadow = [
  '13px 13px 24px 1px rgb(39,81,22)',
  '8px 5px 50px 2px rgb(44,96,20)',
  '8px 5px 24px 1px rgba(54,73,114)',
  '13px 13px 24px 1px rgba(36,47,71)',
  '13px 13px 24px 1px rgba(46,32,28,1)',
];

const gradient = [
  'linear-gradient(to right, transparent, #fb923c , #78e13a )',
  'linear-gradient(to right,transparent,#78e13a 0%,rgba(124, 58, 237, 0) 100%)',
  'linear-gradient(140deg, rgba(255,255,255,1) 47%, rgba(64,159,17,1) 100%)',
  'linear-gradient(140deg, rgba(0,0,0,1) 50%, rgba(64,159,17,1) 100%)',
  'linear-gradient(to right, #141f0f, #050c02)',
];

const backdropColor = ['rgba(46, 47, 66, 0.4)'];

const theme: Theme = {
  space: [0, 4, 8, 16, 20, 30, 32, 64, 128, 256, 512],
  fontSizes: [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 48, 50],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: [1.5, 1.8, 2, 2.5],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  colors: {
    browns,
    blue,
    red,
    pink,
    orange,
    green,
    yellow,
    gray,
    white,
    boxShadow,
    gradient,
    backdropColor,
  },
  breakpoints: ['0px', '640px', '1024px', '1200px', '1440px'],
};

export const darkTheme: Theme = {
  ...theme,
  body: theme.colors.gradient[3],
  textColor: theme.colors.green[0],
  boxShadowNav: theme.colors.boxShadow[1],
  hoverColor: theme.colors.green[5],
  accentColor: theme.colors.green[3],
};

export const lightTheme: Theme = {
  ...theme,
  body: theme.colors.gradient[2],
  textColor: theme.colors.green[10],
  boxShadowNav: theme.colors.boxShadow[0],
  hoverColor: theme.colors.green[8],
  accentColor: theme.colors.green[7],
};

export default theme;
