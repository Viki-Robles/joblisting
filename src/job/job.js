import React, { useState, useEffect } from "react";
import { Grid, Typography, Collapse } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles((theme) => ({
    logo: {
        display: "flex",
        "& > *": {
        
        },
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    container: {
        border: "1px solid white",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
    },
    item: {
        border: "1px solit black",
        backgroundColor: "black",
        color: "white",
        margin: "5px",
        padding: "5px",
        borderRadius: "5px",
    },
    title: {
        margin: "0 auto"
    },
    typography: {
        textAlign: "left",
        color: "#A9A9A9",
        marginBottom: "5px"
    },
    button: {
        margin: "5px",
        backgroundColor: "#4CC4B8",
        textTransform: "none"
    },
    firstButton: {
        margin: "5px",
        backgroundColor: "#4CC4B8",
        textTransform: "none"
    }
}));

export default function Job({ title, location, description, company_logo, url, type, created_at, onCountChange = () => {} }) {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        onCountChange(open)
    })

    return (
        <Grid container className={classes.container}>
            <Grid container direction="column">
                <div className={classes.logo}>
                    <Avatar alt="Remy Sharp" src={company_logo} className={classes.large} />
                </div>
                <Grid container className={classes.title}>
                    <Typography>{title}</Typography>
                </Grid>
                <Typography component="h6" className={classes.typography}>
                    {new Date(created_at).toLocaleDateString()}
                </Typography>
            </Grid>
            <Grid container direction="row" justify="flex-start">
                <Grid item className={classes.item}>
                    <Typography>{location}</Typography>
                </Grid>
                <Grid item className={classes.item}>
                    <Typography>{type}</Typography>
                </Grid>
            </Grid>
            <Grid container className={classes.buttonContainer}>
                <Button
                    variant="contained"
                    color="primary"
                    href={url}
                    target="_blank"
                    className={classes.button}>
                    Apply
            </Button>
                <Button
                    onClick={() => setOpen(prevOpen => !prevOpen)}
                    variant="contained"
                    color={"primary"}
                    className={classes.firstButton}>
                    {open ? "Hide Details" : "View Details"}
                </Button>
                <Collapse in={open} className={classes.collapse}>
                    <div className=''>
                        <ReactMarkdown source={description} />
                    </div>
                </Collapse>
            </Grid>
        </Grid>

    );
}