import React, { FC, useState, useEffect, useRef } from 'react';
import { AiFillSound, AiOutlineSound } from 'react-icons/ai';
import ReactSound, { ReactSoundProps } from 'react-sound';
import styled from '@emotion/styled';

const PLAYING: ReactSoundProps['playStatus'] = 'PLAYING';
const STOPPED: ReactSoundProps['playStatus'] = 'STOPPED';

const StyledButton = styled.button`
  align-self: center;
  margin-top: 2px;
  padding: 4px 5px 2px;
  border-radius: 4px;
`;

const StyledMessage = styled.div`
  align-self: center;
  margin-top: 10px;
  position: absolute;
  top: 450%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  background-color: #9700398a;
  color: white;
  font-size: 16px;
  transition: opacity 0.6s ease, visibility 0.6s ease;
  backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
`;

export const Sound: FC = () => {
    const [soundOn, setSoundOn] = useState(false);
    const [playStatus, setPlayStatus] = useState<ReactSoundProps['playStatus']>(STOPPED);
    const [isShowingOnMessage, setIsShowingOnMessage] = useState(false);
    const [isShowingOffMessage, setIsShowingOffMessage] = useState(false);



    useEffect(() => {

        if (soundOn) {
            setIsShowingOnMessage(true);
            setIsShowingOffMessage(false);
            const timeoutId = setTimeout(() => {
                setIsShowingOnMessage(false);
            }, 2000);
            return () => clearTimeout(timeoutId);
        } else {
            setIsShowingOnMessage(false);
            setIsShowingOffMessage(true);
            const timeoutId = setTimeout(() => {
                setIsShowingOffMessage(false);
            }, 2000);
            return () => clearTimeout(timeoutId);
        }
    }, [soundOn]);


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
        <div style={{ alignSelf: 'center' }}>
            <StyledButton onClick={toggleSound} className=" " style={{ border: soundOn ? '2px dotted' : ' solid transparent ', background: '#97003930' }}>
                {soundOn ? <AiFillSound /> : <AiOutlineSound />}
            </StyledButton>

            {
                isShowingOnMessage && (
                    <StyledMessage style={{ opacity: 1 }}>
                        Sound is on
                    </StyledMessage>
                )
            }

            {
                isShowingOffMessage && (
                    <StyledMessage style={{ opacity: 1 }}>
                        Sound is off
                    </StyledMessage>
                )
            }
            {
                soundOn && (
                    <ReactSound
                        url="http://www.ricardocortes.de/tom.wav"
                        playStatus={playStatus}
                        onLoading={handleSongLoading}
                        onPlaying={handleSongPlaying}
                        onFinishedPlaying={handleSongFinishedPlaying}
                    />
                )
            }
        </div >
    );
};
