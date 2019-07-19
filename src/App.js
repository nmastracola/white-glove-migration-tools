import React, { Component } from 'react';
import { Box,
         Button,
         Collapsible,
         Heading,
         Grommet,
         Image
        } from 'grommet';
import { SettingsOption,
         Menu
        } from 'grommet-icons'
import logo from './assets/wgmt-logo.svg'
import './App.css'

const theme = {
  global: {
    colors: {
      brand: '#1C4D68',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
}

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
    />
);

class App extends Component {
  state = {
    showSidebar: false,
    showMenubar: false,
  }

  render() {
    const { showMenubar} = this.state
    const { showSidebar} = this.state
    return (
      <Grommet theme={theme}>
        <AppBar>
          {/* <Heading level='3' margin='none'> */}
          <Button
           icon={<Menu />}
           onClick={() => this.setState(prevState => ({ showMenubar: !prevState.showMenubar}))} />
            <Box height='50px' width='50px'>
            <Image 
              fit='contain'
              src={logo}
            />
            </Box>
          {/* </Heading> */}
          <Button
           icon={<SettingsOption />}
           onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar}))} />
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden'}}>
        <Collapsible direction="horizontal" open={showMenubar}>
            <Box
              flex
              width='medium'
              background='light-2'
              elevation='small'
              align='center'
              justify='center'
            >
              sidebar
            </Box>
          </Collapsible>
          <Box flex align='center' justify='center'>
            app body
          </Box>
          <Collapsible direction="horizontal" open={showSidebar}>
            <Box
              flex
              width='medium'
              background='light-2'
              elevation='small'
              align='center'
              justify='center'
            >
              sidebar
            </Box>
          </Collapsible>
        </Box>
      </Grommet>
    );
  }
}

export default App;
