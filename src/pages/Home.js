import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
    return(

        <div>
            <Navigation />
            <Logo />
            <Countries />
            <h1>Acceuil</h1>
        </div>
    );
}

export default Home ;