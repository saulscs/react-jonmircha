import {useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const initialTheme = "light";
const initialLanguage = "es";

const initialAuth = null;

const translations = {
    es: {
        headerTitle: "Mi aplicación SIN Context API",
        headerSubtitle: "Mi cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesión",
        buttonLogout: "Cerrar Sesión",
        mainWelcome: "Bienvenid@ invitad@",
        mainHello: "Hola Usuari@",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pié de página",
    },
    en: {
        headerTitle: "My application without Context API",
        headerSubtitle: "My header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Logout",
        mainWelcome: "Welcome Guest",
        mainHello: "Hello User",
        mainContent: "My main content",
        footerTitle: "My footer",
    },
};

const MyPage = () => {
    const [theme, setTheme] = useState(initialTheme);
    const [lenguage, setLenguage] = useState(initialLanguage);
    const [text, setText] = useState(translations[lenguage]);
    const [auth, setAuth] = useState(initialAuth);

    const handleTheme = (e) => {
        if(e.target.value === "light") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    const handleLanguage = (e) => {
        if(e.target.value === "es") {
            setLenguage("es");
            setText(translations.es);
        } else {
            setLenguage("en");
            setText(translations.en);
        }
    };

    const handleAuth = (e) => {
        if(auth){
            setAuth(null);
        } else {
            setAuth(true);
        }
    };

    return (
        <div className="my-page">
            <Header 
                theme={theme}
                text={text}
                auth={auth}
                handleTheme={handleTheme}
                handleLanguage={handleLanguage}
                handleAuth={handleAuth}
            />
            <Main theme={theme} text={text} auth={auth}/>
            <Footer theme={theme} text={text}/>
        </div>
    )
}

export default MyPage;