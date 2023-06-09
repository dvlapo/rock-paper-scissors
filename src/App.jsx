import Scoreboard from "./components/Scoreboard";
import RulesButton from "./components/RulesButton";
import { Rock, Paper, Scissors } from "./components/RockPaperScissors";
import styled from "styled-components";
import bgTriangle from "./assets/images/bg-triangle.svg";
import Rules from "./components/Rules";
import { useEffect, useState } from "react";
import Battlefield from "./components/Battlefield";
import store from "./db/store";
import RestartButton from "./components/RestartButton";

function App() {
    const [showRules, setShowRules] = useState(false);
    const [showPickFighter, setShowPickFighter] = useState(true);
    const [showBattlefield, setShowBattlefield] = useState(false);
    const [score, setScore] = useState(0);
    const [playerPicked, setPlayerPicked] = useState("");
    const [housePicked, setHousePicked] = useState("");
    const fighters = ["rock", "paper", "scissors"];

    async function getScore() {
        setScore(await store.getScore());
    }

    useEffect(() => {
        getScore();
    }, []);

    function handlePlayerPicked(fighter) {
        setPlayerPicked(fighter);
        setShowBattlefield(true);
        setShowPickFighter(false);

        const idx = Math.floor(Math.random() * 3);
        setHousePicked(fighters[idx]);
    }

    return (
        <>
            <Scoreboard score={score} />
            {score !== 0 && (
                <RestartButton
                    setShowPickFighter={setShowPickFighter}
                    setShowBattlefield={setShowBattlefield}
                    setScore={setScore}
                />
            )}
            <RulesButton setShowRules={setShowRules} />
            <main>
                {showPickFighter && (
                    <PickFighter>
                        <img className="triangle" src={bgTriangle} alt="" />
                        <Rock handlePlayerPicked={handlePlayerPicked} />
                        <Paper handlePlayerPicked={handlePlayerPicked} />
                        <Scissors handlePlayerPicked={handlePlayerPicked} />
                    </PickFighter>
                )}

                {showBattlefield && (
                    <Battlefield
                        playerPicked={playerPicked}
                        housePicked={housePicked}
                        score={score}
                        setScore={setScore}
                        setShowBattlefield={setShowBattlefield}
                        setShowPickFighter={setShowPickFighter}
                    />
                )}
            </main>

            <Rules showRules={showRules} setShowRules={setShowRules} />
        </>
    );
}

export default App;

const PickFighter = styled.div`
    width: min(90vw, 500px);
    gap: min(3rem, 8vw);
    margin-inline: auto;
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;

    img.triangle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
    }
`;
