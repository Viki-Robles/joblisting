import './App.css';
import Main from './main';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
        typography: {
          marginTop:'60px'
        },
       
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
    
      <Typography variant='h2' className={classes.typography}>TechPal</Typography>
      <Main/>

    </div>
  );
}

export default App;
