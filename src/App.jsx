import React, { Component } from 'react'
import {
  Box,
  Button,
  Grid,
  Grommet,
  Heading,
  Image,
  Menu,
  Text,
} from 'grommet'
import {
  Route,
  Link,
} from 'react-router-dom'
import {
  Home,
  Find,
} from './routes/routes.jsx'
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

const NavBar = props => (
  <Box
    gridArea="nav"
    tag="header"
    direction="column"
    align="left"
    justify="start"
    background="brand"
    pad={{ left: 'small', right: 'small', vertical: 'small' }}
    elevation="small"
    style={{ zIndex: '1' }}
    {...props}
  />
)

class App extends Component {
  state = {

  }

  render() {
    return (
      <Grommet
        theme={theme}
        full="true"
      >
        <Grid
          fill="true"
          rows={['4%', '96%']}
          columns={['12.5%', '87.5%']}
          gap="none"
          areas={[
            { name: 'nav', start: [0, 0], end: [0, 1] },
            { name: 'header', start: [1, 0], end: [1, 0] },
            { name: 'main', start: [1, 1], end: [1, 1] },
          ]}
        >
          <Box
            gridArea="header"
            background="light-5"
            border={{
              color: 'border',
              size: 'xsmall',
              style: 'solid',
              side: 'bottom',
            }}
            justify="center"
          >
            <Text alignSelf="center">PLACE CONTENT HERE</Text>
          </Box>
          <NavBar>
            <Box height="50px" width="50px">
              <Image
                fit="contain"
                src={logo}
                margin={{ bottom: '10px' }}
              />
            </Box>
            <Box>
              <Heading level="4" margin="none">Scripts</Heading>
              <Text margin={{ left: '10px' }}>Find</Text>
              <Text margin={{ left: '10px' }}>Find and Replace</Text>
              <Text margin={{ left: '10px' }}>Bulk Find</Text>
            </Box>
            <Box
              alignSelf="center"
              margin={{ top: 'auto' }}
            >
              <Link to="/settings">Settings</Link>
            </Box>
          </NavBar>
          <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
            <Box
              gridArea="main"
              flex
              align="center"
              justify="center"
              background="light-3"
            >
              <Route path="/" component={Home} />
            </Box>
          </Box>
        </Grid>
      </Grommet>
    )
  }
}

export default App
