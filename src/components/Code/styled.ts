import styled from 'styled-components';

export const WrapperMac = styled.div`
  order: 1;
  border-color: ${({ theme }) => theme.colors.green[6]};
  border-width: 3px;
  border-radius: 8px;
  position: relative;
  background-image: ${({ theme }) => theme.colors.gradient[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    order: 2;
  }
`;

export const ShadowFirst = styled.div`
  width: 100%;
  height: 1px;
  background-image: ${({ theme }) => theme.colors.gradient[0]};
`;

export const ShadowSecond = styled.div`
  width: 100%;
  height: 1px;
  background-image: ${({ theme }) => theme.colors.gradient[1]};
`;

export const WrapperForCode = styled.div`
  overflow: hidden;
  border-style: solid;
  border-top-width: 2px;
  border-color: ${({ theme }) => theme.colors.green[9]};
  padding: 16px;
  font-size: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 12px;
  }
`;

export const TextPink = styled.span`
  color: ${({ theme }) => theme.colors.pink[0]};
`;

export const TextWhite = styled.span`
  color: ${({ theme }) => theme.colors.white[0]};
`;

export const TextGray = styled.span`
  color: ${({ theme }) => theme.colors.gray[0]};
`;

export const TextOrange = styled.span`
  color: ${({ theme }) => theme.colors.orange[4]};
`;

export const TextAmber = styled.span`
  color: ${({ theme }) => theme.colors.yellow[0]};
`;

export const TextCyan = styled.span`
  color: ${({ theme }) => theme.colors.blue[11]};
`;

export const TextGreen = styled.span`
  color: ${({ theme }) => theme.colors.green[5]};
`;
