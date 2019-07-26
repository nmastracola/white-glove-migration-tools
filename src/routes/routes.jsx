import React, { Component } from 'react'
import { Box, Heading } from 'grommet'
import { DataInput } from '../components/scriptInput'

const Home = () => (
  <Box>
    <Heading level="1" alignSelf="center" margin="none" >This is the home page</Heading>
  </Box>
)

const Find = () => (
  <Box
  margin="medium"
  >
    <Heading level="3" alignSelf="center" margin="xsmall">Find Script</Heading>
    <DataInput />
  </Box>
  
)

const Far = () => (
  <Box>
    <Heading>Find and Replace Script Home</Heading>
    <DataInput />
  </Box>
)

const Bulk = () => (
  <Box>
    <Heading>Bulk Find Script Home</Heading>
    <DataInput />
  </Box>
)

const Settings = () => (
  <Box>
    <Heading>Settings view</Heading>
  </Box>
)

export { Home, Find, Far, Bulk, Settings }
