import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import {AmplifySignOut} from "@aws-amplify/ui-react";
import LockSharpIcon from '@material-ui/icons/LockSharp';
import GuideDialog from './guide'
import Badge from '@material-ui/core/Badge';
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';
import SearchIcon from '@material-ui/icons/Search';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import Typography from '@material-ui/core/Typography'
import ViewWeekSharpIcon from '@material-ui/icons/ViewWeekSharp';
import AddForm from './addForm';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

export default function MenuBar() {

  const classes = useStyles();
  
  return (
    
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
        <Typography type="title"
          color="inherit"
          style={{ borderRight: '0.2em solid black', padding: '1em' }}>
          5:1 Connections
        </Typography>
        <IconButton aria-label="show 4 new mails" color="inherit"  AlignItems= "center">
              <Badge color="secondary">
                <ViewWeekSharpIcon/>
              </Badge>
            </IconButton>

            <IconButton color="inherit"  AlignItems= "center">
                <GetAppSharpIcon/>
            </IconButton>
            <IconButton color="inherit">
            <AddForm/>
            </IconButton>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <IconButton edge="end">
                <GuideDialog/>
            </IconButton>
            <IconButton>
              <LockSharpIcon color="action" style ={{fontSize: 30}, {color: "#e0e0e0"}} onClick={AmplifySignOut}></LockSharpIcon>   
            </IconButton>

         




        </Toolbar>
      </AppBar>
    </div>
  );
}