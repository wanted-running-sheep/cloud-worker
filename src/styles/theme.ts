import mixins from './mixins';
import media from './media';

const color = {
  background: {
    white: '#FFFFFF',
    lightgray: '#F7F7F7',
    lightyellow: '#f8f3e7',
    gray: '#E5E5E5',
    darkgray: '#606376A6',
    black: '#000000',
  },

  font: {
    white: '#FFFFFF',
    lightgray: '#E4E4E4',
    gray: '#A9A9A9',
    darkgray: '#B0B0B0',
    black: '#000000',
  },
  border: {
    lightgray: '#E1E1E1',
  },
  button: {
    lightgray: '#F5F5F5',
    gray: '#D9D9D9',
    black: '#4A4A4A',
  },
};

export const theme = {
  color,
  media,
  mixins,
};
export type Theme = typeof theme;
