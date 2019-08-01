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
    height: "100vh"
  },
  drawerHeader: {
    color: '#fff'
  },
  appBar: {
    backgroundColor: "gray",
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
}))

export default function App() {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
          <CssBaseline/>
              <Drawer variant="permanent" anchor="left" className={classes.drawer} classes={{paper: classes.drawerPaper}}>
                <NavLink to="/home">
                  <Box height="50px" width="50px" m="10px">
                    <img src={logo} />
                  </Box>
                </NavLink>
                <Box ml="10px"><Typography variant="h4" margin="none" className={classes.drawerHeader} ml="10px">Scripts</Typography></Box>
                <List>
                  <NavLink exact to="/find" activeClassName="selected"><ListItem button className="nav-link">Find</ListItem></NavLink>
                  <NavLink exact to="/far" activeClassName="selected"><ListItem button className="nav-link">Find and Replace</ListItem></NavLink>
                  <NavLink exact to="/bulk" activeClassName="selected"><ListItem button className="nav-link">Bulk Find</ListItem></NavLink>
                </List>
                <Box mt="auto" mb="10px" className="iconBox" justifySelf="end" alignSelf="center" margin={{ top: 'auto' }}>
                  <NavLink exact to="/settings">
                    <SelectedIconWithRouter />
                  </NavLink>
                </Box>
              </Drawer>
                <AppBar position="fixed" className={classes.appBar}><Toolbar variant="dense">Content TBD</Toolbar></AppBar>
                <Box className={classes.content}>
                  <Box display="flex" justifyContent="center">
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/find" component={Find} />
                    <Route exact path="/far" component={Far} />
                    <Route exact path="/bulk" component={Bulk} />
                    <Route exact path="/settings" component={Settings} />
                  </Box>
                </Box>
        </Box>
    )
}
