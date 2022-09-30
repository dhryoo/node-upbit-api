/*
market	마켓 구분 코드	String
trade_date_utc	체결 일자(UTC 기준) 포맷: yyyy-MM-dd	String 
trade_time_utc	체결 시각(UTC 기준) 포맷: HH:mm:ss	String
timestamp	체결 타임스탬프	Long
trade_price	체결 가격	Double
trade_volume	체결량	Double
prev_closing_price	전일 종가(UTC 0시 기준)	Double
change_price	변화량	Double
ask_bid	매도/매수	String
sequential_id	체결 번호(Unique)	Long
*/
export type GetTradesTicksResponse = {
  market: string;
  candle_date_time_utc: string;
  trade_date_utc: string;
  trade_time_utc: string;
  timestamp: number;
  trade_price: number;
  trade_volume: number;
  prev_closing_price: number;
  change_price: number;
  ask_bid: string;
  sequential_id: number;
};
