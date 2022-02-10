import React from 'react'
import { Box, Link } from '@chakra-ui/react'

export default function SocialMedia() {
  return (
    <Box position='absolute' bottom='0' right='0' color='white'>
      <Link href='https://www.linkedin.com/in/facunorie/' isExternal>
        <i className='bx bxl-linkedin-square' style={{ fontSize: '24px' }}></i>
      </Link>
      <Link href='https://twitter.com/noriedev' isExternal ml='5px'>
        <i className='bx bxl-twitter' style={{ fontSize: '24px' }}></i>
      </Link>
      <Link href='https://github.com/facuNorie' isExternal ml='5px'>
        <i className='bx bxl-github' style={{ fontSize: '24px' }}></i>
      </Link>
    </Box>
  )
}
