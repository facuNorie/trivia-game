import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Text,
  SlideFade,
  keyframes,
  ScaleFade,
} from '@chakra-ui/react'
import SpinnerLoad from '../SpinnerLoad'
import SocialMedia from '../SocialMedia'

const bounce = keyframes`
  from {transform: scale(1.1,1.1)}
  to {transform: scale(1.4,1.4)}
`
export default function Start({ setPlay }) {
  const [showText, setShowText] = useState(false)
  const bounceAnimation = `${bounce} infinite .8s alternate`

  useEffect(() => {
    setTimeout(() => {
      setShowText(true)
    }, 2000)
  }, [])

  if (showText === false) {
    return <SpinnerLoad />
  }

  return (
    <Box
      h='100%'
      display='flex'
      justifyContent={{ base: 'space-evenly', md: 'space-around' }}
      flexDirection='column'
      alignItems='center'
    >
      <Box w={{ base: '200px', md: '400px' }} textAlign='center'>
        <SlideFade offsetY='50px' in={showText}>
          <Text
            bgColor='pink.400'
            color='white'
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight='bold'
            py='10px'
          >
            Trivia
          </Text>
          <Text
            color='white'
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight='bold'
          >
            Game
          </Text>
        </SlideFade>
      </Box>
      <ScaleFade initialScale={0.1} in={showText}>
        <Text textAlign='center' color='white' fontWeight='bold' px={3}>
          one question, 4 options, will you get it right? <br /> and remember an
          easy question is worth 5 points, a medium 10 and a difficult one 15
          <br />
          try it and let's see your score
        </Text>
      </ScaleFade>

      <SlideFade offsetY='-100px' in={showText}>
        <Button
          bgColor='pink.400'
          color='white'
          fontWeight='bold'
          size='lg'
          _hover={{ bg: 'pink.400' }}
          animation={bounceAnimation}
          onClick={() => setPlay(true)}
        >
          Play
        </Button>
        <SocialMedia />
      </SlideFade>
    </Box>
  )
}
