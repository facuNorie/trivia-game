import { useState, useEffect } from 'react'
import { Button, Grid, GridItem } from '@chakra-ui/react'
import { decode } from 'html-entities'

export default function Answer({
  answers,
  reveal,
  setReveal,
  gameProgress,
  setGameProgress,
  generateQuestion,
  setMessage,
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
    <Grid
      templateColumns='repeat(2, 1fr)'
      gap={6}
      my={{ base: '20px', md: '50px' }}
      px={5}
    >
      {answers.map((answer, index) => {
        return (
          <Answers
            key={index}
            index={index}
            answer={answer}
            listRandom={listRandom}
            reveal={reveal}
            setReveal={setReveal}
            gameProgress={gameProgress}
            setGameProgress={setGameProgress}
            generateQuestion={generateQuestion}
            setMessage={setMessage}
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
  gameProgress,
  generateQuestion,
  setGameProgress,
  setMessage,
}) => {
  const handleAnswer = (index) => {
    setReveal(true)
    if (index === 0) {
      setMessage('CORRECT')
    } else {
      setMessage('INCORRECT')
    }

    setTimeout(() => {
      setMessage('')
      generateQuestion(gameProgress)
      setGameProgress(gameProgress + 1)
    }, 1000)
  }
  return (
    <GridItem
      order={listRandom[index]}
      w='100%'
      boxShadow='md'
      colSpan={{ base: 2, md: 1 }}
    >
      <Button
        w='100%'
        h={{ base: '70px', md: '110px' }}
        colorScheme={!reveal ? 'gray' : index === 0 ? 'green' : 'red'}
        onClick={() => {
          handleAnswer(index)
        }}
      >
        {decode(answer, { level: 'html5' })}
      </Button>
    </GridItem>
  )
}
