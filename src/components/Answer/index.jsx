import { useState, useEffect } from 'react'
import { Grid } from '@chakra-ui/react'
import { SingleAnswer } from './SingleAnswer'

export default function Answer(props) {
  const [listRandom, setListRandom] = useState([])
  const rdmNumber = () => Math.round(Math.random() * 10)

  useEffect(() => {
    setListRandom([rdmNumber(), rdmNumber(), rdmNumber(), rdmNumber()])
  }, [props?.answers])
  return (
    <Grid
      templateColumns='repeat(2, 1fr)'
      gap={6}
      mt={{ base: '20px', md: '40px' }}
      px={5}
      h={{ base: '60%', md: '50%' }}
    >
      {props?.answers?.map((answer, index) => {
        return (
          <SingleAnswer
            key={index}
            index={index}
            answer={answer}
            listRandom={listRandom}
            {...props}
          />
        )
      })}
    </Grid>
  )
}
