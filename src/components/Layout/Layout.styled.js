import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  min-height: 100vh;
  gap: 24px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeaderTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin: 0;
`;

export const Footer = styled.footer`
  margin: 0;
`;

export const FooterTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #000;
  text-align: center;
  align-items: flex-end;
  margin: 0;
`;
