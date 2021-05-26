import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import React, {useEffect, useState} from 'react'
import MenuBar from './components/menubar';
import {listRecordTables} from './graphql/queries'
import {API, graphqlOperation} from 'aws-amplify'

import MainTable from './components/mainTable';



function App() {


  return (
    <div className="App">
        <MenuBar/>
        <MainTable/>
      <header className="App-header">
      
      </header>
    </div>
  );
}
export default App;
