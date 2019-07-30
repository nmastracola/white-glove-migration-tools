import React, { Component } from 'react'
import { Box, Typography } from '@material-ui/core'
import { DataInput } from '../components/scriptInput'
import { SettingsView } from '../components/settingsView'

const Home = () => (
  <Box display="flex" justifyContent="center" height="100%" m={10}>
    <Typography variant="h1" >This is the home page</Typography>
  </Box>
)

const Find = () => (
  <Box display="flex" flexDirection="column" justifyContent="center" m={10} fontSize={30}>
    <Typography variant="h3">Find Script</Typography>
    <DataInput />
  </Box>

)

const Far = () => (
  <Box display="flex" justifyContent="center" height="100%" m={10}>
    <Typography variant="h3">Find and Replace Script Home</Typography>
    <DataInput />
  </Box>
)

const Bulk = () => (
  <Box display="flex" justifyContent="center" height="100%" m={10}>
    <Typography variant="h3">Bulk Find Script Home</Typography>
    <DataInput />
  </Box>
)

const Settings = () => (
  <Box display="flex" justifyContent="center" height="100%" m={10}>
    <Typography variant="h4">Your Settings</Typography>
    <SettingsView/>
  </Box>
)

export { Home, Find, Far, Bulk, Settings }
