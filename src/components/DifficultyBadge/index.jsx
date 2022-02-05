import React from 'react'
import { Box, Badge } from '@chakra-ui/react'

export default function DifficultyBadge({ question }) {
  let colorBadge = 'red'
  if (question !== null) {
    colorBadge =
      question.difficulty === 'easy'
        ? 'green'
        : question.difficulty === 'medium'
        ? 'purple'
        : 'red'
  }

  return (
    <Box align='center'>
      <Badge colorScheme={question !== null && colorBadge}>
        {question !== null && question.difficulty}
      </Badge>
    </Box>
  )
}
