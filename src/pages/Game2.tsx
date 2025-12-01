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
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                </div>
            </div>
        </>
    );
}

export default Game2;