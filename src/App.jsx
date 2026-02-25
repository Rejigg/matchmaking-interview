import { useState } from 'react'
import Nav from './components/Nav'
import SearchView from './components/SearchView'
import PickerView from './components/PickerView'
import BuyerDashboard from './components/BuyerDashboard'
import SellerDashboard from './components/SellerDashboard'

export default function App() {
  const [view, setView] = useState('search')
  const [activeUser, setActiveUser] = useState(null)

  const openBuyer = (buyer) => {
    setActiveUser(buyer)
    setView('buyer')
  }

  const openSeller = (business) => {
    setActiveUser(business)
    setView('seller')
  }

  return (
    <>
      <Nav view={view} activeUser={activeUser} onNavigate={setView} />
      {view === 'search' && <SearchView />}
      {view === 'picker' && (
        <PickerView onSelectBuyer={openBuyer} onSelectSeller={openSeller} />
      )}
      {view === 'buyer' && <BuyerDashboard buyer={activeUser} />}
      {view === 'seller' && <SellerDashboard business={activeUser} />}
    </>
  )
}
