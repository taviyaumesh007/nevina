import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h2>Calendar</h2>
        <button className="sync-btn">Events synced successfully</button>
      </div>
      <div className="google-calendar-switch">
        <label>
          <input type="checkbox" />
          Google Calendar
        </label>
      </div>
    </header>
  )
}

export default Header
