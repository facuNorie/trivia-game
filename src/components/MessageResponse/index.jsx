import React from 'react'
import { Text, Box } from '@chakra-ui/react'

export default function MessageResponse({ title }) {
  return (
    <Box pos='relative'>
      <Text
        fontSize='5xl'
        color={title === 'CORRECT' ? 'green.500' : 'red.500'}
        fontWeight='extrabold'
        textShadow='2px 2px white'
        position='absolute'
        left='50%'
        marginLeft={title === 'CORRECT' ? '-115px' : '-140px'}
        top='50%'
        marginTop='-36px'
        zIndex='10'
      >
        {title}
      </Text>
    </Box>
  )
}
