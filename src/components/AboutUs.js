import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctional from "./ProfileFunctional";
import { Component } from "react";

// const AboutUs = () => {
//   return (
//     <>
//       <h1>About Us</h1>
//       <ProfileClass name={"Ninad"} xyz="xyz" />
//       {/* <Outlet /> */}
//     </>
//   );
// };

class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About Us</h1>
        {/* <ProfileClass abc="abc" /> */}
        <ProfileFunctional abc="abc" />
      </div>
    );
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }
}

export default AboutUs;
