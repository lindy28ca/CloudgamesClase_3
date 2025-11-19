import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game1() {
    const navigate = useNavigate();

    // Unity context setup
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Game1/GameOnePiece.loader.js",
        dataUrl: "/Game1/GameOnePiece.data.unityweb",
        frameworkUrl: "/Game1/GameOnePiece.framework.js.unityweb",
        codeUrl: "/Game1/GameOnePiece.wasm.unityweb",
    });


    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                </div>
            </div>
        </>
    );
}

export default Game1;
