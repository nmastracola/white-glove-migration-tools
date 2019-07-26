import React, { Component } from 'react'
import { TextInput, Button, Box, Layer } from 'grommet'

class DataInput extends React.Component {
  constructor() {
    super();
    this._onClick = this._onClick.bind(this); //bind the correct `this`

    this.state = { active: false }; //initial state is undefined, so the layer is not open
  }
//activation function
  _onClick (){
    this.setState({active: true}); 
  }
  
  state = { 
    text_inst: '',
    text_course: '',
    text_crit: '',
    setShow: false,
  }

  render() {
    const { text_inst,text_course,text_crit } = this.state
    const layer = (this.state.active)
      ?  <Layer
      modal="true"
      // onEsc={() => {this.setState({active: true})}}
      // onClickOutside={() => {}}
    >
      <Box>
        CONFIRM INST,COURSE,CRIT HERE
      </Box>
      <Button label="close" onClick={() => {this.setState({active: false})}} />
    </Layer>
    :null
    return (
      <Box
        direction="row"
        gap="small"
      >
        Canvas Instance: 
        <TextInput
          border="brand"
          margin="20px"
          value={text_inst}
          onChange={event => this.setState({ text_inst: event.target.value})}
        />
        Course Number:
        <TextInput
          value={text_course}
          onChange={event => this.setState({ text_course: event.target.value})}
        />
        Search Criteria:
        <TextInput
          value={text_crit}
          onChange={event => this.setState({ text_crit: event.target.value})}
        />
        <Button
          primary
          type="submit"
          color="brand2"
          label="Run"
          onClick={this._onClick} //When this is clicked, it will pass the information to the backend and wait for it to begin piping data to the frontend
        />
       {layer}
      </Box>
    )
  }
}

export { DataInput }