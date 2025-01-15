import githubLogo from "../../assets/github.svg";

const Logo = () => {
    return (
        <div><a href="https://github.com/KevinAlePazM/ProyectoReact" target="_blank">
                <img src={githubLogo} className="logo" alt="Vite logo"/>
            </a>
            
        </div>
    );
};

export default Logo;