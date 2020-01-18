import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '../../../components/Table';
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined';
import CreateIcon from '@material-ui/icons/CreateOutlined';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrowOutlined';
import PrintIcon from '@material-ui/icons/Print';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

import './style.scss';

const SearchBar = () => {
  return (
    <Grid container justify="flex-start">
      <Grid item xs={10}>
        <input className="searchbar" placeholder="Search" />
      </Grid>
      <Grid item xs={2}>
        <i className="fa fa-search" aria-hidden="true"></i>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  filterText: {
    font: '500 13px Roboto',
    letterSpacing: 0,
    color: 'rgba(57, 88, 107, .8)',
  },
  tableBody: {
    fontSize: 14,
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: 0,
  },
  actions: {
    height: '40px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    border: '2px solid #3FC3D5',
    opacity: 1,
  },
  actionsHeading: {
    textAlign: 'center',
    font: '500 15px Roboto',
    letterSpacing: 0,
    color: '#41DCDF',
    margin: 0,
    paddingTop: 10,
  },
  actionsIcon: {
    textAlign: 'right',
    color: '#3FA1C8',
  },
}));

const FilterBy = () => {
  const classes = useStyles();

  return (
    <select
      id="demo-simple-select-outlined-label"
      className={classes.filterText}
    >
      <option>Filter By</option>
    </select>
  );
};

export default function Quizzes() {
  const classes = useStyles();

  const getStatus = status => {
    switch (status) {
      case 'Satisfactory':
        return (
          <p style={{ color: '#29C63B' }} className={classes.tableBody}>
            Satisfactory
          </p>
        );
      case 'Not satisfactory':
        return (
          <p style={{ color: '#FF2121' }} className={classes.tableBody}>
            Not satisfactory
          </p>
        );
      case 'Ready to assess':
        return (
          <p style={{ color: '#F88811' }} className={classes.tableBody}>
            {status}
          </p>
        );
      case 'Assessed':
        return (
          <p style={{ color: '#000000' }} className={classes.tableBody}>
            {status}
          </p>
        );
      case 'In progress':
        return (
          <p style={{ color: '#41DCDF' }} className={classes.tableBody}>
            {status}
          </p>
        );
    }
  };

  return (
    <div className="quizzes">
      <Grid container justify="flex-start">
        <Grid item lg={2} sm={4} xs={4}>
          <h5 className="heading">Quizzes</h5>
        </Grid>
        <Grid item lg={8} sm={10} xs={10}>
          <Grid container justify="center" style={{ marginTop: 22 }}>
            <Grid item lg={6} sm={8} xs={8}>
              <SearchBar />
            </Grid>
            <Grid item lg={3} sm={4} xs={4}>
              <FilterBy />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} style={{ marginTop: 30 }}>
          <div className={classes.actionsIcon}>
            <PrintIcon style={{ cursor: 'pointer' }} />
            &nbsp;&nbsp;
            <InsertDriveFileIcon style={{ cursor: 'pointer' }} />
          </div>
        </Grid>
        <Grid item xs={12} style={{ marginTop: 30 }}>
          <Table
            thStyle={{ borderBottom: 'none' }}
            ths={[
              'Quiz title',
              'Student number',
              'Date completed',
              'Result',
              'Status',
              'Assigned company assessor',
              <div className={classes.actions}>
                <p className={classes.actionsHeading}>Start assessment</p>
              </div>,
            ]}
            trs={{
              0: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('Ready to assess'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <PlayArrowIcon />
                    </div>
                  ),
                },
              ],
              1: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Not satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('Assessed'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CloseIcon />
                    </div>
                  ),
                },
              ],
              2: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Not satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('In progress'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CloseIcon />
                    </div>
                  ),
                },
              ],
              3: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('Ready to assess'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CloseIcon />
                    </div>
                  ),
                },
              ],
              4: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Not satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('Assessed'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CloseIcon />
                    </div>
                  ),
                },
              ],
              5: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Not satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('Ready to assess'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CloseIcon />
                    </div>
                  ),
                },
              ],
              6: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Not satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('In progress'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CloseIcon />
                    </div>
                  ),
                },
              ],
              7: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('Ready to assess'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CloseIcon />
                    </div>
                  ),
                },
              ],
              8: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('Ready to assess'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CloseIcon />
                    </div>
                  ),
                },
              ],
              9: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('Ready to assess'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CloseIcon />
                    </div>
                  ),
                },
              ],
              10: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('Ready to assess'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CloseIcon />
                    </div>
                  ),
                },
              ],
              11: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('Ready to assess'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CloseIcon />
                    </div>
                  ),
                },
              ],
              12: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('Ready to assess'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CloseIcon />
                    </div>
                  ),
                },
              ],
              13: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('Ready to assess'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CloseIcon />
                    </div>
                  ),
                },
              ],
              14: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('Ready to assess'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CloseIcon />
                    </div>
                  ),
                },
              ],
              15: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('Ready to assess'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CloseIcon />
                    </div>
                  ),
                },
              ],
              16: [
                {
                  type: 'text',
                  data: 'Name of quiz here',
                },
                {
                  type: 'text',
                  data: '84756353',
                },
                {
                  type: 'text',
                  data: '02 Oct 2019 10:15am',
                },
                {
                  type: 'text',
                  data: getStatus('Satisfactory'),
                },
                {
                  type: 'text',
                  data: getStatus('Ready to assess'),
                },
                {
                  type: 'text',
                  data: 'Barbara Abr',
                },
                {
                  type: 'text',
                  data: (
                    <div className={classes.actionsIcon}>
                      <VisibilityIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CreateIcon style={{ cursor: 'pointer' }} />
                      &nbsp;&nbsp;
                      <CloseIcon />
                    </div>
                  ),
                },
              ],
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
