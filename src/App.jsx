import React, { useState } from 'react'
import Game from './components/Game'
import Start from './components/Start'
import { Box } from '@chakra-ui/react'

function App() {
  const [play, setPlay] = useState(false)
  return (
    <Box bgColor='messenger.500' h='100vh'>
      {play ? <Game /> : <Start setPlay={setPlay} />}
    </Box>
  )
}

export default App
