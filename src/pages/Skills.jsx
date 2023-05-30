import { Container } from '@chakra-ui/react'
import React from 'react'
import { TextSphere } from '../Components/TextSphere'

export const Skills = () => {
  return (
    <Container  id="skills" color="white" bg="black" border="2px solid green" h="100vh" maxW="100%" >
    <h1>Skills</h1>
    <TextSphere />
  </Container>
  )
}
