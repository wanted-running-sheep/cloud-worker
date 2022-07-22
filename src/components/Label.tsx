import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  children: string;
  description?: string;
}
const Label = ({ children, description }: LabelProps) => {
  return (
    <Wrapper>
      <h3>{children}</h3>
      {description && <p>{description}</p>}
    </Wrapper>
  );
};

export default Label;

const Wrapper = styled.div`
  margin-bottom: 5px;
  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 2px;
  }
  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color.font.gray};
  }
`;
