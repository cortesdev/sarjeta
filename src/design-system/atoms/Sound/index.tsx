import React, { FC, useState } from 'react';
import { AiFillSound, AiOutlineSound } from 'react-icons/ai';
import ReactSound, { ReactSoundProps } from 'react-sound';

const PLAYING: ReactSoundProps['playStatus'] = 'PLAYING';
const STOPPED: ReactSoundProps['playStatus'] = 'STOPPED';

export const Sound: FC = () => {
    const [soundOn, setSoundOn] = useState(false);
    const [playStatus, setPlayStatus] = useState<ReactSoundProps['playStatus']>(STOPPED);

    const handleSongLoading = () => {
        // Handle song loading event
    };

    const handleSongPlaying = () => {
        // Handle song playing event
    };

    const handleSongFinishedPlaying = () => {
        // Handle song finished playing event
    };

    const toggleSound = () => {
        setSoundOn(!soundOn);
        setPlayStatus(soundOn ? STOPPED : PLAYING);
    };

    return (
        <div>
            <button onClick={toggleSound}>
                {soundOn ? <AiFillSound /> : <AiOutlineSound />}
                {soundOn ? 'on' : 'off'}
            </button>

            {soundOn && (
                <ReactSound
                    url="/tom.wav"
                    playStatus={playStatus}
                    onLoading={handleSongLoading}
                    onPlaying={handleSongPlaying}
                    onFinishedPlaying={handleSongFinishedPlaying}
                />
            )}
        </div>
    );
};
