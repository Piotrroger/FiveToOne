import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import "./styles.css";



const useStyles = makeStyles({
    root: {
      minWidth: 400,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 12px',
      transform: 'scale(1.2)',
    },
    title: {
        fontSize: 25,
    },
    subtitle: {
        fontSize: 15,
    },
    pos: {
      marginBottom: 12,
    },
    buttonColouring:{
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },

  });
  
export default function GuideDialog() {
    const [fullWidth] = React.useState(true);
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div >
      <Button variant="contained" size="md" onClick={handleClickOpen('paper')}>Meeting Guide</Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth="lg"
        className="dialog-size"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">1:5 Meeting guide</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
              <Typography variant="h4" color="textPrimary" gutterBottom>
                    Meeting Preparation
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>                
                {bull}Check the Portal to see if there are any responses to close the loop on previous feedbacks
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>     
                {bull}Choose 5 Associates from your reporting group for each meeting with the aim to include all of your reporting group within 3 months (Maximum group size: 6 including manager)
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom> 
                {bull}Give the Associates - and the departmental Team Leads, at least 2 hours notice of the meeting
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom> 
                {bull}Clearly communicate the meeting place and time - and the reason for the meeting
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom> 
                {bull}When Associates gather for the meeting, scan Associates to the correct ‘start’ calm code immediately to avoid Time Off Task being effected
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom> 
                {bull}Choose a quiet seated area away from the operations floor - ideally with access to drinks machines
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom> 
                {bull}Review meeting prompt/guidance
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom> 
                {bull}From the beginning, adopt a positive, open and friendly demeanour. Sit in a central location to the group.
                </Typography>
                <Typography variant="h4" color="textPrimary" gutterBottom>
                    The Meeting - things to cover and Questions to Ask
                </Typography>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                    Introduction Content
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                {bull}Self introduction (Name and role)
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                {bull}Explanation of what a 1:5 Connections meeting is and its aim
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                {bull}Anonymity (The names/logins of the Associate will not be communicated to anyone outside of the group)
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                {bull}What happens to the feedback (Portal entry and responses from The Senior Team)
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                {bull}Meeting duration (one hour)
                </Typography>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                Seek to Understand: Mandatory and freeform questions (M = Mandatory)
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                {bull}What’s good about working at BHX4 - What do you enjoy about it? [M]
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                {bull}
                What could be better? [M]
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                {bull}
                2 x ’Seek to understand’ questions around low scoring Connections scores related to the AM conducting the 1:5 meeting. [M]
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                {bull}
                Minimum of 1 x ’Seek to understand’ question around low scoring Connections score related to the building. [M]
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                {bull}
                Free Form Discussion/Questions: Topics and questions chosen by the AM that reflect things that are happening right now - or are about to happen that may/are affecting the mood of the team; such as recently announced policy changes, operational and facilities/building changes. It would also be an opportunity to gather pole/survey data and to correct rumours circulating among the greater team that have come to the attention of the ER Teams.
                If there is one thing that you would change here at BHX4, what would it be? (Consensus question - answer to be agreed by the whole/majority of the group). [M]
                </Typography>
                <Typography variant="h4" color="textPrimary" gutterBottom>
                At the End of the Meeting
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                {bull}Close the loops on feedback given at previous meeting - if applicable
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                {bull}
                Thank all those for attending
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                {bull}
                Scan all the Associates to the ‘End’ calm code
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                {bull}
                Enter feedbacks into portal immediately/soon after the meeting using the guidance on the feedback entry page. Feedback entry should take no more than 10/15 minutes
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                {bull}
                Dispose of all meeting notes in the confidential bins
                </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Acknowledge
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}