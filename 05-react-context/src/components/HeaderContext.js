import {useThemeContext} from "../context/ThemeContext";
import {useAuthContext} from "../context/AuthContext";
import { useLanguageContext } from "../context/LanguageContext";

const HeaderContext = () => {
    const {theme, handleTheme } = useThemeContext();
    const { auth, handleAuth } = useAuthContext();
    const {text, handleLanguage} = useLanguageContext();

    const { headerTitle, headerSubtitle, headerLight, headerDark, buttonLogin, buttonLogout} = text;

    return (
        <header className={theme}>
            <h2>{headerTitle}</h2>
            <h3>{headerSubtitle}</h3>
            <select name="language" onChange={handleLanguage}>
                <option value="es">ES</option>
                <option value="en">EN</option>
            </select>
            <input 
                type="radio"
                name="theme" 
                id="light-context" 
                value="light"
                onClick={handleTheme}
            />
            <label htmlFor="light-context">{headerLight}</label>
            <input 
                type="radio"
                name="theme" 
                id="dark-context"
                value="dark"
                onClick={handleTheme}
            />
            <label htmlFor="dark-context">{headerDark}</label>
            <button onClick={handleAuth}>
                {auth ?  buttonLogout :  buttonLogin}
            </button>
        </header>
    );
};

export default HeaderContext;
