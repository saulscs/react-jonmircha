const Header = ({theme, text, handleTheme, handleLanguage}) => {
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
                id="light" 
                value="light"
                onClick={handleTheme}
            />
            <label htmlFor="light">{headerLight}</label>
            <input 
                type="radio"
                name="theme" 
                id="dark"
                value="dark"
                onClick={handleTheme}
            />
            <label htmlFor="dark">{headerDark}</label>
            <button>{buttonLogin}{buttonLogout}</button>
        </header>
    );
};

export default Header;
