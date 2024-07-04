import { memo, useCallback, useEffect, useMemo, useState } from "react";
import * as St from "./style";
import { AxisOptions, Chart } from "react-charts";
import { numberToCurrency } from "@/utils/format";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { useTheme } from "styled-components";

interface IProps {
  investiment: {
    key: string;
    value: number;
    longName: string;
    logo: string;
    historic: number[];
  };
}

interface Historic {
  value: number;
  index: number;
}

const Action = ({
  investiment: { key, value, historic, logo, longName },
}: IProps) => {
  const theme = useTheme();
  const [status, setStatus] = useState<"up" | "down">("up");

  const checkStatus = useCallback(() => {
    if (historic.length < 2) {
      return setStatus("up");
    }
    const len = historic.length;
    const last = historic[len - 1];
    const secondLast = historic[len - 2];

    if (secondLast < last) {
      return setStatus("up");
    } else if (secondLast > last) {
      return setStatus("down");
    } else {
      return setStatus("up");
    }
  }, [historic]);

  useEffect(() => {
    checkStatus();
  }, [historic, checkStatus]);

  const primaryAxis = useMemo<AxisOptions<Historic>>(
    () => ({
      getValue: (datum) => datum.index,
      showDatumElements: false,
      showGrid: false,
      show: false,
    }),
    []
  );

  const secondaryAxes = useMemo<AxisOptions<Historic>[]>(
    () => [
      {
        getValue: (datum) => datum.value,
        stacked: true,
        elementType: "area",
        showDatumElements: false,
        showGrid: false,
        show: false,
      },
    ],
    []
  );

  return (
    <St.Container key={key}>
      <St.Header>
        <St.Row>
          <St.ContainerTitle>
            <St.Logo src={`http://localhost:8080/assets/${logo}`} />
            <St.Title>{longName}</St.Title>
          </St.ContainerTitle>
          <St.Quote>{key}</St.Quote>
        </St.Row>
        <St.Price>PREÇO DO ATIVO</St.Price>
        <St.ValueRow>
          <St.Value status={status}>{numberToCurrency(value)}</St.Value>
          {status === "up" ? (
            <BsArrowUpShort color={theme.palette.up} />
          ) : (
            <BsArrowDownShort color={theme.palette.down} />
          )}
        </St.ValueRow>
      </St.Header>
      <St.ChartContainer>
        <Chart
          itemType="area"
          options={{
            tooltip: false,
            interactionMode: "primary",
            data: [{ data: historic.map((h, index) => ({ value: h, index })) }],
            primaryAxis,
            secondaryAxes,
          }}
        />
      </St.ChartContainer>
    </St.Container>
  );
};

export default memo(Action);
