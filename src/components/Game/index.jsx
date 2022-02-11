import { useState, useEffect } from 'react'
import { useDisclosure, Box, Text, Progress, ScaleFade } from '@chakra-ui/react'
import { getQuestions } from '../../services/triviaApi'
import Question from '../Question'
import Answer from '../Answer'
import MessageResponse from '../MessageResponse'
import DifficultyBadge from '../DifficultyBadge'
import End from '../End'
import SpinnerLoad from '../SpinnerLoad'

export default function Game({ setPlay }) {
  const [allQuestions, setAllQuestion] = useState(null)
  const [question, setQuestion] = useState(null)
  const [answers, setAnswers] = useState([])
  const [gameProgress, setGameProgress] = useState(1)
  const [reveal, setReveal] = useState(false)
  const [message, setMessage] = useState('')
  const [score, setScore] = useState(0)
  const [record, setRecord] = useState(0)

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
      setAnswers([selectQ?.correct_answer, ...selectQ?.incorrect_answers])
      onOpen()
    }, 1000)
  }

  /* Shadow color of answer wrong or right */
  let shadowEffectColor =
    message === 'CORRECT' ? 'green' : message === 'INCORRECT' && 'red'

  useEffect(() => {
    getAllQuestions()
    localStorage.getItem('record') !== null &&
      setRecord(localStorage.getItem('record'))
  }, [])

  if (question === null) {
    return <SpinnerLoad />
  }

  return (
    <>
      {gameProgress <= 10 ? (
        <Box
          h='100%'
          display='flex'
          flexDir='column'
          justifyContent='space-between'
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
          <ScaleFade initialScale={0.5} in={isOpen}>
            <Box h='460px'>
              <Question text={question !== null && question?.question} />
              <DifficultyBadge question={question} />
              <MessageResponse title={message} />
              <Answer
                answers={answers}
                reveal={reveal}
                setReveal={setReveal}
                gameProgress={gameProgress}
                setGameProgress={setGameProgress}
                generateQuestion={generateQuestion}
                setMessage={setMessage}
                score={score}
                setScore={setScore}
                difficulty={question?.difficulty}
              />
            </Box>
          </ScaleFade>
          <Progress
            mb='8px'
            hasStripe
            isAnimated
            value={gameProgress * 10 - 10}
            max='100'
            colorScheme='pink'
          />
        </Box>
      ) : (
        <End
          score={score}
          record={record}
          setRecord={setRecord}
          setPlay={setPlay}
        />
      )}
    </>
  )
}
