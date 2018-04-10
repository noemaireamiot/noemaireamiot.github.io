import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';
import CardPrice from './CardPrice';
import CardExperience from './CardExperience';

const detailsExperience = [
  {
    company: 'Micro Erosion',
    title: `Stagiaire maintenance en réseau informatique`,
    date: [new Date('2014-05-01'), new Date('2014-07-01')],
    description: 'Gestion et maintenance du réseau infomratique de Micro Erosion.'
  },
  {
    company: 'Solivers',
    title: `Stagiaire développeur logiciel`,
    date: [new Date('2017-04-01'), new Date('2017-08-01')],
    description: 'Développement logiciel C#/.NET - Développement Web ASP.NET'
  }
]

const detailsPrice = [
  {
    project: 'Typeco',
    price: `Prix Global Media`,
    place: 'Hacking Industry Camp',
    date: new Date('2016-10-01'),
    description: `Typeco est une solution pour économiser lors de vos impressions, et ce sans changer de matériel et sans détériorer la qualité de vos documents.`
  }
]


class Experience extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.experience}>
        <div>
          <div>
            <div className={classes.headerText}>EXPERIENCE</div>
          </div>
          <div>
            {
              detailsExperience.map((e, i) => <CardExperience key={`cardExp-${i}`} details={e}/>)
            }
          </div>
        </div>
        <div>
          <div>
            <div className={classes.headerText}>RECOMPENSE</div>
          </div>
          <div>
            {
              detailsPrice.map((e, i) => <CardPrice key={`cardPrice-${i}`} details={e}/>)
            }
          </div>
        </div>
      </div>
      )
    }
}

export default injectSheet(styles)(Experience)
