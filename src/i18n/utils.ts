import { i18n } from './config'

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Type Guard: 判斷 value 是否為 Locale
 * @param value 語言
 * @returns boolen
 * 使用 as any 處理 includes 對 literal union 的型別限制
 */
export function isLocale(
  value: string
): value is (typeof i18n)['locales'][number] {
  return i18n.locales.includes(value as any)
}
/* eslint-enable @typescript-eslint/no-explicit-any */
