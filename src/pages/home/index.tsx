import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { handleInvestiment, handleInvestiments } from "@/store/investiments";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import useWebSocket from "react-use-websocket";
import * as St from "./style";
import Action from "@/components/action";
import { getDetailsQuote } from "@/services/quote";

const Home = () => {
  const { investiments } = useAppSelector((state) => state.investiments);
  const dispatch = useAppDispatch();

  const [socketUrl] = useState("ws://localhost:8080/quotes");
  const [order, setOrder] = useState("up");

  const { lastMessage } = useWebSocket(socketUrl);

  useEffect(() => {
    handleLastMessage();
  }, [lastMessage]);

  useLayoutEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const response = await getDetailsQuote();
    dispatch(
      handleInvestiments(
        response.map((investiment) => ({
          key: investiment.quote,
          logo: investiment.logo,
          longName: investiment.longName,
        }))
      )
    );
  };

  const handleLastMessage = async () => {
    if (lastMessage !== null) {
      const data = JSON.parse(lastMessage.data);
      const key = Object.keys(data).find((key) => key !== "timestamp") || "";
      const investiment = investiments.find((i) => i.key === key);
      if (investiment) {
        const value = data[key];
        dispatch(handleInvestiment({ ...investiment, key, value }));
      }
    }
  };

  const renderInvestiments = useMemo(() => {
    return investiments
      .slice()
      .sort((a, b) => {
        return order === "up" ? b.value - a.value : a.value - b.value;
      })
      .map((investiment) => (
        <Action key={investiment.key} investiment={investiment} />
      ));
  }, [investiments, order]);

  return (
    <St.Container id="home">
      <St.Header>
        <St.Title>Explore o mercado</St.Title>
        <St.Sort>
          <St.Description>Ordenar:</St.Description>
          <St.Buttons>
            <St.Button active={order === "up"} onClick={() => setOrder("up")}>
              Em Alta
            </St.Button>
            <St.Button
              active={order === "down"}
              onClick={() => setOrder("down")}
            >
              Em Baixa
            </St.Button>
          </St.Buttons>
        </St.Sort>
      </St.Header>
      <St.List>{renderInvestiments}</St.List>
    </St.Container>
  );
};

export default Home;
