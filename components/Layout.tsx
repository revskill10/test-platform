import Header from "./Header";
import Nav from './Nav'
const Main = (props: any) => {
    return (
        <div className="container mx-auto">
            <Header />
            <div className="flex flex-row flex-wrap py-4">
                
                <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
                    <Nav />                      
                </aside>
                <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
                    {props.children}
                </main>
            </div>
            <footer className="mt-auto">
                Footer
            </footer>
        </div>
    )
}

export default Main