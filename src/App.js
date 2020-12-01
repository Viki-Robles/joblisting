import './App.css';
import Main from './main';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './images/logocastle.png';

const useStyles = makeStyles((theme) => ({
        typography:{
          marginBottom:'30px'
        },
        image: {
          width:'11%',
          marginTop:'60px'
        }
       
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <img src={logo} alt='' className={classes.image}/>
      <Typography variant='h3' className={classes.typography}>TechPal</Typography>
      <Main/>

    </div>
  );
}

export default App;
