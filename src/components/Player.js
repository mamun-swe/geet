import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({ song }) => {
    console.log(song);
    return (
        <div>
            {/* Player */}
            <AudioPlayer
                autoPlay
                src={song}
                onPlay={e => console.log("onPlay")}
            // other props here
            />
        </div>
    );
};

export default Player;