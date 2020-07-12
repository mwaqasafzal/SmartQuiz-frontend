import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import students from '../assets/images/students.png'
import stats from '../assets/images/stats.png'
import createquiz from '../assets/images/createquiz.png'
import takequiz from '../assets/images/takequiz.png'
import {Service} from './Service'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export const Services=props=>{
    const classes = useStyles();
    return(
        <div className="services" id="services">
            <div className="tab">
                <h2 className="title">Services</h2>

                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Service 
                                image={createquiz}
                                title="Create a Quiz">
                                 User can create a quiz,with latest tools provided by SmartQuiz
                            </Service>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Service 
                                image={takequiz}
                                title="Attempt a Quiz">
                                 User can attempt a quiz,any time,at any kind of device like desktop or smart phone.
                            </Service>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Service 
                                image={students}
                                title="Those Who have taken your Quiz">
                                If you have created the quiz,anyone who attempted your quiz will be notified to you,with his result
                            </Service>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Service 
                                image={stats}
                                title="Statistics of attempts and result">
                                    A complete set of statistics will be provided to you either the attempts on quizez you created and the quizez you attempted
                            </Service>
                        </Grid>
                    </Grid>
                 </div>
            </div>
            
        </div>
    );
}


