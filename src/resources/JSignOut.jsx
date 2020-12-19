import React, {Component} from 'react';
import {Auth} from 'aws-amplify';
import './style.css';



class JSignOut extends Component{

    signOut = () =>{
        console.log("Logout pressed")
        try {
            Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
      }

    constructor(props){
        super(props);
        this.signOut = this.signOut.bind(this)
    }

    singOut(){
        Auth.signOut()
    }

render(){
    return(
        <div>
            <button onClick={this.singOut, console.log("PRESSED")}>Sign Out</button>
        </div>
    );
}
}export default JSignOut;