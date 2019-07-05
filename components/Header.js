import React from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Router from 'next/router';
import { deleteUser } from "../features/login/actions/actions"

class Header extends React.Component  {

    handleLogout = () => {
        this.props.deleteUser()
        Router.push('/login')
    }

    toggleMenu = () => {
        this.setState({isActive: !this.state.isActive})
    }

    componentDidMount(){
        if(!this.props.user.email) Router.push('/login')
    }

    render(){
        const {isActive} = this.state

        return (
            <div className="hero-head">
                <Head>
                    <title>Boilerplate - {this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                    <link rel="stylesheet" href="/static/main.css" />
                </Head>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item">
                                <img src="https://bulma.io/images/bulma-type.png" alt="Logo"/>
                            </a>
                            <span className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                        <div className="navbar-end">
                            <a className="navbar-item is-active">Home</a>
                                { this.props.user.email && 
                                    <div className="navbar-item has-dropdown is-hoverable">
                                        <a className="navbar-item">{this.props.user.email}</a>
                                        <div className="navbar-dropdown">
                                            <a className="navbar-item" onClick={() => this.handleLogout()}>
                                                Sair
                                            </a>
                                        </div>
                                    </div>
                                }                                
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


Header.propTypes = {
    title: PropTypes.string
}

Header.defaultProps = {
    title: ''
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    deleteUser: () => dispatch(deleteUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
