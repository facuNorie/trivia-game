import React from 'react'
import { Button, keyframes } from '@chakra-ui/react'

const bounce = keyframes`
  from {transform: scale(1.1,1.1)}
  to {transform: scale(1.4,1.4)}
`

export default function PlayButton({ text, fw, sz, setPlay }) {
  const bounceAnimation = `${bounce} infinite .8s alternate`
  return (
    <Button
      bgColor='pink.400'
      color='white'
      fontWeight={fw}
      size={sz}
      _hover={{ bg: 'pink.400' }}
      animation={bounceAnimation}
      onClick={() => {
        text === 'Play' ? setPlay(true) : setPlay(false)
      }}
    >
      {text}
    </Button>
  )
}
