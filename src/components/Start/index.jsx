import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Text,
  SlideFade,
  keyframes,
  Spinner,
  Link,
} from '@chakra-ui/react'

const bounce = keyframes`
  from {transform: scale(1.2,1.2)}
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
      <SlideFade in={!showText}>
        <Spinner
          size='xl'
          color='pink.400'
          thickness='4px'
          speed='0.65s'
          emptyColor='white'
        />
      </SlideFade>

      <SlideFade offsetY='-100px' in={showText}>
        <Button
          bgColor='pink.400'
          color='white'
          size='lg'
          _hover={{ bg: 'pink.400' }}
          animation={bounceAnimation}
          onClick={() => setPlay(true)}
        >
          Play
        </Button>
        <Box position='absolute' bottom='0' right='0' color='white'>
          <Link href='https://www.linkedin.com/in/facunorie/' isExternal>
            <i className='bx bxl-linkedin' style={{ fontSize: '24px' }}></i>
          </Link>
          <Link href='https://twitter.com/noriedev' isExternal ml='10px'>
            <i className='bx bxl-twitter' style={{ fontSize: '24px' }}></i>
          </Link>
        </Box>
      </SlideFade>
    </Box>
  )
}
