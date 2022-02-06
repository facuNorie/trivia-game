import React, { useEffect } from 'react'
import { Box, Button, Text, Tag, TagLabel } from '@chakra-ui/react'

export default function End({ score, record, setRecord, setPlay }) {
  const newRecord = () => {
    if (score > record) {
      setRecord(score)
    }
  }

  useEffect(() => {
    newRecord()
  }, [])
  useEffect(() => {
    localStorage.setItem('record', record)
  }, [record])

  return (
    <Box
      h='100vh'
      d='flex'
      flexDir='column'
      alignItems='center'
      justifyContent='space-around'
    >
      <Box textAlign='center'>
        <Text fontSize='2xl'>You scored:</Text>
        <Text fontSize='7xl'>{score}</Text>
      </Box>

      <Text>Record: {record} </Text>
      <Button
        bgColor='pink.400'
        color='white'
        _hover={{ bg: 'pink.400' }}
        onClick={() => setPlay(false)}
      >
        Play again
      </Button>
    </Box>
  )
}
