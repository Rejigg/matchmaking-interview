/**
 * Matching System — Current Implementation
 *
 * Computes a single score per buyer-business pair from two signals:
 *   1. Keyword overlap (Jaccard similarity on industry tags)
 *   2. Revenue fit (is the business in the buyer's target range?)
 *
 * Both signals are summed into one number. Buyers see businesses
 * sorted by this score. That's the whole system.
 */

export function computeMatchScore(buyer, business) {
  let score = 0
  const reasons = []

  const buyerTags = new Set(buyer.target_industries || [])
  const bizTags = new Set(business.industry_tags || [])
  const overlap = [...buyerTags].filter((t) => bizTags.has(t))
  const union = new Set([...buyerTags, ...bizTags])

  if (union.size > 0) {
    const tagScore = overlap.length / union.size
    score += tagScore
    if (overlap.length > 0) {
      reasons.push(`Industry match: ${overlap.join(', ')}`)
    }
  }

  if (buyer.target_revenue_min != null && buyer.target_revenue_max != null) {
    if (
      business.annual_revenue >= buyer.target_revenue_min &&
      business.annual_revenue <= buyer.target_revenue_max
    ) {
      score += 0.5
      reasons.push('Revenue in target range')
    }
  } else {
    score += 0.25
    reasons.push('No revenue preference set')
  }

  if (reasons.length === 0) {
    reasons.push('No strong match signals')
  }

  return {
    buyer_id: buyer.id,
    business_id: business.id,
    business_name: business.name,
    score: Math.round(score * 1000) / 1000,
    reasons,
  }
}

export function rankBusinessesForBuyer(buyer, businesses) {
  return businesses
    .map((b) => computeMatchScore(buyer, b))
    .sort((a, b) => b.score - a.score)
}
