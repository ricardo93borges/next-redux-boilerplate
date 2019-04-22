import React from 'react'
//import { connect } from 'react-redux'
//import Link from 'next/link'
import Layout from '../components/Layout'
import Login from '../features/login/containers/Login'

class Index extends React.Component {
  render () {
    return (
      <Layout title={'Login'}>
        <Login />
      </Layout>
    )
  }
}

export default Index
