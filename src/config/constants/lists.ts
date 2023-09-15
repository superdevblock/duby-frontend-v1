const OBRIDGE_EXTENDED = 'https://tokens.obridge.finance/obridge-extended.json'
const COINGECKO = 'https://tokens.obridge.finance/coingecko.json'
const CMC = 'https://tokens.obridge.finance/cmc.json'

// List of official tokens list
export const OFFICIAL_LISTS = [OBRIDGE_EXTENDED]

export const UNSUPPORTED_LIST_URLS: string[] = []
export const WARNING_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  OBRIDGE_EXTENDED,
  CMC,
  COINGECKO,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
  ...WARNING_LIST_URLS,
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
