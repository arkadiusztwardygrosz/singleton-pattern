import styled from 'styled-components';

export const List = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px 0px;
    margin: 0px;
    min-width: 100%;
  }
  li {
    width: fit-content;
    color: #4caf50;
    margin: 0;
    width: 100%;
    list-style: none;
    user-select: none;
    padding: 10px 0px;
    border: 1px solid #4caf50;
    &:hover {
      background-color: #4caf50;
      color: white;
      cursor: pointer;
    }
  }

  span {
    padding: 10px 14px;
    margin: 0;
    &:first-child {
      background: #4caf50;
      color: white;
    }
  }
`;
