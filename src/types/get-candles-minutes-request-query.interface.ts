/*
 * market string required 마켓 코드 (ex. KRW-BTC)
 * to string 마지막 캔들 시각 (exclusive). 포맷 : yyyy-MM-dd'T'HH:mm:ss'Z' or yyyy-MM-dd HH:mm:ss. 비워서 요청시 가장 최근 캔들
 * count int32 캔들 개수(최대 200개까지 요청 가능)
 */
import { CandleMinuteType } from './candle-minute-type.interface';
export type GetCandlesMinutesRequestQuery = {
  /** Market Code */
  market: string;
  /** 마지막 캔들시각 포맷  */
  to: string;
  /** candle count*/
  count: number; 
  /** 분단위 값 1, 3, 5, 15, 10, 30, 60, 240  */
  unit:CandleMinuteType;
};
