import React, { Component } from 'react'
import { TextInput, Text, Button, Box, Layer, Heading} from 'grommet'

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
      <Box direction="column" align="center">
        <Heading level="6" margin="3px">Confirm your entries</Heading>
        <Text>{this.state.text_inst} </Text>
        <Text>{this.state.text_course}</Text>
        <Text>{this.state.text_crit}</Text>
        <Box border="medium" direction="row">
          <Button margin="5px" label="Nope" onClick={() => {this.setState({active: false})}} />
          <Button primary margin="5px" label="Confirm" onClick={() => {this.setState({active: false})} /*This will also submit the payload as well as closing the modal*/} />
        </Box>
      </Box>
      </Box>
    </Layer>
    :null
    return (
      <Box>
        {layer}
      <Box align="center">
        <Box
        direction="row"
        gap="small"
        pad="10px"
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
        <Box margin={{"top": "10px"}} height="large" width="80%" background="black" border="small" round="xsmall">
        Output from Backend goes here
        </Box>
      </Box>
      </Box>
    )
  }
}

export { DataInput }