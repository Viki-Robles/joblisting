import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
container: {
  marginBottom:'40px',
  paddingLeft:'20px'
},
textfield: {
  width:'400px'
}
}));

export default function SearchForm({ params, onParamChange }) {
  const classes = useStyles();
  return (
    <Grid container direction='column' alignItems='flex-start' md={12} className={classes.container}>
      <FormLabel>Description</FormLabel>
        <TextField 
        variant='outlined'
        className={classes.textfield}
        value={params.description} 
        onChange={onParamChange} 
        name='description' 
        type='text'></TextField>
    </Grid>
  ) 
}