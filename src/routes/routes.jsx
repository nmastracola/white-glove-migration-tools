import React, { Component } from 'react'
import { Box, Heading } from 'grommet'
import { DataInput } from '../components/scriptInput'
import { SettingsView } from '../components/settingsView'

const Home = () => (
  <Box>
    <Heading level="1" alignSelf="center" margin="none" >This is the home page</Heading>
  </Box>
)

const Find = () => (
  <Box margin={{"top":"xsmall"}}>
    <Heading level="3" alignSelf="center" margin="xsmall">Find Script</Heading>
    <DataInput />
  </Box>

)

const Far = () => (
  <Box margin={{"top":"xsmall"}}>
    <Heading level="3" alignSelf="center" margin="xsmall">Find and Replace Script Home</Heading>
    <DataInput />
  </Box>
)

const Bulk = () => (
  <Box margin={{"top":"xsmall"}}>
    <Heading level="3" alignSelf="center" margin="xsmall">Bulk Find Script Home</Heading>
    <DataInput />
  </Box>
)

const Settings = () => (
  <Box margin={{"top":"xsmall"}}>
    <Heading level="4" alignSelf="left" margin="xsmall">Your Settings</Heading>
    <SettingsView/>
  </Box>
)

export { Home, Find, Far, Bulk, Settings }
