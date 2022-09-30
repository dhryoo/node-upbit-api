export interface GetMarketAllResponse {
  /** 업비트에서 제공중인 시장정보 */
  market: string;
  /** 거래 대상 암호화폐 한글명 */
  korean_name: string;
  /** 거래 대상 암호화폐 영문명 */
  english_name: string;
  /** 유의종목여부 NONE (해당 사항 없음), CAUTION(투자유의)   */
  market_warning: string;
}
