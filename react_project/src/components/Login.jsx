import React from "react";
class Login extends React.Component {
    render() {
      return (
        <div>
          <h1>Welcome to Our Website!</h1>
          <p>Please log in to continue:</p>
          <button onClick={this.props.onLogin}>Login</button>
        </div>
      );
    }
  }
  
  class App extends React.Component {
    handleLogin = () => {
      console.log("User logged in!");
    }
  
    render() {
      return (
        <div>
          <Login onLogin={this.handleLogin} />
        </div>
      );
    }
  }
  
  export default App;