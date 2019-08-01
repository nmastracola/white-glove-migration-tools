import React, { Component } from 'react'
import { Box, Typography } from '@material-ui/core'
import { DataInput } from '../components/scriptInput'
import { SettingsView } from '../components/settingsView'

const Home = () => (
  <Box display="flex" alignItems="center" height="100%" m={10}>
    <Typography align="center" variant="h1" >This is the home page</Typography>
  </Box>
)

const Find = () => (
  <Box m={10} alignItems="center" width={1} height="80vh">
    <Typography align="center" variant="h3">Find Script</Typography>
    <DataInput />
  </Box>

)

const Far = () => (
  <Box m={10} width={1}>
    <Typography align="center" variant="h3">Find and Replace Script Home</Typography>
    <DataInput />
  </Box>
)

const Bulk = () => (
  <Box m={10} width={1}>
    <Typography align="center" variant="h3">Bulk Find Script Home</Typography>
    <DataInput />
  </Box>
)

const Settings = () => (
  <Box m={10} width={1}>
    <Typography align="center" variant="h4">Your Settings</Typography>
    <SettingsView/>
  </Box>
)

export { Home, Find, Far, Bulk, Settings }
