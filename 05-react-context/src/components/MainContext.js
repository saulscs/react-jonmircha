import {useThemeContext} from "../context/ThemeContext";
import {useAuthContext} from "../context/AuthContext";
import { useLanguageContext } from "../context/LanguageContext";

const MainContext = () => {
    const {auth} = useAuthContext();
    const {theme} = useThemeContext();
    const {text} = useLanguageContext();

    const {mainWelcome, mainHello, mainContent } = text;
    return (
        <main className={theme}>
            {auth ? <p>{mainWelcome}</p> : <p>{mainHello}</p>}
            <p>{mainContent}</p>
        </main>
    )
}

export default MainContext;