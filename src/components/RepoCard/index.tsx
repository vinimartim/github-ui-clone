import React from 'react';
import { Link } from 'react-router-dom'

import { Container, TopSide, RepoIcon, BotSide, StarIcon, ForkIcon } from './styles';

declare interface Props {
  username: string
  reponame: string
  description?: string
  language?: string
  stars: number
  forks: number
}

const RepoCard: React.FC<Props> = (props) => {
  const language = props.language?.toLowerCase()
  let languageClass = ''

  switch (language) {
    case 'javascript':
    case 'typescript':
    case 'java':
    case 'vue':
    case 'scss':
    case 'html':
      languageClass = language
      break;
    default:
      languageClass = 'other'
      break;
  }

  return (
    <Container>
      <TopSide>
        <header>
          <RepoIcon />
          <Link to={`/${props.username}/${props.reponame}`}>{props.reponame}</Link>
        </header>
        <p>{props.description}</p>
      </TopSide>

      <BotSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{props.language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{props.stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{props.forks}</span>
          </li>
        </ul>
      </BotSide>

    </Container>
  );
}

export default RepoCard;