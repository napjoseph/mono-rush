import { extendTheme } from '@chakra-ui/react';

// https://chakra-ui.com/docs/theming/theme#colors
const colors = {
  brand: {
    900: '#2f1d04',
    800: '#5d3909',
    700: '#8c560d',
    600: '#bb7311',
    500: '#e99016',
    400: '#eda440',
    300: '#f1b86a',
    200: '#f5cc94',
    100: '#f9e0be',
    50: '#fdf4e8'
  }
};

export const theme = extendTheme({
  colors
});
