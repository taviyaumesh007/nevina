import React, { useState, useRef } from "react";

function Musicplayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  return (
    <div className="musicplayer">
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        onTimeUpdate={handleTimeUpdate}
      ></audio>

      <div className="musicplayer-info">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/2/2e/Brahmastra_-_Kesariya_Song_Cover.jpeg"
          alt="Kesariya"
          className="musicplayer-album-cover"
        />
        <div>
          <p className="musicplayer-song-title">Kesariya</p>
          <p className="musicplayer-artist-name">Pritam</p>
        </div>
      </div>

      <div className="musicplayer-controls">
        <button>
          <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.50563C3.63334 3.26413 8.90001 3.86787 8.90001 8.2148C8.90001 12.5617 13.5815 13.4069 15.4834 13.2861" stroke="#312522" stroke-width="1.5" />
            <path d="M16.3611 3.55133C12.6234 3.30231 9.09817 3.97757 9.09817 8.45981C9.09817 12.942 3.69936 13.8135 0.99995 13.6889" stroke="#312522" stroke-width="1.5" />
            <path d="M15.9224 1.69458V3.5058V5.31702L18.1168 3.5058L15.9224 1.69458Z" fill="#312522" stroke="#312522" />
            <path d="M15.9224 11.4763V13.2875V15.0988L18.1168 13.2875L15.9224 11.4763Z" fill="#312522" stroke="#312522" />
          </svg>

        </button>
        <button>
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.205811 2.29715C0.205811 1.81237 0.598806 1.41937 1.08359 1.41937C1.56837 1.41937 1.96137 1.81237 1.96137 2.29715V12.2867H0.205811V2.29715Z" fill="#312522" />
            <path d="M2.83911 6.85222L14.0308 1.51911L14.0308 12.1853L2.83911 6.85222Z" fill="#312522" />
          </svg>
        </button>
        <button onClick={handlePlayPause}>
          <svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5 0C8.27875 0 0 7.6075 0 17C0 26.3925 8.27875 34 18.5 34C28.7212 34 37 26.3925 37 17C37 7.6075 28.7212 0 18.5 0ZM13.875 8.5L20.8125 12.75L27.75 17L13.875 25.5V8.5Z" fill="#312522" />
          </svg>

        </button>
        <button>
          <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.0725 11.4078C18.0725 11.8926 17.6795 12.2856 17.1947 12.2856C16.7099 12.2856 16.317 11.8926 16.317 11.4078L16.317 1.41825L18.0725 1.41825L18.0725 11.4078Z" fill="#312522" />
            <path d="M15.4392 6.85273L4.24753 12.1858L4.24753 1.51962L15.4392 6.85273Z" fill="#312522" />
          </svg>
        </button>
        <button>
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2316_618)">
              <path d="M11.8684 0.969482V3.14295H15.8184L11.8684 0.969482Z" fill="#312522" />
              <path d="M0.895996 10.7501V3.86744L1.33489 3.14295H11.8682M11.8682 3.14295V0.969482L15.8182 3.14295H11.8682Z" stroke="#312522" stroke-width="1.5" />
              <path d="M5.72393 15.4592V13.2858H1.77393L5.72393 15.4592Z" fill="#312522" />
              <path d="M16.6962 5.67865V12.5613L16.2573 13.2858H5.72393M5.72393 13.2858V15.4592L1.77393 13.2858H5.72393Z" stroke="#312522" stroke-width="1.5" />
            </g>
            <defs>
              <clipPath id="clip0_2316_618">
                <path d="M0.0183105 6.24499C0.0183105 2.93129 2.7046 0.244995 6.01831 0.244995H11.5739C14.8876 0.244995 17.5739 2.93129 17.5739 6.24499V16.1837H0.0183105V6.24499Z" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <div className="musicplayer-progress-bar">
        <span>{new Date(currentTime * 1000).toISOString().substr(14, 5)}</span>
        <input
          type="range"
          min="0"
          max={audioRef.current?.duration || 100}
          value={currentTime}
          onChange={(e) => (audioRef.current.currentTime = e.target.value)}
        />
        <span>
          {new Date((audioRef.current?.duration || 0) * 1000)
            .toISOString()
            .substr(14, 5)}
        </span>
      </div>
      <div className="musicplayer-info">
        <button>
          <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2316_627)">
              <path d="M10.9805 7.89062C7.70265 7.89062 4.44411 7.89062 1.16628 7.89062C0.395026 7.89062 0.00939941 7.52918 0.00939941 6.78822C0.00939941 5.01713 0.00939941 3.26412 0.00939941 1.49303C0.00939941 0.752071 0.395026 0.390625 1.18556 0.390625C7.74121 0.390625 14.2969 0.390625 20.8332 0.390625C21.6045 0.390625 22.0094 0.752071 22.0094 1.47496C22.0094 3.24605 22.0094 5.0352 22.0094 6.80629C22.0094 7.51111 21.6045 7.87255 20.8718 7.87255C17.5747 7.89063 14.2776 7.89062 10.9805 7.89062ZM20.0041 2.28822C13.9884 2.28822 8.01115 2.28822 2.03394 2.28822C2.03394 3.5352 2.03394 4.76412 2.03394 5.99303C8.03043 5.99303 14.0076 5.99303 20.0041 5.99303C20.0041 4.74605 20.0041 3.51713 20.0041 2.28822Z" fill="#312522" />
              <path d="M11.0191 13.5111C14.3162 13.5111 17.6326 13.5111 20.9297 13.5111C21.4503 13.5111 21.8359 13.7641 21.9709 14.1798C22.1444 14.722 21.7781 15.2641 21.1803 15.3726C21.0647 15.3906 20.9682 15.3906 20.8526 15.3906C14.2969 15.3906 7.74125 15.3906 1.1856 15.3906C0.549315 15.3906 0.144407 15.1195 0.0480005 14.6135C-0.0676875 14.0713 0.356502 13.5473 0.954223 13.5111C1.03135 13.5111 1.12776 13.5111 1.20488 13.5111C4.48271 13.5111 7.74125 13.5111 11.0191 13.5111Z" fill="#312522" />
              <path d="M10.9998 11.6316C7.70268 11.6316 4.40557 11.6316 1.10847 11.6316C0.491463 11.6316 0.0865554 11.3424 0.00943011 10.8183C-0.0676952 10.3123 0.337213 9.80629 0.896371 9.77014C0.973497 9.77014 1.0699 9.77014 1.14703 9.77014C7.72196 9.77014 14.2776 9.77014 20.8525 9.77014C21.5081 9.77014 21.913 10.0593 21.9901 10.5834C22.0673 11.0894 21.6624 11.5774 21.1225 11.6135C21.0068 11.6316 20.9104 11.6135 20.7947 11.6135C17.5362 11.6316 14.2776 11.6316 10.9998 11.6316Z" fill="#312522" />
            </g>
            <defs>
              <clipPath id="clip0_2316_627">
                <rect width="22.0141" height="15" fill="white" transform="translate(0 0.390625)" />
              </clipPath>
            </defs>
          </svg>

        </button>
        <button>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2316_632)">
              <path d="M13.014 6.89062H6.01404V8.89062H13.014V6.89062Z" fill="black" />
              <path d="M10.014 12.8906H6.01404V14.8906H10.014V12.8906Z" fill="black" />
              <path d="M15.014 12.8606V16.8906H6.01404L4.01404 18.8906V4.89062H15.014V6.92063C15.534 6.23063 16.214 5.67062 17.014 5.32062V4.89062C17.014 3.79062 16.114 2.89062 15.014 2.89062H4.01404C2.91404 2.89062 2.02404 3.79062 2.02404 4.89062L2.01404 22.8906L6.01404 18.8906H15.014C16.114 18.8906 17.014 17.9906 17.014 16.8906V14.4706C16.214 14.1106 15.534 13.5506 15.014 12.8606Z" fill="black" />
              <path d="M13.014 9.89062H6.01404V11.8906H13.014V9.89062Z" fill="black" />
              <path d="M20.014 7.07062C19.704 6.96062 19.364 6.89062 19.014 6.89062C17.354 6.89062 16.014 8.23063 16.014 9.89062C16.014 11.5506 17.354 12.8906 19.014 12.8906C20.674 12.8906 22.014 11.5506 22.014 9.89062V3.89062H24.014V1.89062H20.014V7.07062Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_2316_632">
                <rect width="24" height="24" fill="white" transform="translate(0.0140381 0.890625)" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2316_642)">
              <path d="M3.01404 6.89062H21.014V4.89062H3.01404C1.91404 4.89062 1.01404 5.79062 1.01404 6.89062V18.8906C1.01404 19.9906 1.91404 20.8906 3.01404 20.8906H7.01404V18.8906H3.01404V6.89062ZM13.014 12.8906H9.01404V14.6706C8.40404 15.2206 8.01404 16.0006 8.01404 16.8906C8.01404 17.7806 8.40404 18.5606 9.01404 19.1106V20.8906H13.014V19.1106C13.624 18.5606 14.014 17.7706 14.014 16.8906C14.014 16.0106 13.624 15.2206 13.014 14.6706V12.8906ZM11.014 18.3906C10.184 18.3906 9.51404 17.7206 9.51404 16.8906C9.51404 16.0606 10.184 15.3906 11.014 15.3906C11.844 15.3906 12.514 16.0606 12.514 16.8906C12.514 17.7206 11.844 18.3906 11.014 18.3906ZM22.014 8.89062H16.014C15.514 8.89062 15.014 9.39062 15.014 9.89062V19.8906C15.014 20.3906 15.514 20.8906 16.014 20.8906H22.014C22.514 20.8906 23.014 20.3906 23.014 19.8906V9.89062C23.014 9.39062 22.514 8.89062 22.014 8.89062ZM21.014 18.8906H17.014V10.8906H21.014V18.8906Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_2316_642">
                <rect width="24" height="24" fill="white" transform="translate(0.0140381 0.890625)" />
              </clipPath>
            </defs>
          </svg>
        </button>

      </div>

      <div className="musicplayer-volume">
        <button>
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.81423 0.0427516C9.02326 0.115547 9.1696 0.270851 9.20715 0.451307L9.21664 0.543366V12.4974C9.21664 12.7163 9.05751 12.9138 8.81294 12.9985C8.60331 13.0711 8.366 13.0485 8.18334 12.9441L8.09695 12.8851L4.24382 9.7607H1.975C0.948409 9.7607 0.104744 9.11419 0.00904115 8.2876L0 8.13062V4.88239C0 4.03508 0.783278 3.33875 1.7848 3.25976L1.975 3.25229H4.24545L8.09895 0.154152C8.28856 0.00170573 8.57034 -0.0421765 8.81423 0.0427516ZM12.8213 1.15105L12.9353 1.21494L13.0641 1.30685C13.1469 1.36828 13.2612 1.45727 13.3965 1.57326C13.6668 1.80494 14.0231 2.14633 14.3786 2.59323C15.0901 3.48773 15.8043 4.8135 15.8043 6.52479C15.8043 8.23617 15.09 9.55998 14.3781 10.4525C14.0225 10.8984 13.666 11.2388 13.3956 11.4697L13.2096 11.6229L12.9637 11.8065L12.9203 11.8359C12.6352 12.0223 12.2202 11.9833 11.9944 11.7481C11.7942 11.5395 11.8094 11.2469 12.0143 11.0534L12.1844 10.9258C12.2458 10.8805 12.3373 10.8097 12.4489 10.7144C12.6726 10.5234 12.9751 10.2353 13.2784 9.85503C13.8842 9.09529 14.4876 7.9761 14.4876 6.52479C14.4876 5.07337 13.8842 3.95182 13.2779 3.18965C13.0251 2.8718 12.7728 2.61794 12.5662 2.43109L12.3434 2.23953L12.1007 2.05542C11.8167 1.86844 11.7691 1.52633 11.9955 1.29167C12.1968 1.08299 12.5463 1.02915 12.8213 1.15105ZM11.5057 3.3244L11.6368 3.40019L11.8128 3.53683L11.8839 3.59837C12.0334 3.73142 12.2261 3.92632 12.4171 4.18547C12.8009 4.70659 13.1723 5.4819 13.1723 6.51881C13.1723 7.5557 12.8009 8.33183 12.4173 8.85371C12.2267 9.11322 12.0339 9.30862 11.8846 9.44196L11.7509 9.55527L11.6583 9.62593L11.606 9.66257L11.5224 9.69388C11.3481 9.75151 10.9404 9.84543 10.6808 9.57726C10.48 9.36996 10.493 9.0786 10.6951 8.88437L10.8722 8.74392L10.9175 8.7045C11.0156 8.61695 11.1527 8.4792 11.2916 8.2901C11.5675 7.91468 11.8556 7.33119 11.8556 6.51881C11.8556 5.70649 11.5675 5.12418 11.292 4.75C11.1878 4.60862 11.0847 4.49611 10.9984 4.41194L10.873 4.29797L10.7828 4.22733C10.5001 4.04126 10.4536 3.70002 10.6798 3.4653C10.881 3.25655 11.2306 3.2026 11.5057 3.3244Z" fill="#312522" />
          </svg>

        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}

export default Musicplayer;
