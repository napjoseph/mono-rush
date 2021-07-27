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
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
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
  links: {
    textColor: 'gray.500'
  },
  linksHover: {
    textColor: 'blue.600',
    textDecoration: 'none'
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
  }
};

export const theme = extendTheme({ colors, layerStyles, textStyles, breakpoints });
