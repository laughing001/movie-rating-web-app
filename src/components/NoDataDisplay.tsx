'use client';
import React from 'react';
import { Text, VStack, Icon } from '@chakra-ui/react';
import { MdErrorOutline } from 'react-icons/md';

interface NoDataDisplayProps {
  message?: string;
}

const NoDataDisplay: React.FC<NoDataDisplayProps> = ({ message = '没有数据可显示' }) => {
  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Icon as={MdErrorOutline} boxSize={12} color="gray.500" />
      <Text fontSize="lg" color="gray.600">
        {message}
      </Text>
    </VStack>
  );
};

export default NoDataDisplay;
