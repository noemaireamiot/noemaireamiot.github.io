import React, { Component } from 'react';
import injectSheet from 'react-jss'
import { styles } from './styles.js'

class CardExperience extends Component {
  render() {
    const { classes, details } = this.props;
    console.log('Experience', details)
    return (
      <div>
        lulz
      </div>
    );
  }
}

export default injectSheet(styles)(CardExperience)
