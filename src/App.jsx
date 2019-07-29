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
import { Route, NavLink, } from 'react-router-dom'
import {
  Home,
  Find,
  Far,
  Bulk,
  Settings,
} from './routes/routes.jsx'
import logo from './assets/wgmt-logo.svg'
import './App.css'
import SelectedIconWithRouter from './components/settingsIcon'

const theme = {
  global: {
    colors: {
      brand: '#1C4D68',
      brand2: '#E02D28',
      brand3: '#424242',
      accent1: '#F9AC41',
      accent2: '#D51F5E',
      accent3: '#00A69C',
      accent4: '#9D2064',
      accent5: '#41AEBC',
      accent6: '#A2B33B',
      accent7: '#8F9293',
      selected: "#fff"
    },
    font: {
      family: "'ProximaNova', Arial, sans-serif",
      face: `
        @font-face {
          font-family: "ProximaNova";
          src: url("../src/fonts/proximaNova/proxima-nova-regular/proxima-nova-regular.woff") format('woff');
        }
      `,
    },
    focus: {
      border: {
        color: '#41AEBC'
      }
    }
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

const HeadBar = (props) => (
  <Box
  gridArea="header"
  background="light-5"
  border={{
    color: 'border',
    size: 'xsmall',
    style: 'solid',
    side: 'bottom',
  }}
  elevation="small"
  justify="center"
>
  Set instance here instead?
</Box>
)

class App extends Component {
  constructor(props) {
    super(props);

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
        <HeadBar location={this.props.location} />
          <NavBar>
            <NavLink to="/home">
              <Box height="50px" width="50px" margin={{bottom: "20px"}}>
                <Image fit="contain" src={logo} />
              </Box>
            </NavLink>
            <Box>
              <Heading level="4" margin="none">Scripts</Heading>
              <NavLink exact to="/find" activeClassName="selected"><Text margin={{ left: '10px' }}>Find</Text></NavLink>
              <NavLink exact to="/far" activeClassName="selected"><Text margin={{ left: '10px' }}>Find and Replace</Text></NavLink>
              <NavLink exact to="/bulk" activeClassName="selected"><Text margin={{ left: '10px' }}>Bulk Find</Text></NavLink>
            </Box>
            <Box className="iconBox" alignSelf="center" margin={{ top: 'auto' }}>
              <NavLink exact to="/settings">
                <SelectedIconWithRouter />
              </NavLink>
            </Box>
          </NavBar>
          <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
            <Box
              gridArea="main"
              flex
              justify="start"
              background="light-3"
            >
              <Route exact path="/home" component={Home} />
              <Route exact path="/find" component={Find} />
              <Route exact path="/far" component={Far} />
              <Route exact path="/bulk" component={Bulk} />
              <Route exact path="/settings" component={Settings} />
            </Box>
          </Box>
        </Grid>
      </Grommet>
    )
  }
}

export default App
