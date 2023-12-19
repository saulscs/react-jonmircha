import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "es";

const translations = {
    es: {
        headerTitle: "Mi aplicación CON Context API",
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
        headerTitle: "My application with Context API",
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

export const LanguageProvider = ({children}) => {
    const [lenguage, setLenguage] = useState(initialLanguage);
    const [text, setText] = useState(translations[lenguage]);

    const handleLanguage = (e) => {
        if(e.target.value === "es") {
            setLenguage("es");
            setText(translations.es);
        } else {
            setLenguage("en");
            setText(translations.en);
        }
    };

    const data = {text, handleLanguage};

    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
};

export const useLanguageContext = () => useContext(LanguageContext);