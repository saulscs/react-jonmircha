const Main = ({theme, text, auth}) => {
    const {mainWelcome, mainHello, mainContent } = text;
    return (
        <main className={theme}>
            {auth ? <p>{mainWelcome}</p> : <p>{mainHello}</p>}
            <p>{mainContent}</p>
        </main>
    )
}

export default Main;