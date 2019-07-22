import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

const Home = () => (
  <div>
    <h1>This is the home page</h1>
  </div>
)

const Find = () => (
  <div>
    <h1>Find Script Home</h1>
  </div>
)

const Settings = () => (
  <div>
    <h1>Settings view</h1>
  </div>
)

export { Home, Find, Settings }
