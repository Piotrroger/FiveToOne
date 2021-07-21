import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import DialogTitle from '@material-ui/core/DialogTitle'
import Select from '@material-ui/core/Select';
import Accordion from '@material-ui/core/Accordion';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Amplify from 'aws-amplify';
import {API, graphqlOperation} from 'aws-amplify';
import awsconfig from '../aws-exports';
import "./styles.css";
import * as mutations from '../graphql/mutations';
import { render } from '@testing-library/react'

Amplify.configure(awsconfig)

const bull = <span>•</span>;
const useStyles = makeStyles( theme =>({
    bullet: {
      display: 'inline-block',
      margin: '0 12px',
      transform: 'scale(2)',
    },
    title: {
        fontSize: 25,
    },
    heading: {
      fontSize: 25,
      fontWeight:600
    },
    subtitle: {
        fontSize: 15,
    },
    dialogSize:{
    },
    buttonColouring:{
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    dropdown:{
      borderColor: '#0062cc',
      boxShadow: '1px 2px 1px 3px #9E9E9E',
      backgroundColor: "#edecf2"
    },
    TextField: {
        backgroundColor: "#fff"
      }
  }));


  
class AddForm extends Component {
  state = {
    open:false,
    category:'',
    dept:'',
    shift: '',
    agreement: '',
    sentiment:'',
    content:'',
    id:''
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    console.log("Name: " + this.state.content + this.state.category +  this.state.dept + this.state.shift  + this.state.agreement + this.state.sentiment)
  };

  handleSubmit = (e) => {
    this.setState({ open: false });
    var itemDetails = {
      category:this.state.category,
      Department:this.state.dept,
      shift: this.state.shift,
      agreement: this.state.agreement,
      sentiment:this.state.sentiment,
      content:this.state.content
      
    }
    console.log("Item Details : " + JSON.stringify(itemDetails))
    API.graphql(graphqlOperation(mutations.updateRecordTable, {input: itemDetails}));
      }
  /*     const handleContentChange = (event) =>{
        setContent(event.target.value.toString().slice(0,300));
      };
      const handleCatChange = (event) => {
        setCategory(event.target.value);
      };
      const handleDeptChange = (event) => {
        setDept(event.target.value);
      };
      const handleShiftChange = (event) => {
        setShift(event.target.value);
      };
      const handleSentimentChange = (event) => {
        setSentiment(event.target.value);
      };
      const handleAgreementChange = (event) => {
        setAgreement(event.target.value);
      }; */
  /*
  SET ID and SET NAME HERE!!!!
  */


  /*   async function addContact() {
      try{
      const record = {
          name: nameString,
          category: category,
          Department: dept,
          Steniment: sentiment,
          Shift: shift,
          description: content,
          ID: id
      }
      console.log(record);
      await API.graphql(graphqlOperation(UpdateTableMutation,{ input: record }));
    }
    catch(error){
      console.log(error)
    }
    } */
  
  render() {
    return(     
      <div>
          <Button display="inline-flex" color="inherit" 
          onClick={() => {
            this.handleClickOpen();
            }}
          >
          <AddSharpIcon/>
          </Button>
        <Dialog
          fullWidth
          open={this.state.open}
          onClose={this.handleClose}
        
        >
          <DialogTitle id="scroll-dialog-title">Add Feedback</DialogTitle>
          <DialogContent dividers={'paper'}>

          <Accordion   component="h1" variant="h5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
            <Typography>Feedback Entry Guide</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant="h6" color="textPrimary" gutterBottom>                
              To support feedback response and data analysis to identify trending issues - and to prioritise subsequent actions, please follow the guidance below when entering Associate feedback:-
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="body1" color="textPrimary" gutterBottom>                
              {bull} Feedback entry must support Associate anonymity (no names /logins)
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="body1" color="textPrimary" gutterBottom>                
              {bull} Enter one feedback per subject/issue raised
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="body1" color="textPrimary" gutterBottom>                
              {bull} Use a maximum of 250 characters per feedback
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="body1" color="textPrimary" gutterBottom>                
              {bull} Where amenities, locations and processes are raised as an issue, please be concise and accurate in their description
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="body1" color="textPrimary" gutterBottom>                
              {bull} Choose the correct dropdown/categories carefully
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="body1" color="textPrimary" gutterBottom>                
              {bull} The expectation is that Feedback entry should not take more than 10/15 minutes
            </Typography>
          </AccordionDetails>
          </Accordion>

                  <TextField
                    className
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    multiline
                    id="content"
                    label="Content"
                    name="content"
                    onInput = {this.handleChange('content')}/>

                  <FormControl fullWidth>
                    <InputLabel htmlFor="selected-category">Category</InputLabel>
                    <Select
                    labelId = "demo-simple-select-label"
                    id="category"
                    label = "Category"
                    onChange={this.handleChange('category')}> 
                      
                      <MenuItem value = {"Career/Advancement Opportunities/Training"}>Career/Advancement Opportunities/Training</MenuItem>
                      <MenuItem value = {"Change One Thing (Group Agreement)"}>Change One Thing (Group Agreement)</MenuItem>
                      <MenuItem value = {"Communication"}>Communication</MenuItem>
                      <MenuItem value = {"Engagement/Recognition"}>Engagement/Recognition</MenuItem>
                      <MenuItem value = {"Equipment"}>Equipment</MenuItem>
                      <MenuItem value = {"Fairness"}>Fairness</MenuItem>
                      <MenuItem value = {"General Questions"}>General Questions</MenuItem>
                      <MenuItem value = {"Leaders/Managers/Culture"}>Leaders/Managers/Culture</MenuItem>
                      <MenuItem value = {"Other - not in category"}>Other - not in category</MenuItem>
                      <MenuItem value = {"Pay/Benefits/Time Off"}>Pay/Benefits/Time Off</MenuItem>
                      <MenuItem value = {"Policioutes and Procedures"}>Policies and Procedures</MenuItem>
                      <MenuItem value = {"Process Improvements/Operations"}>Process Improvements/Operations</MenuItem>
                      <MenuItem value = {"Security"}>Security</MenuItem>
                      <MenuItem value = {"Sustainability"}>Sustainability</MenuItem>
                      <MenuItem value = {"Teamwork"}>Teamwork</MenuItem>
                      <MenuItem value = {"Transportation Commute"}>Transportation Commute</MenuItem>
                      <MenuItem value = {"Working conditions/Facilities"}>Working conditions/Facilities</MenuItem>
                      <MenuItem value = {"SpecAudit"}>Specific Audit</MenuItem>
                      <MenuItem value = {"Safety/Medical Concerns"}>Safety/Medical Concerns</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel htmlFor="selected-category">Department</InputLabel>
                    <Select
                    labelId = "demo-simple-select-label"
                    id="dept"
                    label = "Department"
                    onChange={this.handleChange('dept')}> 
                      <MenuItem value = {"ISS"}>ISS</MenuItem>
                      <MenuItem value = {"ICQA"}>ICQA</MenuItem>
                      <MenuItem value = {"FLOW"}>FLOW</MenuItem>
                      <MenuItem value = {"RME"}>RME</MenuItem>
                      <MenuItem value = {"TOM"}>TOM</MenuItem>
                      <MenuItem value = {"HR"}>HR</MenuItem>
                      <MenuItem value = {"Change"}>Change</MenuItem>
                      <MenuItem value = {"WFS"}>WFS</MenuItem>
                      <MenuItem value = {"L&D"}>Learning and Development</MenuItem>
                      <MenuItem value = {"Stores"}>Stores</MenuItem>
                      <MenuItem value = {"IT"}>IT</MenuItem>
                      <MenuItem value = {"IB Dock"}>IB Dock</MenuItem>
                      <MenuItem value = {"IB Receive"}>IB Receive</MenuItem>
                      <MenuItem value = {"OB Dock"}>OB Dock</MenuItem>
                      <MenuItem value = {"OB Palletize"}>OB Palletize</MenuItem>                    
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel htmlFor="selected-category">Shift pattern</InputLabel>
                    <Select
                    labelId = "demo-simple-select-label"
                    id="shift"
                    label = "Shift"
                    onChange={this.handleChange('shift')}> 
                      <MenuItem value = {"FED"}>Front End Days</MenuItem>
                      <MenuItem value = {"BED"}>Back End Days</MenuItem>
                      <MenuItem value = {"DND"}>Doughnut Days</MenuItem>
                      <MenuItem value = {"FEN"}>Front End Nights</MenuItem>
                      <MenuItem value = {"BEN"}>Back End Nights</MenuItem>
                      <MenuItem value = {"DNN"}>Doughnut Nights</MenuItem>                   
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel htmlFor="selected-category">Sentiment</InputLabel>
                    <Select
                    labelId = "demo-simple-select-label"
                    id="sentiment"
                    label = "Sentiment"
                    onChange={this.handleChange('sentiment')}> 
                      <MenuItem value = {"Positive"}>Positive</MenuItem>
                      <MenuItem value = {"Neutral"}>Neutral</MenuItem>  
                      <MenuItem value = {"Negative"}>Negative</MenuItem>                
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel htmlFor="selected-category">Associates Agree</InputLabel>
                    <Select
                    labelId = "demo-simple-select-label"
                    id="agreement"
                    label = "Agreement"
                    onChange={this.handleChange('agreement')}> 
                      <MenuItem value = {"1"}>1</MenuItem>
                      <MenuItem value = {"2"}>2</MenuItem>  
                      <MenuItem value = {"3"}>3</MenuItem>    
                      <MenuItem value = {"4"}>4</MenuItem>
                      <MenuItem value = {"5"}>5</MenuItem>  
                      <MenuItem value = {"6"}>6</MenuItem>    
                      <MenuItem value = {"7"}>7</MenuItem>
                      <MenuItem value = {"8"}>8</MenuItem>  
                      <MenuItem value = {"9"}>9</MenuItem>  
                      <MenuItem value = {"10"}>10</MenuItem>          
                    </Select>
                  </FormControl>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {
            this.handleSubmit();
            }} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default AddForm