import React from 'react'

import { Container, Search, User } from './styles'

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://www.shareicon.net/data/2016/07/26/802011_man_512x512.png" alt="avatar" />
      Vitor Hugo
    </User>
  </Container>
)

export default Header