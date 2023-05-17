import { useState } from "react";
import React from 'react';
import { SignOut } from "phosphor-react-native";
import { VStack, Heading, HStack, IconButton, useTheme, Text, FlatList } from 'native-base';

import Logo from '../assets/logo_secondary.svg'
import { Filter } from '../components/Filter'
import { Order, OrderProps } from '../components/Order'

export function Home() {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')
  const [orders, setOrders] = useState<OrderProps[]>([{
    id: '1',
    patrimony: '213321',
    when: '18/07/2023 ás 10:00',
    status: 'open'
  }])

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

        <VStack flex={1} px={6}>
            <HStack w="full" mt={6} mb={4} justifyContent={"space-between"} alignItems={"center"}>
                <Heading color={"gray.100"}>
                    Meus chamados
                </Heading>
                <Text color="gray.200">
                    3
                </Text>
            </HStack>

            <HStack space={3} mb={8}>
                <Filter
                    type="open"
                    title="Em andamento"
                    onPress={() => setStatusSelected('open')}
                    isActive={statusSelected === 'open'}
                />
                
                <Filter
                    type="closed"
                    title="Finalizados"
                    onPress={() => setStatusSelected('closed')}
                    isActive={statusSelected === 'closed'}
                />
            </HStack>

            <FlatList
                data={orders}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Order data={item}/>}
            />
        </VStack>
    </VStack>
  );
}