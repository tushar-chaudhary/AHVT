import React, { Component } from 'react';
import Analytics from '../../../components/Analytics';
import Table from '../../../components/Table';
import { Grid } from '@material-ui/core';
import Waiting from '../../../images/homeDashboardAsset/Group 18.png';
import NotPassed from '../../../images/homeDashboardAsset/Group 39.png';
import Passed from '../../../images/homeDashboardAsset/Group 41.png';
import Enrolled from '../../../images/homeDashboardAsset/Ellipse 18.png';
import CompletedL1 from '../../../images/homeDashboardAsset/Group 36.png';
import CompletedL2 from '../../../images/homeDashboardAsset/Group 38.png';
import Submitted from '../../../images/homeDashboardAsset/Group 37.png';
import Error from '../../../images/homeDashboardAsset/Polygon 1.png';

export default class Homepage extends Component {
  getStatus = status => {
    switch (status) {
      case 'Passed':
        return {
          url: Passed,
          text: 'Passed',
        };
      case 'Not Passed':
        return {
          url: NotPassed,
          text: 'Not Passed',
        };
      case 'Complete L2':
        return {
          url: CompletedL2,
          text: 'Complete L2',
        };
      case 'Submitted':
        return {
          url: Submitted,
          text: 'Submitted',
        };
      case 'Complete L1':
        return {
          url: CompletedL1,
          text: 'Complete L1',
        };
      case 'Enrolled':
        return {
          url: Enrolled,
          text: 'Enrolled',
        };
      case 'Waiting':
        return {
          url: Waiting,
          text: 'Waiting',
        };
      case 'Error':
        return {
          url: Error,
          text: '',
        };
    }
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} style={{ marginTop: 20 }}>
            <Analytics />
          </Grid>
          <Grid item xs={12} style={{ marginTop: 20 }}>
            <Table
              heading={'STUDENTS'}
              ths={['Student', 'Course', 'Date Approved', 'Course Status']}
              trs={{
                0: [
                  {
                    type: 'text',
                    data: 'John Smith',
                  },
                  {
                    type: 'text',
                    data: 'Course Title goes here it may be bit longer',
                  },
                  {
                    type: 'text',
                    data: '12 Aug 2019',
                  },
                  {
                    type: 'image',
                    data: this.getStatus('Waiting'),
                  },
                ],

                1: [
                  {
                    type: 'text',
                    data: 'Peter Craigan',
                  },
                  {
                    type: 'text',
                    data: 'Course Title goes here it may be bit longer',
                  },
                  {
                    type: 'text',
                    data: '12 Aug 2019',
                  },
                  {
                    type: 'image',
                    data: this.getStatus('Enrolled'),
                  },
                ],
                2: [
                  {
                    type: 'text',
                    data: 'James Smith',
                  },
                  {
                    type: 'text',
                    data: 'Course Title goes here it may be bit longer',
                  },
                  {
                    type: 'text',
                    data: '12 Aug 2019',
                  },
                  {
                    type: 'image',
                    data: this.getStatus('Complete L1'),
                  },
                ],
                3: [
                  {
                    type: 'text',
                    data: 'Luke Tardy',
                  },
                  {
                    type: 'text',
                    data: 'Course Title goes here it may be bit longer',
                  },
                  {
                    type: 'text',
                    data: '12 Aug 2019',
                  },
                  {
                    type: 'image',
                    data: this.getStatus('Submitted'),
                  },
                ],
                4: [
                  {
                    type: 'text',
                    data: 'Jude Green',
                  },
                  {
                    type: 'text',
                    data: 'Course Title goes here it may be bit longer',
                  },
                  {
                    type: 'text',
                    data: '12 Aug 2019',
                  },
                  {
                    type: 'image',
                    data: this.getStatus('Complete L2'),
                  },
                ],
                5: [
                  {
                    type: 'text',
                    data: 'Thomas Brownly',
                  },
                  {
                    type: 'text',
                    data: 'Course Title goes here it may be bit longer',
                  },
                  {
                    type: 'text',
                    data: '12 Aug 2019',
                  },
                  {
                    type: 'image',
                    data: this.getStatus('Not Passed'),
                  },
                ],
                6: [
                  {
                    type: 'text',
                    data: 'Simon Common',
                  },
                  {
                    type: 'text',
                    data: 'Course Title goes here it may be bit longer',
                  },
                  {
                    type: 'text',
                    data: '12 Aug 2019',
                  },
                  {
                    type: 'image',
                    data: this.getStatus('Passed'),
                  },
                ],
              }}
            />
          </Grid>

          <Grid container spacing={3}>
            <Grid item lg={7} sm={12} xs={12} style={{ marginTop: 40 }}>
              <Table
                heading={'INVOICES'}
                ths={['Number', 'To', 'Date', 'Due Date', 'Overdue']}
                trs={{
                  0: [
                    {
                      type: 'text',
                      data: '123567',
                    },
                    {
                      type: 'text',
                      data: 'Course Title goes here it may be bit longer',
                    },
                    {
                      type: 'text',
                      data: '12 Aug 2019',
                    },
                    {
                      type: 'text',
                      data: '12 Aug 2019',
                    },
                    {
                      type: 'image',
                      data: this.getStatus('Error'),
                    },
                  ],

                  1: [
                    {
                      type: 'text',
                      data: '133567',
                    },
                    {
                      type: 'text',
                      data: 'Course Title goes here it may be bit longer',
                    },
                    {
                      type: 'text',
                      data: '12 Aug 2019',
                    },
                    {
                      type: 'text',
                      data: '12 Aug 2019',
                    },
                    {
                      type: 'text',
                      data: '',
                    },
                  ],
                  2: [
                    {
                      type: 'text',
                      data: '65432',
                    },
                    {
                      type: 'text',
                      data: 'Course Title goes here it may be bit longer',
                    },
                    {
                      type: 'text',
                      data: '12 Aug 2019',
                    },
                    {
                      type: 'text',
                      data: '12 Aug 2019',
                    },
                    {
                      type: 'image',
                      data: this.getStatus('Error'),
                    },
                  ],
                  3: [
                    {
                      type: 'text',
                      data: '23456',
                    },
                    {
                      type: 'text',
                      data: 'Course Title goes here it may be bit longer',
                    },
                    {
                      type: 'text',
                      data: '12 Aug 2019',
                    },
                    {
                      type: 'text',
                      data: '12 Aug 2019',
                    },
                    {
                      type: 'text',
                      data: '',
                    },
                  ],
                  4: [
                    {
                      type: 'text',
                      data: '23467',
                    },
                    {
                      type: 'text',
                      data: 'Course Title goes here it may be bit longer',
                    },
                    {
                      type: 'text',
                      data: '12 Aug 2019',
                    },
                    {
                      type: 'text',
                      data: '12 Aug 2019',
                    },
                    {
                      type: 'text',
                      data: '',
                    },
                  ],
                  5: [
                    {
                      type: 'text',
                      data: '85432',
                    },
                    {
                      type: 'text',
                      data: 'Course Title goes here it may be bit longer',
                    },
                    {
                      type: 'text',
                      data: '12 Aug 2019',
                    },
                    {
                      type: 'text',
                      data: '12 Aug 2019',
                    },
                    {
                      type: 'text',
                      data: '',
                    },
                  ],
                  6: [
                    {
                      type: 'text',
                      data: '35832',
                    },
                    {
                      type: 'text',
                      data: 'Course Title goes here it may be bit longer',
                    },
                    {
                      type: 'text',
                      data: '12 Aug 2019',
                    },
                    {
                      type: 'text',
                      data: '12 Aug 2019',
                    },
                    {
                      type: 'text',
                      data: '',
                    },
                  ],
                }}
              />
            </Grid>

            <Grid item lg={5} sm={12} xs={12} style={{ marginTop: 40 }}>
              <Table
                heading={'QUIZZES'}
                ths={['Quiz Title', 'Student', 'Result']}
                trs={{
                  0: [
                    {
                      type: 'text',
                      data: 'Course Title / Quiz Level',
                    },
                    {
                      type: 'text',
                      data: 'John Smith',
                    },
                    {
                      type: 'image',
                      data: this.getStatus('Passed'),
                    },
                  ],

                  1: [
                    {
                      type: 'text',
                      data: 'Course Title / Quiz Level',
                    },
                    {
                      type: 'text',
                      data: 'Peter Craigan',
                    },
                    {
                      type: 'image',
                      data: this.getStatus('Passed'),
                    },
                  ],
                  2: [
                    {
                      type: 'text',
                      data: 'Course Title / Quiz Level',
                    },
                    {
                      type: 'text',
                      data: 'James Smith',
                    },
                    {
                      type: 'image',
                      data: this.getStatus('Not Passed'),
                    },
                  ],
                  3: [
                    {
                      type: 'text',
                      data: 'Course Title / Quiz Level',
                    },
                    {
                      type: 'text',
                      data: 'Luke Tardy',
                    },
                    {
                      type: 'image',
                      data: this.getStatus('Not Passed'),
                    },
                  ],
                  4: [
                    {
                      type: 'text',
                      data: 'Course Title / Quiz Level',
                    },
                    {
                      type: 'text',
                      data: 'Jude Green',
                    },
                    {
                      type: 'image',
                      data: this.getStatus('Passed'),
                    },
                  ],
                  5: [
                    {
                      type: 'text',
                      data: 'Course Title / Quiz Level',
                    },
                    {
                      type: 'text',
                      data: 'Thomas Brownly',
                    },
                    {
                      type: 'image',
                      data: this.getStatus('Not Passed'),
                    },
                  ],
                  6: [
                    {
                      type: 'text',
                      data: 'Course Title / Quiz Level',
                    },
                    {
                      type: 'text',
                      data: 'Simon Common',
                    },
                    {
                      type: 'image',
                      data: this.getStatus('Not Passed'),
                    },
                  ],
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
