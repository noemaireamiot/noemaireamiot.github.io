import ProfilePicture from './../pictures/pp.jpg'

export const styles = {
  about: {
    display: 'flex',
    '-webkit-box-shadow': 'inset 0px 16px 15px -15px rgba(0,0,0,0.51)',
    '-moz-box-shadow': 'inset 0px 16px 15px -15px rgba(0,0,0,0.51)',
    boxShadow: 'inset 0px 16px 15px -15px rgba(0,0,0,0.51)',
    padding: '40px 0'
  },
  backgroundPP: {
    margin: '0 20px',
    flex: '1'
  },
  PP: {
    backgroundImage: 'url(' + ProfilePicture + ')',
    backgroundRepeat: 'no-repeat',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '50%',
    height: '200px',
    width: '200px',
    margin: 'auto',
    border: '6px solid #335893'
  },
  content: {
    flex: '4'
  },
  header: {
    height: '35%'
  },
  headerText: {
    display: 'inline-block',
    borderLeft: '3px solid #335893',
    marginTop: '20px',
    fontSize: '2em',
    color: '#74808a',
    paddingLeft: '16px'
  },
  resume: {
    height: '65%',
    color: '#74808a',
    fontSize: '20px'
  },
  resumeText: {
    paddingTop: '30px'
  }
}
