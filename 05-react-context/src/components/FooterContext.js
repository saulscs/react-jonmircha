import {useThemeContext} from "../context/ThemeContext";
import { useLanguageContext } from "../context/LanguageContext";

const FooterContext = () => {
    const {theme} = useThemeContext();
    const {text} = useLanguageContext();
    return (
        <footer className={theme}>
            <h4>{text.footerTitle}</h4>
        </footer>
    )
}

export default FooterContext;