import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game2() {
    const navigate = useNavigate();

    
    const { unityProvider, sendMessage,unload } = useUnityContext({
        loaderUrl: "/Game2/OnePieceTrivia.loader.js",
        dataUrl: "/Game2/OnePieceTrivia.data.br",
        frameworkUrl: "/Game2/OnePieceTrivia.framework.js.br",
        codeUrl: "/Game2/OnePieceTrivia.wasm.br",
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
                    <h1 className="centered-title">Game 2</h1>
                    <Unity unityProvider={unityProvider} className="unity-game" />
                    {/* DESCRIPCIÓN / INSTRUCCIONES */}
                    <div className="game-description">
                        <h2>Descripción del juego</h2>
                        <p>
                          Es un juego en el que el jugador debe responder una serie de afirmaciones indicando si son verdaderas o falsas. Cada respuesta correcta suma puntos y pone a prueba el conocimiento, la memoria y la rapidez del jugador. El objetivo es obtener la mayor cantidad de aciertos posibles antes de que termine la partida.
                        </p>

                        <h3>Instrucciones</h3>
                        <ul>
                            <li>Presiona verdadero o falso, dependiendo de la pregunta.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Game2;