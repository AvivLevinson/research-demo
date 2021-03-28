import React from 'react';
import {Howl, Howler} from 'howler';

import audio_test_mp3 from '../../constent/audio/audio_test.mp3';


const Sound = ({url})=>{
    console.log(audio_test_mp3);

return(
    <div>
    <audio  controls autoPlay>

        <source src={audio_test_mp3} type="audio/mp3"/>
        Your browser does not support the audio element.
    </audio>
    </div>
);
}


export default Sound;