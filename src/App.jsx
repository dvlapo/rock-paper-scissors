import Scoreboard from "./components/Scoreboard";
import RulesButton from "./components/RulesButton";
import { Rock, Paper, Scissors } from "./components/RockPaperScissors";
import styled from "styled-components";
import bgTriangle from "./assets/images/bg-triangle.svg";
import Rules from "./components/Rules";
import { useState } from "react";

function App() {
    const [showRules, setShowRules] = useState(false);

    return (
        <>
            <Scoreboard />
            <RulesButton setShowRules={setShowRules} />
            <main>
                <StepOne>
                    <img className="triangle" src={bgTriangle} alt="" />
                    <Rock />
                    <Paper />
                    <Scissors />
                </StepOne>
            </main>
            <Rules showRules={showRules} setShowRules={setShowRules} />
        </>
    );
}

export default App;

const StepOne = styled.div`
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
