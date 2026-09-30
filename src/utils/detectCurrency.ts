export type Currency = 'USD' | 'EUR' | 'GBP'

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

/**
 * The currency of the fallback price table, used only when the App Store's
 * own prices for the visitor's country could not be loaded
 * (src/utils/storePrices.ts): the browser locale's, else USD.
 */
export function fallbackCurrency(): Currency {
    const country = getCountryFromLocale()
    return (country && COUNTRY_TO_CURRENCY[country]) || 'USD'
}
