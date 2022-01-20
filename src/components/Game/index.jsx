import { useState, useEffect } from 'react'
import {
  useDisclosure,
  Box,
  Text,
  Badge,
  Progress,
  ScaleFade,
} from '@chakra-ui/react'

import { getQuestion } from '../../services/triviaApi'
import Question from '../Question'
import Answer from '../Answer'
export default function Game() {
  const [question, setQuestion] = useState(null)
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [reveal, setReveal] = useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const generateQuestion = () => {
    setReveal(false)
    onClose()
    getQuestion().then((res) => {
      let data = res[0]
      setQuestion(res)
      setAnswers([data.correct_answer, ...data.incorrect_answers])
      onOpen()
    })
  }
  let colorBadge = 'red'
  if (question !== null) {
    colorBadge =
      question[0].difficulty === 'easy'
        ? 'green'
        : question[0].difficulty === 'medium'
        ? 'purple'
        : 'red'
  }

  useEffect(() => {
    generateQuestion()
  }, [])
  return (
    <Box>
      <Text fontWeight='bold' fontSize='xl' p={2} color='white'>
        Score: {score}/10
      </Text>
      {/* <Button w='10%' h='50px' colorScheme='orange' onClick={generateQuestion}>
          Next
        </Button> */}
      <ScaleFade initialScale={0.7} in={isOpen}>
        <Question text={question !== null && question[0].question} />
        <Box align='center'>
          <Badge colorScheme={question !== null && colorBadge}>
            {question !== null && question[0].difficulty}
          </Badge>
        </Box>
        <Answer
          answers={answers}
          reveal={reveal}
          setReveal={setReveal}
          score={score}
          setScore={setScore}
          generateQuestion={generateQuestion}
        />
      </ScaleFade>
      <Progress
        hasStripe
        isAnimated
        value={score * 10}
        max='100'
        colorScheme='pink'
      />
      <br />
    </Box>
  )
}