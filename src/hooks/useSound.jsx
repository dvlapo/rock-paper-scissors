import React from "react";
import pop from "../assets/mixkit-long-pop-2358.wav";
import lose from "../assets/mixkit-lose.wav";
import win from "../assets/mixkit-win.wav";

const useSound = () => {
    const [popSound] = React.useState(new Audio(pop));
    const [loseSound] = React.useState(new Audio(lose));
    const [winSound] = React.useState(new Audio(win));
    const playPop = () => {
        popSound.play();
    };
    const playLose = () => {
        loseSound.play();
    };
    const playWin = () => {
        winSound.play();
    };

    return { playPop, playLose, playWin };
};

export default useSound;
