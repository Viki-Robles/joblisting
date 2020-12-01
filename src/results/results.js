import React, { useState, useEffect } from "react";
import Job from "../job/job";
import "./results.css";
import Spinner from "../spinner/spinner";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    spinner: {
        justifyContent: "center",
        marginTop: "10px"
    }
}));

export default function Results(props) {
    const [jobs, setJobs] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        fetch(
            `https://jobs.github.com/positions.json?location=${props.location}`)
            .then((response) => response.json())
            .then((json) => {
                setJobs(json);
                setIsLoaded(true);
                let element = document.getElementById("results");
                element.scrollIntoView({ behavior: "smooth", block: "nearest" });
            });
    }, [props.location]);

    if (!isLoaded) {
        return (
            <Grid container className={classes.spinner}>
                <Spinner />
            </Grid>
        )
    } else {
        return (
            <div className="results" id="results">
                <div className="results-container">
                    {jobs
                        .map(({ id, title, location, description, company_url, company_logo, url, type, created_at }) => {
                            //remove html tags with replace method
                            const descriptionRemoveTags = description.replace(/<\/?[^>]+>/gi, '');

                            return (
                                <div key={id} className="results-wrapper">
                                    {
                                        <Job
                                            id={id}
                                            title={title}
                                            location={location}
                                            description={descriptionRemoveTags}
                                            company_url={company_url}
                                            company_logo={company_logo}
                                            url={url}
                                            type={type}
                                            created_at={created_at} />
                                    }
                                </div>
                            )
                        }

                        )}
                </div>
            </div>
        );
    }
}