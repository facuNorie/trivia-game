import React, { useState, useEffect } from 'react'
import { Box, Button } from '@chakra-ui/react'

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
    <>
      <Box>
        Score <br /> {score}
      </Box>
      <Box>
        Record <br /> {record}
      </Box>
      <Box>
        <Button
          bgColor='pink.400'
          color='white'
          size='lg'
          _hover={{ bg: 'pink.400' }}
          onClick={() => setPlay(false)}
        >
          Play again
        </Button>
      </Box>
    </>
  )
}
