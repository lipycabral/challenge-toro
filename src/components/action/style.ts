import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.grey};
  background: ${({ theme }) => theme.palette.white};
`;

export const Header = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.padding};
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 100px;
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled.img`
  height: 20px;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: 12px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.palette.casper};
`;

export const ContainerTitle = styled.div`
  width: 75%;
`;

export const Quote = styled.p`
  width: 25%;
  text-align: right;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.casper};
`;

export const Price = styled.p`
  font-size: 12px;
`;

export const Value = styled.p<{ status: "up" | "down" }>`
  color: ${({ status, theme }) => theme.palette[status]};
  font-size: 18px
`;

export const ValueRow = styled.div`
  display: flex;
  align-items: center;
`;
