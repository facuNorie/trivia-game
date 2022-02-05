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
