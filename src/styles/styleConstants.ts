import { css } from 'styled-components';

export const defaultScrollWrapper = css`
  width: 50%;
  height: 100%;
  overflow-y: scroll;
  ${({ theme }) => theme.mixins.noScrollBar}
`;

export const defaultScrollItemWrapper = css`
  display: flex;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;
  height: calc(100% / 3);
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.background.lightgray};
  }
`;

export const defaultScrollItemTitle = css`
  font-size: 0.9rem;
  font-weight: bold;
`;
