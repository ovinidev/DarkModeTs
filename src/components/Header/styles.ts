import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 60px;
    background: ${theme.colors.primary};
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 3rem;
    justify-content: space-between;
  `}
`;
