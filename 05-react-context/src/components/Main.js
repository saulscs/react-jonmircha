const Main = ({theme, text}) => {
    const {mainWelcome, mainHello, mainContent } = text;
    return (
        <main className={theme}>
            <p>{mainWelcome}</p>
            <p>{mainHello}</p>
            <p>{mainContent}</p>
        </main>
    )
}

export default Main;