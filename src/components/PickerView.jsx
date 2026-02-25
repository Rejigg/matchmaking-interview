import { buyers, businesses } from '../data'
import { fmt } from '../utils'

export default function PickerView({ onSelectBuyer, onSelectSeller }) {
  return (
    <div className="page">
      <div className="picker-header">
        <h1>Test Accounts</h1>
        <p>View the product as a specific buyer or seller.</p>
      </div>

      <div className="picker-section-label">Buyers</div>
      <div className="picker-grid">
        {buyers.map((buyer) => {
          const tags = (buyer.target_industries || []).slice(0, 3).join(', ')
          const rev =
            buyer.target_revenue_min != null
              ? `$${fmt(buyer.target_revenue_min)}\u2013$${fmt(buyer.target_revenue_max)}`
              : ''
          return (
            <div
              key={buyer.id}
              className="picker-card"
              onClick={() => onSelectBuyer(buyer)}
            >
              <div className="picker-card-name">{buyer.name}</div>
              <div className="picker-card-detail">{tags}</div>
              <div className="picker-card-detail">{rev}</div>
            </div>
          )
        })}
      </div>

      <div className="picker-section-label">Sellers</div>
      <div className="picker-grid">
        {businesses.map((biz) => (
          <div
            key={biz.id}
            className="picker-card"
            onClick={() => onSelectSeller(biz)}
          >
            <div className="picker-card-name">{biz.owner_name}</div>
            <div className="picker-card-detail">{biz.name}</div>
            <div className="picker-card-detail">
              {biz.state} &middot; ${fmt(biz.annual_revenue)} revenue
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
