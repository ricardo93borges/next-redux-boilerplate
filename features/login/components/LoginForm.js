import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    render(){
        return (
            <div className='columns is-multiline'>                
                <div className='column is-12'>
                    <div className='field'>
                    <label className='label'>E-mail</label>
                    <p className="control has-icons-left has-icons-right">
                        <input 
                            className='input'
                            type='text'
                            placeholder='E-mail'
                            value={this.state.email}
                            onChange={ event => this.setState({email:event.target.value})} />
                        <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                        </span>
                    </p>
                    </div>
                </div>

                <div className='column is-12'>
                    <div className='field'>
                    <label className='label'>Senha</label>
                    <p className="control has-icons-left has-icons-right">
                        <input 
                            className='input'
                            type='password'
                            placeholder='Senha'
                            value={this.state.password}
                            onChange={ event => this.setState({password: event.target.value})} />
                        <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                        </span>
                    </p>
                    </div>
                </div>

                <div className='column is-12'>
                    <a 
                        className="button is-normal is-pulled-right" 
                        onClick={() => this.props.handleLogin(this.state.email, this.state.password)}>
                        Login
                    </a>
                </div>
            </div>
        )

    }
}


LoginForm.propTypes = {
    handleLogin: PropTypes.func
}

export default LoginForm;