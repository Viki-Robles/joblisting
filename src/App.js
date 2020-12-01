import "./App.css";
import Main from "./main/main";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./images/logocastle.png";

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
  const classes = useStyles();

  return (
    <div className="App">
      <img src={logo} alt='' className={classes.image} />
      <Typography variant='h3' className={classes.typography}>TechPal</Typography>
      <Grid container direction="column">
        <Typography className={classes.subtitle}>Choose your job based on</Typography>
        <Typography className={classes.subtitle}>where you want to live.</Typography>
      </Grid>
      <Main />
    </div>
  );
}

export default App;
