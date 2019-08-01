import React, { Component } from "react"
import { Box, TextField, Button } from "@material-ui/core"
import { withStyles } from '@material-ui/styles'

class SettingsView extends React.Component {

  render() {
    return (
    <Box margin={{"left": "10px"}} width="33%">
      <Box>
      Canvas Token: <TextField placeholder="Token" />
      Log Output Location:<input type="file" webkitdirectory  placeholder="Output Location" />
      Something will go here or not: <TextField placeholder="TBD" />
      <Box alignSelf="center" width="225px" margin="10px"><Button primary >Save Settings</Button></Box>
      </Box>
    </Box>
    )
  }
}

export { SettingsView }