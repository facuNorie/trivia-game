import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
export default function Start({ setPlay }) {
  return (
    <Box
      h='100%'
      display='flex'
      justifyContent='space-around'
      flexDirection='column'
      alignItems='center'
    >
      <Box w='200px' textAlign='center'>
        <Text
          bgColor='pink.400'
          color='white'
          fontSize='3xl'
          fontWeight='bold'
          py='10px'
        >
          Trivia
        </Text>
        <Text color='white' fontSize='3xl' fontWeight='bold'>
          Game
        </Text>
      </Box>

      <Button
        bgColor='pink.400'
        color='white'
        size='lg'
        _hover={{ bg: 'pink.400' }}
        onClick={() => setPlay(true)}
      >
        Play
      </Button>
    </Box>
  )
}
