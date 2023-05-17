import React from 'react';
import { SignOut } from "phosphor-react-native";
import { VStack, Heading, HStack, IconButton, useTheme } from 'native-base';
import Logo from '../assets/logo_secondary.svg'

export function Home() {
  const {colors} = useTheme();

  return (
    <VStack flex={1} pb={6} bg="gray.700">
        <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
            bg="gray.600"
            pt={12}
            pb={5}
            px={6}
        >
            <Logo/>

            <IconButton
                icon={<SignOut size={26} color={colors.gray[300]}/>}
            />
        </HStack>
    </VStack>
  );
}