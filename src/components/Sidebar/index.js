import React from 'react'

import { Container, NewPlayList, Nav } from './styles'
import AddPlayListIcon from '../../assets/images/add_playlist.svg'

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Radio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="">Seu Daily Mix</a>
        </li>
        <li>
          <a href="">Tocados recentemente</a>
        </li>
        <li>
          <a href="">Musicas</a>
        </li>
        <li>
          <a href="">Albuns</a>
        </li>
        <li>
          <a href="">Artistas</a>
        </li>
        <li>
          <a href="">Estações</a>
        </li>
        <li>
          <a href="">Músicas</a>
        </li>
        <li>
          <a href="">Arquivos locais</a>
        </li>
        <li>
          <a href="">Videos</a>
        </li>
        <li>
          <a href="">Podcasts</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="">Melhores do rock</a>
        </li>
      </Nav>

    </div>
    <NewPlayList>
      <img src={AddPlayListIcon} alt="Adicionar playlist" />
      Nova playlist
    </NewPlayList>
  </Container>
)

export default Sidebar