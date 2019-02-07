import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const Logo = ({logo}) => (
  <Paper style={{height: '20%', width: '50%', position: 'absolute', top: '-10%', left: '25%'}}>
    <img
      className="mv2"
      src={logo}
      style={{height:'50px', width: '100px', marginLeft: '20%', marginTop: '15%'}}
      alt=""
      key={`client`}
    />
  </Paper>
);

class FlipCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({isFlipped: !this.state.isFlipped});
  }

  render() {
    return (
      <Grid item md={3} style={{margin: '2%'}}>
        <ReactCardFlip isFlipped={this.state.isFlipped} key={this.props.key}>
          <Paper style={{height: 500}} key="front" elevation={2}>
            <Logo logo={this.props.logo}/>
            <Typography style={{textAlign: 'center', padding: '20%'}}>
              <h2>{this.props.heading}</h2>
              <p className="mh-light-gray ttu b f6 mv3 tracked">
                <br/> {this.props.services}
              </p>
              <br/>
              <h3>{this.props.summary}</h3>
              <Button onClick={this.handleClick} style={{bottom: '2%', right: '2%', position: 'absolute'}}>
                Read More >>
              </Button>
            </Typography>
          </Paper>

          <Paper style={{height: 500}} key="back" elevation={7}>
            <Logo logo={this.props.logo}/>
            <Typography>
              <h4 style={{textAlign: 'justify', padding: '20%', fontWeight: 200}}>{this.props.details}</h4>
              <Button onClick={this.handleClick} style={{bottom: '2%', right: '2%', position: 'absolute'}}>
                Show Less
              </Button>
            </Typography>
          </Paper>
        </ReactCardFlip>
      </Grid>
    )
  }
}

export default FlipCard;