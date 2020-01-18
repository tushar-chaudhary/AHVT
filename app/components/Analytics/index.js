import React from 'react';
import { Grid } from '@material-ui/core';

import './style.scss';

const List = ({ Heading, Text }) => {
  return (
    <div className="list-container">
      <p className="list">{Heading}</p>
      <h5 className="list-item">{Text}</h5>
    </div>
  );
};

export default function Analytics() {
  return (
    <div className="analytics">
      <Grid container justify="space-between">
        <Grid item lg={3} sm={6} xs={12}>
          <List Heading={'Total Number of quizzes assessed'} Text={'14'} />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <List
            Heading={'Total Number of quizzes pending assessment'}
            Text={'14'}
          />{' '}
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <List
            Heading={'Number of quizzes assessed in last 7 days'}
            Text={'896'}
          />{' '}
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <List
            Heading={'Number of quizzes assessed in the last 30 days'}
            Text={'78'}
          />{' '}
        </Grid>
      </Grid>
    </div>
  );
}
