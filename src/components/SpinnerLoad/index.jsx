import React from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export default function SpinnerLoad() {
  return (
    <Box
      w='100vw'
      h='100vh'
      position='absolute'
      left='0'
      top='0'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Spinner
        size='xl'
        color='pink.400'
        thickness='4px'
        speed='0.65s'
        emptyColor='white'
      />
    </Box>
  )
}
