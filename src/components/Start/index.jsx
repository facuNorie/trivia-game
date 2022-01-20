import React from 'react'
import { Box, Button } from '@chakra-ui/react'
export default function Start({ setPlay }) {
  return (
    <Box>
      Trivia game
      <Button onClick={() => setPlay(true)}>Play</Button>
    </Box>
  )
}
