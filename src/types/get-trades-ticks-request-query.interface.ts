import { daysAgoType } from './day-ago-type.interface';
export type GetTradesTicksRequestQuery = {
  /** Market Code required */
  market: string;
  /** 마지막 체결 시각. 형식 : [HHmmss 또는 HH:mm:ss]. 비워서 요청시 가장 최근 데이터  */
  to: string;
  /** 체결갯수*/
  count: number; 
  /** 페이지네이션 커서 */
  cursor: string;
  /** 최근 체결 날짜 기준 7일 이내의 이전 데이터 조회 가능. 비워서 요청 시 가장 최근 체결 날짜 반환. (범위: 1 ~ 7))*/
  daysAgo: daysAgoType;
};
