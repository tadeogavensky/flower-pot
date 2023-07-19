import { Element } from "react-scroll";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}

export default App;
