import { useState, useEffect } from 'react'
import { Grid } from '@chakra-ui/react'
import { SingleAnswer } from './SingleAnswer'

export default function Answer({
  answers,
  reveal,
  setReveal,
  gameProgress,
  setGameProgress,
  generateQuestion,
  setMessage,
  score,
  setScore,
  difficulty,
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
      mt={{ base: '20px', md: '50px' }}
      px={5}
      h={{ base: '60%', md: '50%' }}
    >
      {answers.map((answer, index) => {
        return (
          <SingleAnswer
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
            score={score}
            setScore={setScore}
            difficulty={difficulty}
          />
        )
      })}
    </Grid>
  )
}
