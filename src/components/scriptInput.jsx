import React, { Component } from 'react'
import { TextInput, Button, Box } from 'grommet'

class DataInput extends React.Component {
  state = { text: '' }

  render() {
    const { text } = this.state
    return (
      <Box
        direction="row"
        gap="small"
      >
        Canvas Instance: 
        <TextInput
          border="brand"
          margin="20px"
          value={text}
          onChange={event => this.setState({ text: event.target.value})}
        />
        Course Number:
        <TextInput
          value={text}
          onChange={event => this.setState({ text: event.target.value})}
        />
        Search Criteria:
        <TextInput
          value={text}
          onChange={event => this.setState({ text: event.target.value})}
        />
        <Button
          primary
          type="submit"
          color="brand2"
          label="Run"
          onClick={() =>{}} //When this is clicked, it will pass the information to the backend and wait for it to begin piping data to the frontend
        />
      </Box>
    )
  }
}

export { DataInput }