import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeName } from '../../styles/themes';

import { Container, GithubLogo, SearchForm } from './styles';

declare interface Props {
  themeName: ThemeName
  setThemeName: (newName: ThemeName) => void
}

const Header: React.FC<Props> = (props) => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleSubmit (event: React.FormEvent) {
    event.preventDefault()

    navigate('/' + search.toLowerCase().trim())
  }

  function toggleTheme() {
    props.setThemeName(props.themeName === 'light' ? 'dark' : 'light')
  }

  return (
    <Container>
      <GithubLogo onClick={toggleTheme}/>
      <SearchForm onSubmit={handleSubmit}>
        <input 
          placeholder="Enter username or Repo..." 
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  )
}

export default Header;