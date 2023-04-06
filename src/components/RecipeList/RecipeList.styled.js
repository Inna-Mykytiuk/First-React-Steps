import styled from 'styled-components';

//заміняємо ul на List(по суті ми змінюємо тег на клас)
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

export const ListItem = styled.li`
  width: 320px;
  /* flex-grow: 1; */
`;
