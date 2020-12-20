import "./App.css";
import React from 'react';
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./images/logocastle.png";
import { useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import fetchJobs from './FetchJobs/fetchJobs';
import Job from './Job/Job';
import Spinner from './spinner/spinner';


const useStyles = makeStyles(() => ({
  typography: {
    marginBottom: "20px",
    color: "#585757"
  },
  image: {
    width: "11%",
    marginTop: "60px"
  },
  subtitle: {
    color: "#4CC4B8"
  }
}));

function App() {
  const [params, setParams] = useState({})
  const { jobs, loading, error } = fetchJobs(params)
  const classes = useStyles();

  const handleParam = (e) => {
    const param = e.target.name
    const value = e.target.value
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }
  return (
    <div className="App">
      <img src={logo} alt='' className={classes.image} />
      <Typography variant='h3' className={classes.typography}>TechPal</Typography>
      <Grid container justify='center'>
      {loading && <Spinner/>}
      </Grid>
        {error && <h1>Error. Try refreshing..</h1>}
      <SearchForm params={params} onParamChange={handleParam} />
      <Grid container direction="column">
        <Grid container className={classes.container}>
        {jobs.map(job => {
          return <Job key={job.id} job={job} />
        })}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

/**
 * <Typography variant='h3' className={classes.typography}>TechPal</Typography>
      <Grid container direction="column">
        <Typography className={classes.subtitle}>Choose your job based on</Typography>
        <Typography className={classes.subtitle}>where you want to live.</Typography>
 */