import React, { useEffect, useState } from 'react'
import { Box, Button, Text, SlideFade } from '@chakra-ui/react'
import confetti from 'canvas-confetti'
import SpinnerLoad from '../SpinnerLoad'
import SocialMedia from '../SocialMedia'

export default function End({ score, record, setRecord, setPlay }) {
  const [showText, setShowText] = useState(false)
  const newRecord = () => {
    if (score > record) {
      setRecord(score)
    }
  }

  useEffect(() => {
    newRecord()

    setTimeout(() => {
      setShowText(true)
      confetti()
    }, 1000)
  }, [])
  useEffect(() => {
    localStorage.setItem('record', record)
  }, [record])

  if (showText === false) {
    return <SpinnerLoad />
  }

  return (
    <SlideFade offsetY='50px' in={showText}>
      <Box
        h='100vh'
        d='flex'
        flexDir='column'
        alignItems='center'
        justifyContent='space-evenly'
      >
        <Box textAlign='center'>
          <Text fontSize='2xl' color='white'>
            You scored:
          </Text>
          <Text fontSize='7xl' color='pink.400' fontWeight='extrabold'>
            {score}
          </Text>
        </Box>

        <Text color='white' fontWeight='bold'>
          Record: {record}{' '}
        </Text>
        <Button
          bgColor='pink.400'
          color='white'
          _hover={{ bg: 'pink.400' }}
          onClick={() => setPlay(false)}
        >
          Play again
        </Button>
      </Box>
      <SocialMedia />
    </SlideFade>
  )
}
