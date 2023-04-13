import React from "react";
import rulesImg from "../assets/images/image-rules.svg";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

const Rules = ({ showRules, setShowRules }) => {
    const backdropStyles = {
        width: "100vw",
        height: "100vh",
        background: "#00000080",
        position: "absolute",
        top: 0,
        left: 0,
        display: showRules ? "block" : "none",
        zIndex: 1,
    };
    return (
        <>
            <div
                onClick={() => setShowRules(false)}
                style={backdropStyles}
            ></div>
            <RulesStyled className={`${showRules ? "show" : ""}`}>
                <div className="modal-container">
                    <div className="heading">
                        <h2>Rules</h2>
                        <button
                            role="button"
                            onClick={() => setShowRules(false)}
                        >
                            <CgClose />
                        </button>
                    </div>
                    <img src={rulesImg} alt="Game rules" />
                </div>
            </RulesStyled>
        </>
    );
};

export default Rules;

const RulesStyled = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-content: center;
    position: absolute;
    inset: 0;
    visibility: hidden;

    .heading {
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            text-transform: uppercase;
            color: var(--darkText);
        }

        button {
            font-size: 1.5rem;
            border: none;
            background-color: transparent;
            cursor: pointer;
        }

        @media screen and (max-width: 650px) {
            justify-content: center;

            button {
                position: absolute;
                bottom: 3rem;
            }
        }

        svg {
            path {
                color: var(--headerOutline);
            }
        }
    }

    .modal-container {
        background-color: white;
        padding: 2rem;
        border-radius: 8px;
        position: relative;
        z-index: 1;
        scale: 0;

        img {
            margin-inline: auto;
        }

        @media screen and (max-width: 650px) {
            height: 100vh;
            width: 100vw;
            margin-inline: auto;
            border-radius: 0;

            .heading {
                margin-block: 10vh;
            }
        }
    }

    &.show {
        visibility: visible;

        .modal-container {
            transition: all 300ms;
            scale: 1;
            z-index: 4;
        }
    }
`;
