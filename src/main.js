import React, { useState, useEffect } from 'react';
import Results from './results';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
        form: {
            margin:'0 auto'
        },
        select: {
            backgroundColor: 'black',
            padding:'15px',
            color:'white',
            fontSize:'1rem',
            borderRadius:'5px'
        }
}));

export default function Main() {
    const classes = useStyles();

    const [isLoaded, setIsLoaded] = useState(false);
    const [listofJobs, setListofJobs] = useState([]);
    const [location, setLocation] = useState("");

    const URL = "https://jobs.github.com/positions.json";
    //API: https://jobs.github.com/positions.json?location=london
    //API: https://jobs.github.com/positions.json?description=python
    //https://cors-anywhere.herokuapp.com/

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((json) => {
                setListofJobs(json);
                setIsLoaded(true);
            });
    });

    if (!isLoaded) {
        return <div>Loadin Main...</div>;
    } else {
        return (
            <>
                <Grid container className={classes.container}>
                    <form className={classes.form}>
                        <select
                            onChange={(e) => setLocation(e.target.value)}
                            className={classes.select} defaultValue="Choose location">
                            <option disabled>
                                Choose Location
                            </option>
                            {
                                listofJobs
                                    .sort((a, b) => (
                                        a.location > b.location ? 1 : -1))
                                    .map(({ location }) => (
                                      
                                        <option
                                            value={location}>
                                            {location}
                                        </option>
                                    ))}
                        </select>
                    </form>
                </Grid>
                {location && <Results location={location} />}
            </>
        )
    }
}