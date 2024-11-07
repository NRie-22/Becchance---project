import styled from 'styled-components';

export const SwitchButtonFirst = styled.a`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const SwitchButtonSecond = styled(SwitchButtonFirst)``;

export const SwitchToggle = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'togglePosition',
})<{ togglePosition: boolean }>`
  transform: ${({ togglePosition }) =>
    togglePosition ? 'translateX(-35px)' : 'translateX(35px)'};
  transition: transform 0.3s ease;
  background-color: ${({ theme }) => theme.colors.orange[9]};
  background-image: linear-gradient(#0000, #0009);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100px;
  height: 41px;
  padding: 6px;
  position: relative;
  cursor: pointer;
`;

export const SwitchOuter = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.orange[0]};
  border: 1px solid ${({ theme }) => theme.colors.orange[6]};
  border-radius: 60px;
  justify-content: center;
  align-items: flex-start;
  width: 120px;
  height: 41px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 0 3px 0 1px;
  box-shadow: inset 2px 10px 10px -5px #7c421278;
`;

export const SwitchLabel = styled.span`
  color: ${({ theme }) => theme.colors.orange[0]};
  text-transform: uppercase;
  padding: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
`;

export const SwitchInner = styled.div`
  background-color: ${({ theme }) => theme.colors.orange[7]};
  outline-offset: 0px;
  text-align: center;
  border: 1px solid #7c4212;
  border-radius: 50px;
  outline: 5px solid #7c421212;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  line-height: 1.3;
  display: flex;
`;

export const SwitchFull = styled.div`
  color: ${({ theme }) => theme.colors.white[0]};
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 200px;
  padding: 5px;
  display: flex;
  inset: 0% 8% 0% auto;
  margin: 5px auto 10px;
`;
