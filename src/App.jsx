import React, { Component } from 'react'
import { Route, NavLink, } from 'react-router-dom'
import { Box, CssBaseline, Container, Grid, Typography, AppBar, Drawer, Toolbar, List, ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import {Home, Find, Far, Bulk, Settings,} from './routes/routes.jsx'
import logo from './assets/wgmt-logo.svg'
import './App.css'
import SelectedIconWithRouter from './components/settingsIcon'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#1C4D68"
  },
  content: {
    flexGrow: 1,
  },
  container: {
    maxWidthXl: "100vw"
  }
}))

export default function App() {
    const classes = useStyles()
    return (
        <Container fixed>
          <CssBaseline/>
          <Grid container>
            <Grid item xl={2} spacing={0}>
              <Drawer variant="permanent" anchor="left" className={classes.drawer} classes={{paper: classes.drawerPaper}}>
                <NavLink to="/home">
                  <Box height="50px" width="50px">
                    <img src={logo} />
                  </Box>
                </NavLink>
                <List>
                  <Typography variant="h4" margin="none">Scripts</Typography>
                  <NavLink exact to="/find" activeClassName="selected"><ListItem className="nav-link">Find</ListItem></NavLink>
                  <NavLink exact to="/far" activeClassName="selected"><ListItem className="nav-link">Find and Replace</ListItem></NavLink>
                  <NavLink exact to="/bulk" activeClassName="selected"><ListItem className="nav-link">Bulk Find</ListItem></NavLink>
                </List>
                <Box className="iconBox" alignSelf="center" margin={{ top: 'auto' }}>
                  <NavLink exact to="/settings">
                    <SelectedIconWithRouter />
                  </NavLink>
                </Box>
              </Drawer>
            </Grid>
              <Grid item direction="column">
                <AppBar position="static"><Toolbar>Content TBD</Toolbar></AppBar>
                <main>
                  <Box>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/find" component={Find} />
                    <Route exact path="/far" component={Far} />
                    <Route exact path="/bulk" component={Bulk} />
                    <Route exact path="/settings" component={Settings} />
                  </Box>
                </main>
              </Grid>
            </Grid>
        </Container>
    )
}
