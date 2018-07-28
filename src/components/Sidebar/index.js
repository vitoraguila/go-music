import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PlaylistActions } from '../../store/ducks/playlists'

import { Container, NewPlayList, Nav } from './styles'
import Loading from '../../components/Loading'
import AddPlayListIcon from '../../assets/images/add_playlist.svg'

class Sidebar extends Component{
  static propTypes = {
    getPlaylistRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })),
      loading: PropTypes.bool
    }).isRequired
  }

  componentDidMount(){
    this.props.getPlaylistRequest()
  }

  render(){
    return(
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
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
              { this.props.playlists.loading && <Loading /> }
            </li>
            { this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}

          </Nav>

        </div>
        <NewPlayList>
          <img src={AddPlayListIcon} alt="Adicionar playlist" />
          Nova playlist
        </NewPlayList>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
})

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)