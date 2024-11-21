import React, { useState } from 'react'
import EventCard from './EventCard'

const CalandarTable = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div class="lg:flex lg:h-full lg:flex-col">
        <div className="schedule-container">
          <div className="time-column">
            <div className="time-slot">08:00</div>
            <div className="time-slot">09:00</div>
            <div className="time-slot">10:00</div>
            <div className="time-slot">11:00</div>
            <div className="time-slot">12:00</div>
            <div className="time-slot">13:00</div>
            <div className="time-slot">14:00</div>
            <div className="time-slot">15:00</div>
          </div>
          <div className="events-column">
            <div onClick={() => setOpen(true)} className="event" style={{ top: '50px', width: "210px", height: '100px' }}>Jai Shree Raam - To be played in 15 min</div>
            <div className="event" style={{ top: '155px', width: "210px" }}>Radha 2023 - To be played</div>
            <div className="event" style={{ top: '218px', width: "110px" }}>B Prank - Checked in</div>
            <div className="event" style={{ top: '304px', width: "210px", height: '80px' }}>Arlene McCoy Track - To be played</div>
          </div>
          <div className="events-column-2">
            <div className="event" style={{ left: '606px', top: '50px', width: "278px", height: '100px' }}>Office Chill Track - To be played</div>
            <div className="event" style={{ left: '606px', top: '158px', width: "145px", height: '57px' }}>Jacob Jones - To be played</div>
            <div className="event" style={{ left: '755px', top: '193px', width: "133px" }}>Kristin Watson - To be played</div>
            <div className="event" style={{ left: '606px', top: '266px', width: "278px", height: '100px' }}>Esther Track - To be played</div>
            <div className="event" style={{ left: '323px', top: '500px', width: "210px" }}>Chloe McKinney Hits - To be played</div>
          </div>
        </div>

      </div>
      {open &&
        <div className='event-model'>
          <EventCard setOpen={setOpen} />
        </div>
      }
    </>
  )
}

export default CalandarTable
