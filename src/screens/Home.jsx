import OpenLink from '../components/Core/OpenLink.jsx';
import Body from '../components/Home/Body.jsx'
import Footer from '../components/Home/Footer.jsx'

import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.svg";

const Home = () => {
    return (
        <div>
            <OpenLink 
                redirectURL="https://vite.dev"
                logoImage={viteLogo}
            />
            <OpenLink
                redirectURL="https://react.dev"
                logoImage={reactLogo}
            />
            <OpenLink
                redirectURL="https://github.com/dheeyi/desarrollo-frontend-react-2025"
                logoImage={githubLogo}
            />
            <Body/>
            <Footer/>
        </div>
    );
};

export default Home;