import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      pos={'fixed'}
      top={4}
      zIndex={'overlay'}
      right={4}
      bgColor={'whatsapp.500'}
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  );
};
