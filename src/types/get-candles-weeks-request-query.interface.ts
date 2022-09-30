/*
 * market string required 마켓 코드 (ex. KRW-BTC)
 * to string 마지막 캔들 시각 (exclusive). 포맷 : yyyy-MM-dd'T'HH:mm:ss'Z' or yyyy-MM-dd HH:mm:ss. 비워서 요청시 가장 최근 캔들
 * count int32 캔들 개수(최대 200개까지 요청 가능)
 * convertingPriceUnit string 종가 환산 화폐 단위 (생략 가능, KRW로 명시할 시 원화 환산 가격을 반환.)
 */
export type GetCandlesWeeksRequestQuery = {
  /** Market Code */
  market: string;
  /** 마지막 캔들시각 포맷  */
  to: string;
  /** candle count*/
  count: number; 
};
