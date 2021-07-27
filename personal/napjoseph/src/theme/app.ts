import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

// https://chakra-ui.com/docs/features/responsive-styles#customizing-breakpoints
//
// - sm - 30em
// - md - 48em
// - lg - 62em
// - xl - 80em
// - 2xl - 96em
const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em'
});

// https://chakra-ui.com/docs/theming/theme#colors
const colors = {
  brand: {
    900: '#06102d',
    800: '#0c205a',
    700: '#123187',
    600: '#1841b4',
    500: '#1e51e1',
    400: '#4770e6',
    300: '#6f90ec',
    200: '#98aff1',
    100: '#c0cef7',
    50: '#e9eefc'
  }
};

// https://chakra-ui.com/docs/features/text-and-layer-styles
//
// - Color or text color
// - Background color
// - Border width and border color
// - Box shadow
// - Opacity
//
// If you want to specifically update a property in dark mode, you can:
// use `'.chakra-ui-[light|dark] &': { textColor: 'red.300' }` as per:
// https://github.com/chakra-ui/chakra-ui/issues/2231#issuecomment-771531813
// Note that you should also add a similar one if you want to target it when
// hovered, etc, because of CSS specificity.
const layerStyles = {
  muted: {
    textColor: 'gray.400'
  },
  'site-title': {
    '.chakra-ui-light &': {
      textColor: 'gray.700'
    },
    '.chakra-ui-dark &': {
      textColor: 'gray.200'
    }
  },
  'site-title-hover': {
    textDecoration: 'none',
    '.chakra-ui-light &': {
      textColor: 'brand.600'
    },
    '.chakra-ui-dark &': {
      textColor: 'brand.500'
    }
  },
  links: {
    '.chakra-ui-light &': {
      textColor: 'gray.500'
    },
    '.chakra-ui-dark &': {
      textColor: 'gray.200'
    }
  },
  'links-hover': {
    textDecoration: 'none',
    '.chakra-ui-light &': {
      textColor: 'brand.600'
    },
    '.chakra-ui-dark &': {
      textColor: 'brand.500'
    }
  },
  'site-navigation': {
    bg: 'gray.500',
    textColor: 'gray.100'
  },
  'site-navigation-active': {
    bg: 'gray.700',
    textColor: 'gray.100'
  },
  'site-navigation-hover': {
    bg: 'brand.600',
    textColor: 'gray.100'
  }
};

// https://chakra-ui.com/docs/features/text-and-layer-styles
//
// - Font family, weight, and size
// - Line height
// - Letter spacing
// - Text decoration (strikethrough and underline)
// - Text transform (uppercase, lowercase, and capitalization)
const textStyles = {
  'site-title': {
    fontSize: '4xl',
    fontWeight: 'black'
  },
  'site-navigation': {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 'xs'
  }
};

export const theme = extendTheme({ colors, layerStyles, textStyles, breakpoints });
