import React, { useEffect, useState } from "react";
import { Rock, Paper, Scissors } from "./RockPaperScissors";
import styled from "styled-components";
import useSound from "../hooks/useSound";

const Battlefield = ({
    playerPicked,
    housePicked,
    score,
    setScore,
    setShowBattlefield,
    setShowPickFighter,
}) => {
    const [showVerdict, setShowVerdict] = useState(false);
    const [verdict, setVerdict] = useState("");
    const [showHouseChoice, setShowHouseChoice] = useState(false);
    const [playerWinsRound, setPlayerWinsRound] = useState(false);
    const [houseWinsRound, setHouseWinsRound] = useState(false);
    const { playLose, playWin } = useSound();

    function decideRoundWinner() {
        let nextScore;
        if (playerPicked === housePicked) {
            setVerdict("tie");
        } else if (playerPicked === "rock" && housePicked === "paper") {
            setVerdict("you lose");
            nextScore = score - 1;
            setScore(nextScore);
            playLose();
            setPlayerWinsRound(false);
            setHouseWinsRound(true);
        } else if (playerPicked === "rock" && housePicked === "scissors") {
            setVerdict("you win");
            nextScore = score + 1;
            setScore(nextScore);
            playWin();
            setPlayerWinsRound(true);
            setHouseWinsRound(false);
        } else if (playerPicked === "paper" && housePicked === "scissors") {
            setVerdict("you lose");
            nextScore = score - 1;
            setScore(nextScore);
            playLose();
            setPlayerWinsRound(false);
            setHouseWinsRound(true);
        } else if (playerPicked === "paper" && housePicked === "rock") {
            setVerdict("you win");
            nextScore = score + 1;
            setScore(nextScore);
            playWin();
            setPlayerWinsRound(true);
            setHouseWinsRound(false);
        } else if (playerPicked === "scissors" && housePicked === "rock") {
            setVerdict("you lose");
            nextScore = score - 1;
            setScore(nextScore);
            playLose();
            setPlayerWinsRound(false);
            setHouseWinsRound(true);
        } else if (playerPicked === "scissors" && housePicked === "paper") {
            setVerdict("you win");
            nextScore = score + 1;
            setScore(nextScore);
            playWin();
            setPlayerWinsRound(true);
            setHouseWinsRound(false);
        }

        sessionStorage.setItem("rpsGameScore", nextScore);
        setShowVerdict(true);
    }

    function playAgain() {
        setShowBattlefield(false);
        setShowPickFighter(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setShowHouseChoice(true);
            decideRoundWinner();
        }, 1000);
    }, []);

    return (
        // shrink(reduce width) when verdict is not being displayed
        <BattlefieldStyled shrink={!showVerdict}>
            <div className="picked you-picked">
                <h4>you picked</h4>
                <div>
                    <div style={{ position: "relative" }}>
                        {playerWinsRound && <Gradients />}

                        {playerPicked === "rock" ? (
                            <Rock
                                size={"big"}
                                playerWinsRound={playerWinsRound}
                            />
                        ) : playerPicked === "paper" ? (
                            <Paper
                                size={"big"}
                                playerWinsRound={playerWinsRound}
                            />
                        ) : playerPicked === "scissors" ? (
                            <Scissors
                                size={"big"}
                                playerWinsRound={playerWinsRound}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>

            {showVerdict && (
                <div className="verdict">
                    <p>{verdict}</p>
                    <button onClick={playAgain} tabIndex="1">
                        play again
                    </button>
                </div>
            )}

            <div className="picked house-picked">
                <h4>the house picked</h4>

                <div className="house-choice-wrapper">
                    <div
                        className={`bg ${showHouseChoice ? "hide" : ""}`}
                    ></div>

                    {houseWinsRound && <Gradients />}
                    <div
                        className={`house-choice ${
                            showHouseChoice ? "show" : ""
                        }`}
                    >
                        {housePicked === "rock" ? (
                            <Rock
                                size={"big"}
                                houseWinsRound={houseWinsRound}
                            />
                        ) : housePicked === "paper" ? (
                            <Paper
                                size={"big"}
                                houseWinsRound={houseWinsRound}
                            />
                        ) : housePicked === "scissors" ? (
                            <Scissors
                                size={"big"}
                                houseWinsRound={houseWinsRound}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </BattlefieldStyled>
    );
};

export default Battlefield;

const Gradients = () => {
    return (
        <GradientsStyled>
            <div>
                <div>
                    <div></div>
                </div>
            </div>
        </GradientsStyled>
    );
};

const BattlefieldStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: ${(props) => (props.shrink ? "stretch" : "center")};
    width: min(90vw, 700px);
    width: ${(props) =>
        props.shrink ? "min(90vw, 600px)" : "min(90vw, 750px)"};
    margin-inline: auto;
    margin-top: 3rem;
    text-transform: uppercase;
    flex-wrap: wrap;

    div {
        text-align: center;
    }

    .house-choice-wrapper {
        position: relative;
        width: min(200px, 30vw);
        aspect-ratio: 1;
    }

    .bg {
        background-color: hsla(0, 0%, 0%, 0.26);
        width: 80%;
        aspect-ratio: 1;
        border-radius: 50%;
        margin-block: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;

        &.hide {
            visibility: hidden;
        }
    }

    .house-choice {
        scale: 0;
        transition: 150ms;
        position: absolute;
        top: 0;
        left: 0;

        &.show {
            scale: 1;
        }
    }

    .verdict {
        position: relative;
        z-index: 100;
        p {
            font-size: 3rem;
        }
        button {
            text-transform: uppercase;
            background-color: white;
            font-size: 0.875rem;
            border: none;
            border-radius: 8px;
            padding: 0.8em 4em;
            transform: 150ms;
            font-weight: 700;
            color: var(--darkText);
            cursor: pointer;

            &:hover {
                color: crimson;
            }
        }
    }

    .picked {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        h4 {
            font-size: 1rem;
            letter-spacing: 2px;
        }
    }

    @media screen and (max-width: 650px) {
        justify-content: center;
        margin-top: min(7rem, 10vh);
        gap: min(4rem, 25vw);
        align-items: flex-end;

        .verdict {
            order: 3;

            p {
                font-size: min(4rem, 15vw);
            }
            button {
                font-size: 1rem;
            }
        }

        .picked {
            flex-direction: column-reverse;
        }
    }
    @media screen and (max-width: 380px) {
        gap: 5vw;
    }
`;

const GradientsStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 250%;
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;
    z-index: -2;
    opacity: 0.6;

    & > div {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: hsl(214, 47%, 23%);

        & > div {
            background-color: hsl(214, 47%, 25%);
            width: 80%;
            height: 80%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;

            & > div {
                background-color: hsl(214, 47%, 27%);
                width: 75%;
                height: 75%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 50%;
            }
        }
    }
`;
