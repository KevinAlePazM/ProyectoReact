import Logo from '../components/Home/Logo.jsx'
import Body from '../components/Home/Body.jsx'
import Footer from '../components/Home/Footer.jsx'
import GitHub from '../components/Home/GitHub.jsx'

const Home = () => {
    return (
        <div>
            <Logo/>
            <GitHub/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default Home;