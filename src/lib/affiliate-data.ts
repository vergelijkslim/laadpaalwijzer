import { registerLinks, type AffiliateLink } from './affiliates';

// Laadpaal affiliate links
// Media ID for laadpaalwijzer Daisycon = 420597 (pending activation)
const links: AffiliateLink[] = [
  // ── Offerte / lead-gen ──────────────────────────────────────────────────────
  {
    id: 'laadpaal-offerte',
    network: 'direct',
    merchant: 'Offerteadviseur',
    url: 'https://www.offerteadviseur.nl/laadpaal/',
    niche: 'laadpaal',
    label: 'Gratis laadpaal offerte aanvragen',
    commissionType: 'cpa',
    commissionValue: '€20-€60 per lead',
  },
  {
    id: 'eneco-laadpaal',
    network: 'direct',
    merchant: 'Eneco',
    url: 'https://www.eneco.nl/energieproducten/elektrisch-rijden/',
    niche: 'laadpaal',
    label: 'Laadpaal via Eneco',
    commissionType: 'cpa',
    commissionValue: '€30-€80 per lead (na TradeTracker registratie)',
  },
  {
    id: 'vattenfall-laadpaal',
    network: 'direct',
    merchant: 'Vattenfall',
    url: 'https://www.vattenfall.nl/laadpaal/laadpaal-thuis/',
    niche: 'laadpaal',
    label: 'Laadpaal via Vattenfall',
    commissionType: 'cpa',
    commissionValue: '€40-€96 per lead (via Daisycon)',
  },
  {
    id: 'wallbox-installateur',
    network: 'direct',
    merchant: 'Wallbox',
    url: 'https://www.wallbox.com/nl_NL/',
    niche: 'laadpaal',
    label: 'Wallbox laadpaal bekijken',
    commissionType: 'cpa',
    commissionValue: 'Niet-direct — verwijzing via installateur',
  },
  {
    id: 'subsidie-isde',
    network: 'direct',
    merchant: 'RVO.nl',
    url: 'https://www.rvo.nl/subsidies-financiering/isde',
    niche: 'laadpaal',
    label: 'ISDE subsidie aanvragen',
    commissionType: 'cpa',
    commissionValue: 'geen commissie (informatief)',
  },
  // ── Amazon PartnerNet (tag: vergelijk05-21) ─────────────────────────────────
  // Note: use /dp/ASIN URLs so links go to specific product pages.
  // Tag is appended dynamically by buildTrackingUrl().
  {
    id: 'amazon-type2-laadkabel',
    network: 'amazon',
    merchant: 'Amazon.nl',
    url: 'https://www.amazon.nl/dp/B09BJPLB8M', // Ratio Type 2 laadkabel 7,5m 32A
    niche: 'laadpaal',
    label: 'Type 2 laadkabel 32A bij Amazon',
    commissionType: 'cps',
    commissionValue: '3-10% per verkoop',
  },
  {
    id: 'amazon-rfid-laadpas',
    network: 'amazon',
    merchant: 'Amazon.nl',
    url: 'https://www.amazon.nl/dp/B09N8ZQVGK', // RFID laadpas / keycard
    niche: 'laadpaal',
    label: 'RFID laadpas bij Amazon',
    commissionType: 'cps',
    commissionValue: '3-10% per verkoop',
  },
  {
    id: 'amazon-energie-monitor',
    network: 'amazon',
    merchant: 'Amazon.nl',
    url: 'https://www.amazon.nl/dp/B0BDF5DX3N', // Shelly Pro 3EM energie monitor
    niche: 'laadpaal',
    label: 'Shelly Pro 3EM energie monitor bij Amazon',
    commissionType: 'cps',
    commissionValue: '3-10% per verkoop',
  },
];

registerLinks(links);

export default links;
