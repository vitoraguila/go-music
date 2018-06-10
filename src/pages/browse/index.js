import React from 'react'
import { Container, Title, List, Playlist } from './styles'


const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/3/35/FooFightersGreatestHits.jpg" 
          alt="playlist" 
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto voce programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/3/35/FooFightersGreatestHits.jpg" 
          alt="playlist" 
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto voce programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/3/35/FooFightersGreatestHits.jpg" 
          alt="playlist" 
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto voce programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/3/35/FooFightersGreatestHits.jpg" 
          alt="playlist" 
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto voce programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>
    </List>
  </Container>
)

export default Browse