import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const List = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  transition: 1s all ease-in-out;
`;

export const Sort = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
`;

export const Button = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 40px;
  border-radius: 24px;
  outline: none;
  border: none;
  background: ${({ active, theme }) =>
    theme.palette[active ? "blueAtoll" : "grey"]};
  color: ${({ active, theme }) => theme.palette[active ? "white" : "casper"]};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.palette.casper};
`;
