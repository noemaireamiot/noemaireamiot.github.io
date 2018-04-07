import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';


class Formation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.formation}>
        Formation
      </div>
      )
    }
}

export default injectSheet(styles)(Formation)
