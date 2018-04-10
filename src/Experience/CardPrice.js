import React, { Component } from 'react';
import injectSheet from 'react-jss'
import { styles } from './styles.js'

class CardPrice extends Component {
  render() {
    const { classes, details } = this.props;
    console.log('Price', details);
    return (
      <div>
        lolilol
      </div>
    );
  }
}

export default injectSheet(styles)(CardPrice)
