import { useState, useEffect } from 'react'
import { Button, Grid, GridItem } from '@chakra-ui/react'
import { decode } from 'html-entities'

export default function Answer({
  answers,
  reveal,
  setReveal,
  score,
  setScore,
  generateQuestion,
}) {
  const [listRandom, setListRandom] = useState([])
  const generateRandomNumber = () => Math.round(Math.random() * 10)

  const randomNumber = () => {
    setListRandom([
      generateRandomNumber(),
      generateRandomNumber(),
      generateRandomNumber(),
      generateRandomNumber(),
    ])
  }
  useEffect(() => {
    randomNumber()
  }, [answers])
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={6} mt='50px' px={5}>
      {answers.map((answer, index) => {
        return (
          <Answers
            key={index}
            index={index}
            answer={answer}
            listRandom={listRandom}
            reveal={reveal}
            setReveal={setReveal}
            score={score}
            setScore={setScore}
            generateQuestion={generateQuestion}
          />
        )
      })}
    </Grid>
  )
}

const Answers = ({
  index,
  answer,
  listRandom,
  reveal,
  setReveal,
  score,
  generateQuestion,
  setScore,
}) => {
  const handleAnswer = (index) => {
    setReveal(true)
    index === 0 && setScore(score + 1)
    setTimeout(() => {
      generateQuestion()
    }, 1000)
  }
  return (
    <GridItem order={listRandom[index]} w='100%' colSpan={{ base: 2, md: 1 }}>
      <Button
        w='100%'
        h='100px'
        colorScheme={!reveal ? 'messenger' : index === 0 ? 'green' : 'red'}
        onClick={() => {
          handleAnswer(index)
        }}
      >
        {decode(answer, { level: 'html5' })}
      </Button>
    </GridItem>
  )
}
