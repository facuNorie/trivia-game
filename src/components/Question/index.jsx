import React from 'react'
import { decode } from 'html-entities'
import { Text } from '@chakra-ui/react'

export default function Question({ text }) {
  return (
    <Text fontSize='3xl' p={5} textAlign='center' mt='50px'>
      {decode(text, { level: 'html5' })}
    </Text>
  )
}
