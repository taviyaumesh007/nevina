import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, InputLabel, MenuItem, Select } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Calendar from './components/Calendar';
import Footer from './components/Footer';
import Musicplayer from './components/Musicplayer';

function App() {

  const [active, setActive] = useState('All');

  const filters = ['All', 'Listening', 'Learning', 'Rehearsal', 'Perform'];
  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <div>
            <header className="main-header">
              <div className="left-section">
                <a href="/library" className="back-button">← Back to Library</a>
              </div>
              <div className="center-section">
                <input type="text" className="search-bar" placeholder="Search..." />
              </div>
              <div className="right-section">
                <a href="/premium" className="premium">Premium</a>
                <a href="/app" className="get-app">Get app</a>
                <a href="/notifications" className="notifications">
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.58644 20C8.68644 20 9.58644 19.1 9.58644 18H5.58644C5.58644 19.1 6.47644 20 7.58644 20ZM13.5864 14V9C13.5864 5.93 11.9464 3.36 9.08644 2.68V2C9.08644 1.17 8.41644 0.5 7.58644 0.5C6.75644 0.5 6.08644 1.17 6.08644 2V2.68C3.21644 3.36 1.58644 5.92 1.58644 9V14L0.296477 15.29C-0.333523 15.92 0.106477 17 0.996477 17H14.1664C15.0564 17 15.5064 15.92 14.8764 15.29L13.5864 14Z" fill="#312522" />
                  </svg>

                </a>
                <a href="/profile" className="profile">
                  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5859 0C7.29965 0 0.585938 6.71371 0.585938 15C0.585938 23.2863 7.29965 30 15.5859 30C23.8722 30 30.5859 23.2863 30.5859 15C30.5859 6.71371 23.8722 0 15.5859 0ZM15.5859 5.80645C18.5255 5.80645 20.9085 8.18952 20.9085 11.129C20.9085 14.0685 18.5255 16.4516 15.5859 16.4516C12.6464 16.4516 10.2634 14.0685 10.2634 11.129C10.2634 8.18952 12.6464 5.80645 15.5859 5.80645ZM15.5859 26.6129C12.0355 26.6129 8.85408 25.004 6.72505 22.4879C7.86215 20.3468 10.088 18.871 12.6827 18.871C12.8279 18.871 12.973 18.8952 13.1121 18.9375C13.8984 19.1915 14.721 19.3548 15.5859 19.3548C16.4509 19.3548 17.2795 19.1915 18.0597 18.9375C18.1988 18.8952 18.344 18.871 18.4892 18.871C21.0839 18.871 23.3097 20.3468 24.4468 22.4879C22.3178 25.004 19.1363 26.6129 15.5859 26.6129Z" fill="#312522" />
                  </svg>

                </a>
              </div>
            </header>
            <div className="filter-bar">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-button ${active === filter ? 'active' : ''}`}
                  onClick={() => setActive(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <Header />
          <Calendar />
          <Footer />
        </div>
      </div>
      <Musicplayer />
    </>
  );
}

export default App;
