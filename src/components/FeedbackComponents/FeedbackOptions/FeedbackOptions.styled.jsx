import styled from 'styled-components';

export const FeedBackBtn = styled.button`
  width: 120px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  background-color: ${props => props.value === 'good' && 'green'};
  background-color: ${props => props.value === 'neutral' && 'grey'};
  background-color: ${props => props.value === 'bad' && 'red'};
  border-radius: 10px;
  cursor: pointer;
`;
export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;
