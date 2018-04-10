import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';

class CardExperience extends Component {
  render() {
    const { classes, details, logo } = this.props;
    return (
      <div className={classes.cardExperience}>
        <div className={classes.header}>
          <div className={classes.headerContent}>
            <span className={classes.company}>{details.company}</span>
            <span>{details.title}</span>
            <span>{details.description}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(CardExperience)
