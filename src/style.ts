import styled from "styled-components";
import logo from "@/assets/logo.svg";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: ${({ theme }) => theme.padding};

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.palette.primary};
  position: relative;
`;

export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
`;

export const Logo = styled.img.attrs({ src: logo })`
  width: 115px;
  aspect-ratio: auto 115 / 28;
  height: 28px;
`;

export const Body = styled.section`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Routes = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.padding};
  flex: 1;
  width: 100%;
  overflow: auto;
  height: 100%;
`;
