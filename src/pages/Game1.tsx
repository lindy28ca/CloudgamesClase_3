import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game1() {
    const navigate = useNavigate();

    const { unityProvider, sendMessage, unload } = useUnityContext({
        loaderUrl: "/Game1/GameOnePiece.loader.js",
        dataUrl: "/Game1/GameOnePiece.data.br",
        frameworkUrl: "/Game1/GameOnePiece.framework.js.br",
        codeUrl: "/Game1/GameOnePiece.wasm.br",
    });

    useEffect(() => {
        return () => {
            unload().catch((e) => {
                console.warn("Unity no estaba listo para descargarse o ya se cerró:", e);
            });
            console.log("Orden de descarga enviada a Unity.");
        };
    }, [unload]);

    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">Partido 1</h1>

                    {/* JUEGO UNITY (CENTRADO Y GRANDE) */}
                    <Unity unityProvider={unityProvider} className="unity-game" />

                    {/* DESCRIPCIÓN / INSTRUCCIONES */}
                    <div className="game-description">
                        <h2>Descripción del juego</h2>
                        <p>
                            Un juego de cartas de memoria, consiste en encontrar pares de cartas iguales entre un conjunto de cartas colocadas boca abajo. El jugador debe voltear dos cartas por turno e intentar recordar sus posiciones. Si las cartas coinciden, el jugador gana el par; si no, se vuelven a voltear.
                        </p>

                        <h3>Instrucciones</h3>
                        <ul>
                            <li>Dale click a las cartas.</li>
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Game1;
