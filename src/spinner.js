import React, { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    override: {
    display: 'block',
    margin: '0 auto',
    borderColor:'red'
    }
}));
export default function Spinner () {
    const[loading, setLoading] = useState(true)
    const classes = useStyles();


    return (
      <div className="sweet-loading">
        <FadeLoader
          className={classes.override}
          size={150}
          color={"#00FA9A"}
          loading={loading}
        />
      </div>
    );
  }
