import styled from "styled-components";
import store from "../db/store";

function RestartButton({ setScore, setShowBattlefield, setShowPickFighter }) {
    async function restart() {
        await store.updateDB(0);
        setScore(0);
        setShowBattlefield(false);
        setShowPickFighter(true);
    }

    return (
        <RestartButtonStyled onClick={restart}>
            Restart Game
        </RestartButtonStyled>
    );
}

export default RestartButton;

const RestartButtonStyled = styled.button`
    outline: 1.5px solid;
    text-transform: uppercase;
    color: white;
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0.5em 2.5em;
    border-radius: 8px;
    position: absolute;
    bottom: 12vh;
    right: 4vw;
    @media screen and (max-width: 768px) {
        left: 50%;
        transform: translateX(-50%);
        right: unset;
        bottom: 12dvh;
    }

    @media screen and (max-width: 768px) and (orientation: landscape) {
        display: none;
    }
`;
