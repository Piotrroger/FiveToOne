import React, {useEffect, useState} from 'react'
import Amplify from 'aws-amplify';
import {listRecordTables} from '../graphql/queries'
import awsconfig from '../aws-exports';
import { makeStyles } from '@material-ui/core/styles';
import {API, graphqlOperation} from 'aws-amplify';
// import { DataGrid } from '@material-ui/data-grid';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core/'
Amplify.configure(awsconfig)



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});


export default function MainTable() {

const classes = useStyles();   
const[records, updateRecords] = useState([])

useEffect(() => {
  fetchMainTable()
}, [])

const fetchMainTable = async () => {
  try{
    const recordData = await API.graphql(graphqlOperation(listRecordTables))
    const tableData = recordData.data.listRecordTables.items;
    updateRecords(tableData)
    console.log(tableData)
  } catch (err){
    console.log('error fetching table', err)
  }
  }


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Created By</TableCell>
            <TableCell align="middle">Created At</TableCell>
            <TableCell align="middle">Category</TableCell>
            <TableCell align="middle">Department</TableCell>
            <TableCell align="middle">Sentiment</TableCell>
            <TableCell align="middle">Shift</TableCell>
            <TableCell align="middle">Site Code</TableCell>
            <TableCell align="middle">Status</TableCell>
            <TableCell align="middle">Post</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((record) => (
            <TableRow>
              <TableCell align="middle">{record.name}</TableCell>
              <TableCell align="middle">{ new Date(record.createdAt).toLocaleDateString('en-GB')},   {new Date(record.createdAt).toLocaleTimeString('en-US')}</TableCell>
              <TableCell align="middle">{record.category}</TableCell>
              <TableCell align="middle">{record.Department}</TableCell>
              <TableCell align="middle">{record.Steniment}</TableCell>
              <TableCell align="middle">{record.Shift}</TableCell>
              <TableCell align="middle">{record.id}</TableCell>
              <TableCell align="middle">{record.Status}</TableCell>
              <TableCell align="middle">{record.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}