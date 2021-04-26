import Header from "./header";

import '../styles/layout.css'

export default function Layout({ children }){

    return(
        <div className='layoutContainer'>
            <Header />

            <main className='layoutMain'>
                {children}
            </main>
        </div>
    )
}