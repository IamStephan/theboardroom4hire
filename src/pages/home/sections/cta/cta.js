import React, { PureComponent } from 'react';
import { TextField, MenuItem, ThemeProvider, createMuiTheme, Button, InputAdornment, Divider } from '@material-ui/core';
import { Email, CalendarToday, Person } from '@material-ui/icons';

import Page from '../../../../components/page/page';

import globals from '../../../../utils/globals.scss';
import styles from './cta.module.scss';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: globals.primary
    },
    secondary: {
      main: globals.secondary
    }
  }
})

export default class CTA extends PureComponent {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div
        className={styles['cta-container']}
      >
        <Page.Section>

          <ThemeProvider
            theme={theme}
          >
            <div className={styles['cta']}>
              <div className={styles['left']}>
                <h2 className={styles['header']}>
                  Ready to give top class discussions?
                </h2>

                <p className={styles['subheader']}>
                  Fill in the form to request a booking and get a personalized quote from us.
                </p>

                <Divider className={styles['divider']} />
                <div className={styles['info']}>
                  <p className={styles['info-item']}>
                    C. Pieterse: 082 079 4173
                  </p>
                  <p className={styles['info-item']}>
                    carel@theboardroom4hire.co.za
                  </p>
                </div>
              </div>
              <div className={styles['right']}>
              <div className={styles['form-box']} id='book'>
                <h3 className={styles['form-title']}>
                  Book Now
                </h3>

                <form
                  noValidate
                  onSubmit={this.handleSubmit}
                  className={styles['form']}
                >
                  <TextField
                    className={styles['item']}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                    size='small'
                    fullWidth
                    variant='filled'
                    color='secondary'
                    label='Full Name'
                  />

                  <TextField
                    className={styles['item']}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Email />
                        </InputAdornment>
                      ),
                    }}
                    size='small'
                    fullWidth
                    variant='filled'
                    color='secondary'
                    label='Email'
                  />

                  <div className={styles['dual']}>
                    <div className={styles['item']}>
                      <TextField
                        size='small'
                        fullWidth
                        select
                        variant='filled'
                        color='secondary'
                        label='Package'
                      >
                        <MenuItem value='ph'>
                          Per Hour
                        </MenuItem>
                        <MenuItem value='hd'>
                          Half Day
                        </MenuItem>
                        <MenuItem value='fd'>
                          Full Day
                        </MenuItem>
                      </TextField>
                    </div>
                    <div className={styles['item']}>
                      <TextField
                        size='small'
                        fullWidth
                        select
                        variant='filled'
                        color='secondary'
                        label='People'
                      >
                        <MenuItem value='sm'>
                          1-4
                        </MenuItem>
                        <MenuItem value='md'>
                          5-9
                        </MenuItem>
                        <MenuItem value='lg'>
                          10-19
                        </MenuItem>
                        <MenuItem value='xl'>
                          20-30
                        </MenuItem>
                      </TextField>
                    </div>
                  </div>

                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <CalendarToday />
                        </InputAdornment>
                      ),
                    }}
                    className={styles['item']}
                    size='small'
                    fullWidth
                    variant='filled'
                    color='secondary'
                    label='Prefered Date'
                  />

                  <Button
                    variant='outlined'
                    color='default'
                    type='submit'
                    fullWidth
                  >
                    Submit
                  </Button>
                </form>
              </div>
              </div>
            </div>
          </ThemeProvider>
        </Page.Section>
      </div>
    );
  }
}
