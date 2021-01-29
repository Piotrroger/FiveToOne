import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/navbar'
import Amplify, {Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react'
import React, {useEffect, useState} from 'react'
import MenuBar from './components/menubar';
import Register from './components/addForm';
import {listRecordTables as GetRecordTable} from './graphql/queries'
import {API, graphqlOperation} from 'aws-amplify'
Amplify.configure(awsconfig)





function App() {

  const[records, updateRecords] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData(){
    try{
      const recordData = await API.graphql(graphqlOperation(GetRecordTable))
      console.log('Record Data:', GetRecordTable)
      updateRecords(recordData.data.GetRecordTable.items)
    } catch (err){
      console.log('error fetching table', err)
    }
    }
  return (
    <div className="App">
      <NavigationBar/>
        {/* MAIN PAGE HERE:  */}
        <MenuBar/>
        <Register/>
      <header className="App-header">
        <div>
          {
            records.map((record, index) => (
              <div key={index}>
                <h3>{record.name}</h3>
                <h5>{record.category}</h5>
                <p>{record.description}</p>
                </div>
            ))
          }
        </div>
      </header>
    </div>
  );
}
export default App;
