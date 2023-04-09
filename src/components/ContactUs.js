import { useEffect, useState } from "react";

const ContactUs = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Inside useEffect Contact Us");
    setCount(1);
  }, []);

  console.log("Render Contact Us");
  console.log(count);

  return (
    <div>
      {console.log("Component is Mounted", count)}
      <h1>Contact Us</h1>
      {count}
    </div>
  );
};

export default ContactUs;
