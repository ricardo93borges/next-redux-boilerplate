import React from 'react';
import Header from './Header'
import Footer from './Footer'

const Layout = props => {
    return (
        <section className="hero is-fullheight">

            <Header title={props.title} />

            <div className="hero-body">
                { props.children }
            </div>

            <Footer/>
            
        </section>
    )
}



export default Layout;