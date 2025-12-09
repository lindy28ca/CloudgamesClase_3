import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game4() {
    const navigate = useNavigate();

    
    const { unityProvider, sendMessage,unload } = useUnityContext({
        loaderUrl: "/Game4/Bolos.loader.js",
        dataUrl: "/Game4/Bolos.data.br",
        frameworkUrl: "/Game4/Bolos.framework.js.br",
        codeUrl: "/Game4/Bolos.wasm.br",
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
                    <h1 className="centered-title">Game 4</h1>
                    <Unity unityProvider={unityProvider} className="unity-game" />
                    {/* DESCRIPCIÓN / INSTRUCCIONES */}
                    <div className="game-description">
                        <h2>Descripción del juego</h2>
                        <p>
                          Es un juego en el que el jugador lanza una bola por una pista larga y lisa con el objetivo de derribar la mayor cantidad de pinos posibles.
                        </p>

                        <h3>Instrucciones</h3>
                        <ul>
                            <li>Apunta y lanza la bola para derribar los pinos.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Game4;