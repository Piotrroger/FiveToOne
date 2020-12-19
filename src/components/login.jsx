import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'

Amplify.configure(awsconfig)

function login_page(){
    return(
        <div className='Login-page'>
            <AmplifySignOut/>
            <h2>My App Content</h2>
        </div>
    )
}

export default withAuthenticator(login_page);