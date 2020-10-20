import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './styles';

import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'
import RandomCalendar from '../../components/RandomCalendar'

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  )

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>
      
      <Main>
        <LeftSide>
          <ProfileData
            username={'vinimartim'}
            name={'Vinicius Lisboa'}
            avatarUrl={'https://avatars1.githubusercontent.com/u/32494407?v=4'}
            followers={887}
            following={7}
            company={'InfoJr'}
            location={'Rio Claro, Brazil'}
            email={'lisboamvinicius@gmail.com'}
            blog={'vinimartim.github.io'}
          />

        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username={'vinimartim'}
                  reponame={'vendas-gv'}
                  description={'Java sales system'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={8}
                  forks={18}
                />
              ))}
            </div>
          </Repos>
          
          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>
          
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;