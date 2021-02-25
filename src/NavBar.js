import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AppsIcon from '@material-ui/icons/Apps';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import './App.css';
import { Drawer, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function ButtonAppBar() {
  const classes = useStyles()
  
  const [open, setOpen] = useState(false);
  
  const handleDrawer = () => {
    setOpen(true)

  }
  const list = () => (
    <div>
      <List>
              {['About', 'Education', 'Experience', 'Project', 'Technologies', 'Laguajes'].map((text, setText)=>(
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>))}

      </List>
    </div>
  )
  return (
    <div
    className={classes.root} 
    style={{width:'100%'}} 
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton 
          onClick={handleDrawer}
          edge="start" 
          className={classes.menuButton} 
          color="inherit" 
          aria-label="menu">
          <AppsIcon/>
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            ArudoZ 👨‍💻  
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
      anchor='left'
      open={open}
      onClose={()=> setOpen(false)}
      >
        <div>
          <List>
            <Button variant="contained" style={{borderRadius:10}} color='secondary'>About</Button>
            <Button variant="contained" color='secondary'>Education</Button>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
