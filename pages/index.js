import React from 'react'
import Layout from '../components/Layout'

class Index extends React.Component {
  render () {
    return (
      <Layout title={'Home'}>
        <div className="container has-text-centered">
          <p className="title">Title</p>
          <p className="subtitle">Subtitle</p>
        </div>
      </Layout>
    )
  }
}

export default Index
