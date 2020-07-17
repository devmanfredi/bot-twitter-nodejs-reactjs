import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);
  border-top: 2px solid var(--twitter);


  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Form = styled.div`
  margin-top: 15px;
  padding: 11px 0 15px;
  text-align: left;

  font-weight: bold;
  font-size: 24px;

  outline: none;
  /* cursor: auto; */

  color: var(--twitter);
  /* border-bottom: 2px solid var(--twitter); */
  border-top: 2px solid var(--twitter);

  /* &:hover {
    background: var(--twitter-dark-hover);
  } */
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;


export const HasgTags = styled.li`
  font-size: 14px;
  margin: 5px;
  display:inline;
  /* float: left; */
  &:hover {
    /* border-color: #1a8acf; */
    opacity: 0.7;
    text-shadow : 0 0 10px #1a8acf;
    text-decoration:underline
  }
`;

export const FormInput = styled.input`
  display: inline;
  border: #1a8acf;
  margin-left: 8px;
  border: 1px solid var(--twitter);
  padding: 2px 9px;
  border-radius: 25px;
  outline: none;
  /* flex-direction: column; */

  /* flex-shrink: 0; */
`;

export const ButtonCreate = styled(Button)`
  @media (min-width: 320px) {
    top: 10px;
    padding: 1px 19px;
    font-size: 15px;
  }
`;
