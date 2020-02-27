import React, { PureComponent } from 'react';
import { TextField, MenuItem, ThemeProvider, createMuiTheme, Button, InputAdornment } from '@material-ui/core';
import { Email, CalendarToday, Person } from '@material-ui/icons';

import globals from '../../../../utils/globals.scss';
import styles from './value.module.scss';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: globals.primary
    },
    secondary: {
      main: globals.secondary
    },
    background: {
      paper: globals.dark
    }
  }
})

export default class Value extends PureComponent {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <section className={styles['value']}>
        <img alt='Hero Showing The Purpose' src={require('../../../../static/images/production/slide_1.jpg')} className={styles['value-img']} />
        <div className={styles['left']}>
          <h1 className={styles['value-header']}>
            Giving you the floor for top class discussions
          </h1>
          <p className={styles['value-content']}>
            Our business provides spacious meeting environments, that is well equipped with modern technology to provide the floor for top-class discussions.
          </p>
        </div>

        <div className={styles['right']}>
          <div className={styles['form-box']}>
            <ThemeProvider theme={theme}>
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
                  autoFocus
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
            </ThemeProvider>
          </div>
        </div>
      </section>
    );
  }
}
