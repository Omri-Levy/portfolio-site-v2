import styled from 'styled-components';

const StyledSpan = styled(`span`)`
  background-color: ${({ theme }) => theme.palette.text.primary};
  opacity: 0.1;
  width: 35%;
  margin-top: 10px;
  height: 0.5px;
  border-radius: 100vh;
  margin-inline: auto;
`;

export default StyledSpan;
