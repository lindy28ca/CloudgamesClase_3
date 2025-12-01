import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game3() {
    const navigate = useNavigate();

    
    const { unityProvider, sendMessage,unload } = useUnityContext({
        loaderUrl: "/Game3/HouseLandWeb.loader.js",
        dataUrl: "/Game3/HouseLandWeb.data.br",
        frameworkUrl: "/Game3/HouseLandWeb.framework.js.br",
        codeUrl: "/Game3/HouseLandWeb.wasm.br",
        streamingAssetsUrl: "Game3/StreamingAssets",
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
                    <h1 className="centered-title">Game 3</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                </div>
            </div>
        </>
    );
}

export default Game3;