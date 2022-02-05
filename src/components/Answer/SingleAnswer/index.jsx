import { Button, GridItem } from '@chakra-ui/react'
import { decode } from 'html-entities'

export const SingleAnswer = ({
  index,
  answer,
  listRandom,
  reveal,
  setReveal,
  gameProgress,
  generateQuestion,
  setGameProgress,
  setMessage,
  score,
  setScore,
  difficulty,
}) => {
  const handleAnswer = (index) => {
    setReveal(true)
    if (index === 0) {
      setMessage('CORRECT')
      if (difficulty === 'easy') setScore(score + 5)
      if (difficulty === 'medium') setScore(score + 10)
      if (difficulty === 'hard') setScore(score + 15)
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
      h='100%'
    >
      <Button
        w='100%'
        h='100%'
        /* h={{ base: '70px', md: '110px' }} */
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
