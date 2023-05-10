import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context'; 

import useStyles from './style';
import Form from './Form/Form';
import List from './List/List';
import Infocard from '../Infocard';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);
    return (
    <Card className={classes.root}>
        <CardHeader  title=<u><h2><span style={{color:'green'}}>Expense</span> <span style={{color:'red'}}> Tracker</span></h2></u> /* subheader="Powered bySpeechly" */ align="center" />
        <CardContent>
            <Typography align="center" variant="h5"> Total Balance : ₹{balance}</Typography>
            <Typography variant="subtitle1" style={{lineHeight: '1.5em', marginTop:'20px'}}>
                 <Infocard/>
            </Typography>
            <Divider/>
             <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
}

export default Main