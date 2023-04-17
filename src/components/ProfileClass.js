import React from "react";

// const ProfileClass = () => {
//   return (
//     <div>
//       <h1>Profile</h1>
//     </div>
//   );
// };

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("Child Constructor");

    //useState

    this.state = {
      count: 0,
      count2: 0,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
  }

  render() {
    console.log("Child Render");

    return (
      <div>
        <h1>Profile</h1>
        <h2>Name : {this.props.name}</h2>
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            console.log("setState Changed of Count");
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h3>Name : {this.state?.userInfo?.name}</h3>
        <h3>Location : {this.state?.userInfo?.location}</h3>
      </div>
    );
  }

  //Best Place to Make API Calls
  async componentDidMount() {
    try {
      console.log("Child componentDidMount 1");

      const data = await fetch("https://api.github.com/users/ninadraj221");

      const json = await data.json();

      console.log(json);

      this.setState({
        // userInfo: {
        //   name: json?.name,
        //   location: json?.location,
        // },
        userInfo: json,
        count: 1,
      });

      console.log("Child componentDidMount 2");

      // this.timer = setInterval(() => {
      //   console.log("Hello Ninad");
      // }, 1000);
    } catch (error) {
      console.error(error);
    }
  }

  //Adding the Concept of Dependency Array to componentDidUpdate i.e adding prevProps and prevState
  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate",
      prevProps,
      prevState,
      this.state.count,
      prevState.count
    );

    if (this.state.count !== prevState.count) {
      console.log("State of count changed !");

      this.setState({
        // userInfo: {
        //   name: json?.name,
        //   location: json?.location,
        // },
        count: 1,
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);

    console.log("componentWillUnmount");
  }
}

export default ProfileClass;
