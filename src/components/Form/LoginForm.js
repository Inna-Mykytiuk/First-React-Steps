import { Component } from 'react';
import { FormWrapper } from './LoginForm.styled';

export class LoginForm extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    console.log(login, password);
    this.props.onSubmit({ login, password });
    form.reset();
  };
  render() {
    return (
      <FormWrapper>
        <h3>Login Form</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="login" placeholder="Enter your name" />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </form>

        <button type="submit">Login</button>
      </FormWrapper>
    );
  }
}
