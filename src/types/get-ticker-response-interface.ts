/*
market	종목 구분 코드	String
trade_date	최근 거래 일자(UTC) 포맷: yyyyMMdd	String
trade_time	최근 거래 시각(UTC) 포맷: HHmmss	String
trade_date_kst	최근 거래 일자(KST) 포맷: yyyyMMdd	String
trade_time_kst	최근 거래 시각(KST) 포맷: HHmmss	String
trade_timestamp	최근 거래 일시(UTC) 포맷: Unix Timestamp	Long
opening_price	시가	Double
high_price	고가	Double
low_price	저가	Double
trade_price	종가(현재가)	Double
prev_closing_price	전일 종가(UTC 0시 기준)	Double
change	EVEN : 보합 RISE : 상승 FALL : 하락	String
change_price	변화액의 절대값	Double
change_rate	변화율의 절대값	Double
signed_change_price	부호가 있는 변화액	Double
signed_change_rate	부호가 있는 변화율	Double
trade_volume	가장 최근 거래량	Double
acc_trade_price	누적 거래대금(UTC 0시 기준)	Double
acc_trade_price_24h	24시간 누적 거래대금	Double
acc_trade_volume	누적 거래량(UTC 0시 기준)	Double
acc_trade_volume_24h	24시간 누적 거래량	Double
highest_52_week_price	52주 신고가	Double
highest_52_week_date	52주 신고가 달성일 포맷: yyyy-MM-dd	String
lowest_52_week_price	52주 신저가	Double
lowest_52_week_date	52주 신저가 달성일 포맷: yyyy-MM-dd	String
timestamp	타임스탬프	Long
*/
export type GetTickerResponse = {
  market: string;
  trade_date: string;
  trade_time: string;
  trade_date_kst: string;
  trade_time_kst: string;
  trade_timestamp: number;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  prev_closing_price: number;
  change: string;
  change_price: number;
  change_rate: number;
  signed_change_price: number;
  signed_change_rate: number;
  trade_volume: number;
  acc_trade_price:number;
  acc_trade_price_24h:number;
  acc_trade_volume:number;
  acc_trade_volume_24h:number;
  highest_52_week_price:number;
  highest_52_week_date:string;
  lowest_52_week_price:number;
  lowest_52_week_date:string;
  timestamp: number;
};
