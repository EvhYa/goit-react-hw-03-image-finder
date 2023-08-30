const { styled } = require('styled-components');

export const Gallery = styled.ul`
  display: grid;
  /* max-width: calc(100vw - 48px); */
  max-width: 1440px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 16px;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;
