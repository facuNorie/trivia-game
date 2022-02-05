import React from 'react'
import { decode } from 'html-entities'
import { Text, Box } from '@chakra-ui/react'

export default function Question({ text }) {
  return (
    <>
      <Text
        fontSize={{ base: 'xl', md: '3xl' }}
        textAlign='center'
        bgColor='pink.400'
        color='white'
        boxShadow='xl'
        my={{ base: '15px', md: '30px' }}
        mx={5}
        p={{ base: '4', md: '6' }}
      >
        {decode(text, { level: 'html5' })}
      </Text>
    </>
  )
}
