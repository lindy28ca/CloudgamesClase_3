import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game5() {
    const navigate = useNavigate();

    
    const { unityProvider, sendMessage,unload } = useUnityContext({
        loaderUrl: "/Game5/Pollito.loader.js",
        dataUrl: "/Game5/Pollito.data.br",
        frameworkUrl: "/Game5/Pollito.framework.js.br",
        codeUrl: "/Game5/Pollito.wasm.br",
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
                    <h1 className="centered-title">Game 5</h1>
                    <Unity unityProvider={unityProvider} className="unity-game" />
                    <div className="game-description">
                        <h2>Descripción del juego</h2>
                        <p>
                          Es un juego en el que el jugador podrá manejar a un huevito y tendra que superar diferentes niveles para lograr compvertirse en pollo.
                        </p>

                        <h3>Instrucciones</h3>
                        <ul>
                            <li>Usa las teclas de A - D para moverte.</li> 
                            <li>Presiona espacio para saltar.</li> 
                            <li>Evita los obstáculos y completa los niveles.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Game5;