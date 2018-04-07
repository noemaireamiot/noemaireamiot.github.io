import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectSheet from 'react-jss';
import Homepage from './Homepage/Homepage.js';
import About from './About/About.js';
import Formation from './Formation/Formation.js';
import { styles } from './Homepage/styles';
import FaChevronUp from 'react-icons/lib/fa/chevron-up'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  handleClick = (e) => {
    const tesNode = ReactDOM.findDOMNode(this.refs[e])
    window.scroll({
      top: tesNode.offsetTop,
      behavior: 'smooth'
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <Homepage ref='home' handleClick={this.handleClick}/>
        <About ref='about'/>
        <Formation ref='formation'/>
        <button title='Back to top' className={classes.scroll} onClick={() => this.handleClick('home')}>
          <FaChevronUp/>
        </button>
      </div>
    );
  }
}

export default injectSheet(styles)(App)