import React from 'react';
import { makeStyles } from '@material-ui/core'; //this is a function!!!
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useHistory, useLocation } from 'react-router-dom';

const drawerWidth = 240

const useStyles = makeStyles({
  page: {
    backgroundColor: '#f9f9f9',
    width: '100%'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  root: {
    display: "flex"
  },
  active: {
    backgroundColor: '#f4f4f4'
  }
})

function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlinedIcon color="secondary" />,
      path: "/"
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlinedIcon color="secondary" />,
      path: "/create"
    }
  ]

  return (
    <div className={classes.root}>
      {/* app bar */}

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{paper: classes.drawerPaper}} // overwrite the CSS
      >
        <div>
          <Typography variant="h5">
            Ninja Notes
          </Typography>
        </div>

        {/* List / Links */}

        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      <div className={classes.page}>
        {children}
      </div>
    </div>
  )
}

export default Layout
