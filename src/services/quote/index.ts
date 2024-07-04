import api from "..";

export interface IResponseGetDetailQuote {
  data: IQuote[];
}

export interface IQuote {
  quote: string;
  longName: string;
  logo: string;
}

export const getDetailsQuote = async () => {
  const response = await api.get<IResponseGetDetailQuote>(`/quotes_details`);
  return response.data.data;
};
