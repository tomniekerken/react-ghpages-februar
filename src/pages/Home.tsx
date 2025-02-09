import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Take a look at our available jobs.</p>
      <Link to="/jobs">Our Jobs</Link>
    </>
  );
};

export default Home;
