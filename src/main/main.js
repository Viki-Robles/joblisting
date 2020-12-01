import React, { useState, useEffect } from "react";
import Results from "../results/results";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Spinner from "../spinner/spinner";

//API: https://jobs.github.com/positions.json?location=london
//API: https://jobs.github.com/positions.json?description=python
//https://cors-anywhere.herokuapp.com/

const useStyles = makeStyles((theme) => ({
    form: {
        margin: "20px auto",
        borderRadius: "5px"
    },
    select: {
        backgroundColor: "#B4F8C8",
        padding: "15px",
        color: "#444242",
        fontSize: "1rem",
        borderRadius: "10px",
        border: "1px #B4F8C8"
    },
    spinner: {
        justifyContent: "center"
    }
}));

export default function Main() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [listofJobs, setListofJobs] = useState([]);
    const [location, setLocation] = useState("");
    const URL = "https://jobs.github.com/positions.json";
    const classes = useStyles();

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((json) => {
                setListofJobs(json);
                setIsLoaded(true);
            });
    },[]);

    if (!isLoaded) {
        return (
            <Grid container className={classes.spinner}>
                <Spinner />
            </Grid>
        );
    } else {
        return (
            <>
                <Grid container className={classes.container}>
                    <form className={classes.form}>
                        <select
                            onChange={(e) => setLocation(e.target.value)}
                            className={classes.select} defaultValue="Choose location">
                            <option enabled="true">
                                Choose Location
                            </option>
                            {
                                listofJobs
                                    .sort((a, b) => (
                                        a.location > b.location ? 1 : -1))
                                    .map(({ location, id }) => (

                                        <option
                                            key={id}
                                            value={location}>
                                            {location}
                                        </option>
                                    ))}
                        </select>
                    </form>
                </Grid>
                {location && <Results location={location} />}
            </>
        );
    }
}