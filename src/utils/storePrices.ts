import { getApiBase } from '../config/api'
import { getCountry } from './siteStats'

/** The prices set in App Store Connect for one country, as the backend
 *  serves them (GET /v1/payments/store-prices/?country=FR). */
export interface StorePrices {
  country: string
  currency: string
  /** Monthly price by plan name: {"Premium": "16.99"} */
  plans: Record<string, string>
  singles: { ai?: string; voice?: string }
}

/**
 * The App Store prices for the visitor's country. The country comes from
 * Vercel's geolocation (api/country.ts), so no outside service sees the
 * visitor. null when either step fails: the page then shows its fallback
 * prices.
 */
export async function fetchStorePrices(): Promise<StorePrices | null> {
  try {
    const country = await getCountry()
    if (!country) return null

    const res = await fetch(`${getApiBase()}/v1/payments/store-prices/?country=${country}`)
    if (!res.ok) return null
    const data = (await res.json()) as StorePrices
    return data.currency ? data : null
  } catch {
    return null
  }
}

/** "8.99" in EUR → "8,99 €" for a French browser, "€8.99" for an English one. */
export function formatPrice(amount: string, currency: string): string {
  try {
    return new Intl.NumberFormat(navigator.language || 'en', { style: 'currency', currency }).format(Number(amount))
  } catch {
    return `${amount} ${currency}`
  }
}

/** "FR" → "France" */
export function countryName(code: string): string {
  try {
    return new Intl.DisplayNames(['en'], { type: 'region' }).of(code) ?? code
  } catch {
    return code
  }
}
