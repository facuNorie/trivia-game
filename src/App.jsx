import { useState, useEffect } from 'react'
import { Button, Box, Text, Badge, Progress } from '@chakra-ui/react'
import { getQuestion } from './services/triviaApi'
import Question from './components/Question'
import Answer from './components/Answer'

function App() {
  const [question, setQuestion] = useState(null)
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [reveal, setReveal] = useState(false)

  const generateQuestion = () => {
    setReveal(false)
    getQuestion().then((res) => {
      let data = res[0]
      setQuestion(res)
      setAnswers([data.correct_answer, ...data.incorrect_answers])
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
      <Text fontWeight='bold' fontSize='xl' p={2}>
        Score: {score}/77
      </Text>
      {/* <Button w='10%' h='50px' colorScheme='orange' onClick={generateQuestion}>
        Next
      </Button> */}
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
      <Progress hasStripe value={score} />
    </Box>
  )
}

export default App
