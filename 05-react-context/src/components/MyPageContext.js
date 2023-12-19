import Headercontext from "./HeaderContext";
import MainContext from "./MainContext";
import FooterContext from "./FooterContext";
import { ThemeProvider } from "../context/ThemeContext";
import { AuthProvider } from "../context/AuthContext";
import { LanguageProvider } from "../context/LanguageContext";


const MyPageContext = () => {
    return (
        <div className="my-page">
            <ThemeProvider>
                <AuthProvider>
                    <LanguageProvider>
                        <Headercontext />
                        <MainContext />
                        <FooterContext />
                    </LanguageProvider>
                </AuthProvider>
            </ThemeProvider>
        </div>
    )
}

export default MyPageContext;