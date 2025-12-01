import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game1() {
    const navigate = useNavigate();

    
    const { unityProvider, sendMessage,unload } = useUnityContext({
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
                    <h1 className="centered-title">Game 1</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                </div>
            </div>
        </>
    );
}

export default Game1;
