export default function Nav({ view, activeUser, onNavigate }) {
  if (view === 'picker') return null

  const isUserView = view === 'buyer' || view === 'seller'
  const userName = activeUser?.name || activeUser?.owner_name

  return (
    <nav className="nav">
      <div className="nav-brand">BizMatch</div>
      {!isUserView && (
        <a className="nav-admin" onClick={() => onNavigate('picker')}>
          Test Accounts
        </a>
      )}
      {isUserView && (
        <div className="nav-user">
          <span>
            Signed in as <span className="nav-user-name">{userName}</span>
          </span>
          <a className="nav-switch" onClick={() => onNavigate('picker')}>
            Switch account
          </a>
        </div>
      )}
    </nav>
  )
}
