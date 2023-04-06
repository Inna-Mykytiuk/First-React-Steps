import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Wrapper } from './Counter.styled';

export class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = evt => {
    // console.log('Increment button was clicked!', evt); // працює
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  handleDecrement = evt => {
    // console.log('Decrement button was clicked!', evt); // працює
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <Container>
        <span>{this.state.value}</span>
        <Wrapper>
          <button type="button" onClick={this.handleIncrement}>
            +
          </button>
          <button type="button" onClick={this.handleDecrement}>
            -
          </button>
        </Wrapper>
      </Container>
    );
  }
}
