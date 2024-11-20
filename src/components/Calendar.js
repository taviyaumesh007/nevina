import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Scheduler from 'devextreme-react/scheduler';
import CustomStore from 'devextreme/data/custom_store';
import CalandarTable from './CalandarTable';
import { Button, ButtonGroup } from '@mui/material';
import MusicPlaylist from './MusicPlaylist ';

const Calendar = () => {
  const [currentDates, setCurrentDates] = useState(new Date());
  const [activeView, setActiveView] = useState("Day");
  const currentDate = new Date(2017, 4, 25);
  const views = ['day', 'workWeek', 'month'];
  const activities = [
    ['Listen', 'Learn', 'Work-Out', 'Study'],
    ['Practice', 'Other', 'Work-Out', 'Study'],
    ['Listen', 'Learn', 'Work-Out', 'Study'],
    ['Practice', 'Other', 'Work-Out',],
  ];



  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handlePrev = () => {
    const prevDate = new Date(currentDate);
    prevDate.setDate(currentDate.getDate() - 1);
    setCurrentDates(prevDate);
  };

  const handleNext = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);
    setCurrentDates(nextDate);
  };
  const handleViewChange = (view) => {
    setActiveView(view); // Update the active view state
  };
  return (
    <div>

      <div className="calendar-container">
        <div className="calendar" style={{ display: "flex" }} >
          <div className="calendar-header">

            <div style={{ width: '100%' }}>
              <div className="calendar-header">
                <div style={{ display: "flex", gap: "35px" }}>
                  <div className="nav-buttons">
                    <button onClick={handlePrev}>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width='14' height='14' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                      </svg>

                    </button>
                    <span>{formatDate(currentDate)}</span>
                    <button onClick={handleNext}><svg xmlns="http://www.w3.org/2000/svg" width='14' height='14' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg></button>
                  </div>
                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button type="button"
                      className={`px-4 py-2 text-sm font-medium  border rounded  focus:z-10 focus:ring-2 ${activeView === "Day" ? "day-button active " : ""
                        }`}
                      onClick={() => handleViewChange("Day")}
                    >
                      Day
                    </button>
                    <button type="button"
                      className={`px-4 py-2 text-sm font-medium  border rounded  focus:z-10 focus:ring-2 ${activeView === "Week" ? "day-button active " : ""
                        }`}
                      onClick={() => handleViewChange("Week")}
                    >
                      Week
                    </button>
                    <button type="button"
                      className={`px-4 py-2 text-sm font-medium  border rounded  focus:z-10 focus:ring-2 ${activeView === "Month" ? "day-button active " : ""
                        }`}
                      onClick={() => handleViewChange("Month")}
                    >
                      Month
                    </button>
                  </div>
                </div>
                <div className="schedule-session">
                  <button>+ Schedule session</button>
                </div>
              </div>
              <CalandarTable />

            </div>

          </div>
          <div className="calendar-body">
            <div className="calendar-sidebar">
              <div className="schedule">

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar sx={{ margin: "0" }} />
                </LocalizationProvider>
                <h3>Schedule</h3>
                <div className="activity-grid">
                  {activities.map((row, rowIndex) => (
                    <div key={rowIndex} className="activity-row">
                      {row.map((activity, index) => (
                        <div key={index} className={`activity-button ${activity.toLowerCase().replace(/ /g, '-')}`}>
                          {activity}
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="pagination">
                    <button className="pagination-button">&lt;</button>
                    <button className="pagination-button">&gt;</button>
                  </div>
                </div>
              </div>
              <div className="music-playlist">
                <MusicPlaylist />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
