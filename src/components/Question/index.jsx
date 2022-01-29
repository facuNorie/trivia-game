import React from 'react'
import { decode } from 'html-entities'
import { Text, Box } from '@chakra-ui/react'

export default function Question({ text }) {
  return (
    <Box
      bgColor='pink.400'
      color='white'
      boxShadow='xl'
      my={{ base: '15px', md: '30px' }}
      mx={5}
      p={{ base: '4', md: '8' }}
    >
      <Text fontSize={{ base: 'xl', md: '3xl' }} textAlign='center'>
        {decode(text, { level: 'html5' })}
      </Text>
    </Box>
  )
}
