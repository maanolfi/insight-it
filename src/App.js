import React from 'react'
import { Container, Grid, Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header'
import Form from './components/Form'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#121214', 
    height: '100vh'
  },
  formWrapper: {   
    padding: theme.spacing(4),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Paper className={classes.formWrapper}>
            <Form />
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
