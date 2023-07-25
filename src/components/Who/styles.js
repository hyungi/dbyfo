import styled from 'styled-components';

export const StudioWrapper = styled.div``;

export const Content = styled.h3`
  font-weight: 700;
  font-size: 12px;
  color: #333;
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.ul`
  font-size: 12px;
  line-height: 1.5;
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  min-width: 300px;
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const NameAndCareer = styled.li`
  border-top: 2px solid #333;
  font-weight: 600;
  font-size: 14px;
  line-height: 3;
`;