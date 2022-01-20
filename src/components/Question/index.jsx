import React from 'react'
import { decode } from 'html-entities'
import { Text, Box } from '@chakra-ui/react'

export default function Question({ text }) {
  return (
    <Box bgColor='pink.400' color='white' boxShadow='xl' my='30px' mx={5} p='8'>
      <Text fontSize='3xl' textAlign='center'>
        {decode(text, { level: 'html5' })}
      </Text>
    </Box>
  )
}
