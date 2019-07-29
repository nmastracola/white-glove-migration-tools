import React, { Component } from "react"
import { Box, Text, TextInput, Button } from "grommet"
import { Save } from 'grommet-icons'

class SettingsView extends React.Component {

  render() {
    return (
    <Box margin={{"left": "10px"}} border="3px" width="33%">
      <Box>
      Canvas Token: <TextInput placeholder="Token" />
      Log Output Location:<input type="file" webkitdirectory  placeholder="Output Location" />
      Something will go here or not: <TextInput placeholder="TBD" />
      <Box alignSelf="center" width="225px" margin="10px"><Button type="submit" primary icon={<Save/>} label="Save Settings"/></Box>
      </Box>
    </Box>
    )
  }
}

export { SettingsView }