import { useState, useEffect } from 'react'
import {
  useDisclosure,
  Box,
  Text,
  Badge,
  Progress,
  ScaleFade,
} from '@chakra-ui/react'

import { getQuestions } from '../../services/triviaApi'
import Question from '../Question'
import Answer from '../Answer'
import MessageResponse from '../MessageResponse'

export default function Game() {
  const [allQuestions, setAllQuestion] = useState(null)
  const [question, setQuestion] = useState(null)
  const [answers, setAnswers] = useState([])
  const [gameProgress, setGameProgress] = useState(1)
  const [reveal, setReveal] = useState(false)
  const [message, setMessage] = useState('')

  const { isOpen, onOpen, onClose } = useDisclosure()

  const getAllQuestions = async () => {
    let data = await getQuestions()
    setAllQuestion(data)
    setQuestion(data[0])
    setAnswers([data[0].correct_answer, ...data[0].incorrect_answers])
    onOpen()
  }
  const generateQuestion = (index) => {
    setReveal(false)
    onClose()
    let selectQ = allQuestions[index]
    setTimeout(() => {
      setQuestion(selectQ)
      setAnswers([selectQ.correct_answer, ...selectQ.incorrect_answers])
      onOpen()
    }, 1000)
  }
  /* Color of difficulty */
  let colorBadge = 'red'
  if (question !== null) {
    colorBadge =
      question.difficulty === 'easy'
        ? 'green'
        : question.difficulty === 'medium'
        ? 'purple'
        : 'red'
  }
  /* Shadow color of answer wrong or right */
  let shadowEffectColor =
    message === 'CORRECT' ? 'green' : message === 'INCORRECT' && 'red'

  useEffect(() => {
    getAllQuestions()
  }, [])

  return (
    <Box
      h='100%'
      transition='all .3s'
      style={{
        boxShadow:
          message !== ''
            ? `0px 0px 80px 10px ${shadowEffectColor} inset`
            : 'none',
      }}
    >
      <Text fontWeight='bold' fontSize='xl' p={2} color='white'>
        Question: {gameProgress}/10
      </Text>
      <ScaleFade initialScale={0.7} in={isOpen}>
        <Question text={question !== null && question.question} />
        <Box align='center'>
          <Badge colorScheme={question !== null && colorBadge}>
            {question !== null && question.difficulty}
          </Badge>
        </Box>
        <MessageResponse title={message} />
        <Answer
          answers={answers}
          reveal={reveal}
          setReveal={setReveal}
          gameProgress={gameProgress}
          setGameProgress={setGameProgress}
          generateQuestion={generateQuestion}
          setMessage={setMessage}
        />
      </ScaleFade>
      <Progress
        hasStripe
        isAnimated
        value={gameProgress * 10}
        max='100'
        colorScheme='pink'
      />
    </Box>
  )
}
