export type Currency = 'USD' | 'EUR' | 'GBP'

const STORAGE_KEY = 'preferred_currency'

// Country code → currency mapping
const COUNTRY_TO_CURRENCY: Record<string, Currency> = {
    // GBP
    GB: 'GBP',
    // EUR — Eurozone
    AT: 'EUR', BE: 'EUR', CY: 'EUR', EE: 'EUR', FI: 'EUR',
    FR: 'EUR', DE: 'EUR', GR: 'EUR', IT: 'EUR', LV: 'EUR',
    LT: 'EUR', LU: 'EUR', MT: 'EUR', NL: 'EUR', PT: 'EUR',
    SK: 'EUR', SI: 'EUR', ES: 'EUR', HR: 'EUR', IE: 'EUR',
    // Non-EU Euro users
    AD: 'EUR', MC: 'EUR', SM: 'EUR', VA: 'EUR', ME: 'EUR', XK: 'EUR',
}

// Extract country from navigator.language (e.g. "en-GB" → "GB")
function getCountryFromLocale(): string | null {
    const lang = navigator.language || (navigator as Navigator & { userLanguage?: string }).userLanguage || 'en-US'
    const parts = lang.split('-')
    if (parts.length === 2 && parts[1].length === 2) {
        return parts[1].toUpperCase()
    }
    return null
}

// Instant detection from browser locale
function detectFromLocale(): Currency | null {
    const country = getCountryFromLocale()
    if (!country) return null
    return COUNTRY_TO_CURRENCY[country] ?? null
}

/**
 * Detects user currency with priority:
 * 1. localStorage (user's previous choice)
 * 2. Browser locale (instant)
 * 3. USD (default)
 *
 * There used to be an IP-geolocation step through a third-party service.
 * It sent every visitor's address to that service for a currency symbol,
 * on a site that promises parents their data stays with us; the locale is
 * right often enough and the visitor can switch with one tap.
 */
export async function detectUserCurrency(): Promise<{
    currency: Currency
    source: 'storage' | 'locale' | 'default'
}> {
    // 1. Persisted choice
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(STORAGE_KEY) as Currency | null
        if (stored && ['USD', 'EUR', 'GBP'].includes(stored)) {
            return { currency: stored, source: 'storage' }
        }
    }

    // 2. Browser locale
    const fromLocale = detectFromLocale()
    if (fromLocale) return { currency: fromLocale, source: 'locale' }

    // 3. Default
    return { currency: 'USD', source: 'default' }
}

export function saveCurrencyPreference(currency: Currency) {
    if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, currency)
    }
}