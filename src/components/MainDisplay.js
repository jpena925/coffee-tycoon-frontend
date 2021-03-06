import React, {useState} from 'react'
import main_pic from '../main.png'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@mui/material/Grid';
import styled from 'styled-components'
import { withTheme } from 'styled-components';
//npm install @material-ui/core --save

function MainDisplay({ menu }) {

  let menuItems = []
  for(const coffee in menu) {
    if (menu[coffee]['quantity'] > 0) {
      menuItems.push(<Grid key={coffee} item xs={6}>
        <span key={coffee} elevation={0} className="paper">
          {coffee}: {menu[coffee]['quantity']}
          </span>
        </Grid>)
    }
  }
  
  return (
    <div id='maindisplay'>
      <div id="menu-display">
        <h1 id="menuheader">MENU</h1>
        <Grid container spacing={2}>
        {menuItems}
        </Grid>
      </div>
      <img src={main_pic} alt="background" style={{'height': 'auto', 'width': "500px"}}/>
    </div>
  )
}

export default MainDisplay