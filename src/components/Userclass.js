import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Sahil",
        age: 25,
        email: "sahil@gmail.com",
      },
    };
    // console.log(this.props.Data, "construct");
  }
  async componentDidMount() {
    // console.log(this.props.Data, "componentDidMount");
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    // console.log("users", users[0]);
    // this.setState({ user: users[0] });

    // this.id = setInterval(() => {
    //   console.log("didMount");
    // }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(this.props.Data, "componentDidUpdate");
    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount");
    // cleanup code here, e.g. cancelling timers or cleaning up subscriptions
    // clearInterval(this.id);
  }
  render() {
    // console.log(this.props.Data, "render");
    const { name } = this.state.user;

    return (
      <div>
        <h1> {name} </h1>
        <h1> {this.props.Data} class</h1>
      </div>
    );
  }
}

export default UserClass;
