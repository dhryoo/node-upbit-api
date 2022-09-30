/*
market	마켓 코드	String
timestamp	호가 생성 시각	Long
total_ask_size	호가 매도 총 잔량	Double
total_bid_size	호가 매수 총 잔량	Double
orderbook_units	호가	List of Objects
ask_price	매도호가	Double
bid_price	매수호가	Double
ask_size	매도 잔량	Double
bid_size	매수 잔량	Double
*/
import { OrderBookUnit } from "./orderbook-unit-type.interface"
export type GetOrderBookResponse = {
  market: string;
  timestamp: number;
  total_ask_size: string;
  total_bid_size: string;
  orderbook_units: OrderBookUnit[];
};
