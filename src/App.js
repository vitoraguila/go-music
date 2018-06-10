import React, { Component, Fragment } from 'react'
import './styles/global'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Header from './components/Header'

import { Wrapper, Container, Content } from './styles/components'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    )
  }
}

export default App
