import React, { useState, useEffect } from "react";
import Job from './job';
import './results.css';

export default function Results(props) {
    const [jobs, setJobs] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(
            `https://jobs.github.com/positions.json?location=${props.location}`)
            .then((response) => response.json())
            .then((json) => {
                setJobs(json);
                setIsLoaded(true);
                let element = document.getElementById("Results");
                element.scrollIntoView({ behavior: "smooth", block: "nearest" });
            });
    }, [props.location]);

    if (!isLoaded) {
        return <div>Loading</div>
    } else {
        return (
            <div className="Results" id="Results">
                <div className="Results-container">
                    {jobs
                        .map(({ id, title, location, description, company_url, company_logo, url, type, created_at }) => {
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
                                            created_at={created_at}
                                        />
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