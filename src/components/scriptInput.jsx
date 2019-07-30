import React, { Component } from 'react'
import { TextField, Typography, Button, Box, Modal} from '@material-ui/core'

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
    //   <Modal>
    //   <Box>
    //   <Box direction="column" align="center">
    //     <Typography variant="h6" margin="3px">Confirm your entries</Typography>
    //     <Typography variant="p">{this.state.text_inst} </Typography>
    //     <Typography variant="p">{this.state.text_course}</Typography>
    //     <Typography variant="p">{this.state.text_crit}</Typography>
    //     <Box border="medium" direction="row">
    //       <Button margin="5px" label="Nope" onClick={() => {this.setState({active: false})}} />
    //       <Button primary margin="5px" label="Confirm" onClick={() => {this.setState({active: false})} /*This will also submit the payload as well as closing the modal*/} />
    //     </Box>
    //   </Box>
    //   </Box>
    // </Modal>
    return (
      <Box border={1} width={1}>
        {layer}
      <Box align="center">
        <Box
        direction="row"
        
        >
        <TextField
          label="Canvas Instance"
          variant="filled"
          margin="20px"
          value={text_inst}
          onChange={event => this.setState({ text_inst: event.target.value})}
        />
        <TextField
          label="Course Number"
          variant="filled"
          value={text_course}
          onChange={event => this.setState({ text_course: event.target.value})}
        />
        <TextField
          label="Search Criteria"
          variant="filled"
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
        <Box height="large" width="80%" background="black" border={1}>
        Output from Backend goes here
        </Box>
      </Box>
      </Box>
    )
  }
}

export { DataInput }