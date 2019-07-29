import React, { Component } from 'react'
import { Box, Typography } from '@material-ui/core'
import { DataInput } from '../components/scriptInput'
import { SettingsView } from '../components/settingsView'

const Home = () => (
  <Box>
    <Typography variant="h1" >This is the home page</Typography>
  </Box>
)

const Find = () => (
  <Box>
    <Typography variant="h3">Find Script</Typography>
    <DataInput />
  </Box>

)

const Far = () => (
  <Box>
    <Typography variant="h3">Find and Replace Script Home</Typography>
    <DataInput />
  </Box>
)

const Bulk = () => (
  <Box>
    <Typography variant="h3">Bulk Find Script Home</Typography>
    <DataInput />
  </Box>
)

const Settings = () => (
  <Box>
    <Typography variant="h4">Your Settings</Typography>
    <SettingsView/>
  </Box>
)

export { Home, Find, Far, Bulk, Settings }
