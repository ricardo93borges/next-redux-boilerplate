import React from 'react'
import { connect } from 'react-redux'
import Router from 'next/router';
import { storeUser } from "../actions/actions"
import LoginForm from '../components/LoginForm';

class Login extends React.Component {
  /* static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  } */

  handleLogin = (email, password) => {
    this.props.storeUser(email, password)
    Router.push('/')
  }

  render () {
    return (
      <div className="container">
        <div className='columns is-centered'>
          <div className='column is-6'>
            <div className='box'>
              
              <LoginForm handleLogin={ this.handleLogin } />

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    storeUser: (email, password) => {
        dispatch(storeUser({email, password}))
    },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
