import Nav from "../layout/Nav";
import Hero from "../layout/components/Hero";
import Collection from "../layout/components/Collection";
import Beautify from "../layout/components/Beautify";
import Range from "../layout/components/Range";
import Works from "../layout/components/Works";
import Mail from "../layout/components/Mail";
import Footer from "../layout/Footer";

const Home = () => {

    return (
        <>
        <Nav />
        <Hero />
        <Collection />
        <Beautify />
        <Range />
        <Works />
        <Mail />
        <Footer />
        </>
    );
    };

export default Home;