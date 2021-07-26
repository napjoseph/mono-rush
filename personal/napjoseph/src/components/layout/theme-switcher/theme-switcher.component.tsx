import React from 'react';
import { Box, Switch, Stack, useColorMode, useColorModeValue as mode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const iconSize = '10px';

  return (
    <Stack direction="row" justify="center" align="center">
      <Box textColor={mode('gray.600', 'gray.600')}>
        <FaSun title="Light Mode" aria-label="Change to Light Mode" size={iconSize} />
      </Box>
      <Switch
        isChecked={isDark}
        onChange={toggleColorMode}
        colorScheme="black"
        aria-label="Toggle theme"
      />
      <Box textColor={mode('gray.300', 'gray.100')}>
        <FaMoon title="Dark Mode" aria-label="Change to Dark Mode" size={iconSize} />
      </Box>
    </Stack>
  );
};

export default ThemeSwitcher;
