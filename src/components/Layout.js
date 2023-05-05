import Header from "./Header/Header"
function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <footer>
                <h2>Footer</h2>
            </footer>
        </>
    )
}

export default Layout