/*
market	마켓명	String candle_date_time_utc	캔들 기준 시각(UTC 기준) 포맷: yyyy-MM-dd'T'HH:mm:ss	String
candle_date_time_kst	캔들 기준 시각(KST 기준) 포맷: yyyy-MM-dd'T'HH:mm:ss	String
opening_price	시가	Double
high_price	고가	Double
low_price	저가	Double
trade_price	종가	Double
timestamp	마지막 틱이 저장된 시각	Long
candle_acc_trade_price	누적 거래 금액	Double
candle_acc_trade_volume	누적 거래량	Double
first_day_of_period	캔들 기간의 가장 첫 날	String
*/
export type GetCandlesWeeksResponse = {
  market: string;
  candle_date_time_utc: string;
  candle_date_time_kst: string;
  opening_price: number;
  low_price: number;
  trade_price: number;
  timestamp: number;
  candle_acc_trade_price: number;
  candle_acc_trade_volume: number;
  first_day_of_period: string;
};
