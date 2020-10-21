import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 16px 32px;
  font-size: 14px;

  * {
    margin-right: 16px;
  }

  > span {
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    content: "";
    border-top-style: solid;
    border-top-width: 4px;
    border-right: 4px solid transparent;
    border-bottom: 0 solid transparent;
    border-left: 4px solid transparent;
    color: var(--primary);
    margin-right: 0;
    margin-left: 5px;

    &:hover {
      opacity: .8;
    }
  }
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  cursor: pointer;

  &:hover {
    opacity: .8;
  }
`;

export const SearchForm = styled.form`
  width: 100%;

  input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;

    &:focus {
      width: 318px;
    }

    transition: width .2s ease-out, color .2s ease-out
  }
`;

export const Avatar = styled.img`
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  line-height: 1;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background: #fff;
  flex-shrink: 0;
  margin-right: 0;
  white-space: nowrap;
`;
