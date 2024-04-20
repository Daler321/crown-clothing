import styled from 'styled-components';

export const AuthenticationConatainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: auto;
    margin: 30px;
  }
`;
