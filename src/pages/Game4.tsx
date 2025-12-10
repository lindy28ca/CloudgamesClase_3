import { useEffect, Fragment} from "react";
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
                   <Fragment>
                             <Unity unityProvider={unityProvider} className="centered-unity" />
                              <div className="game-description">
                           <h2>Descripción</h2>
                           <p>
                             En este juego deberás encontrar los pares de las cartas en el menor tiempo posible.
                           </p>
                   
                           <h2>Instrucciones</h2>
                           <ul>
                             <li>Clic Izquierdo para seleccionar una carta</li>
                           </ul>
                         </div>
                           </Fragment>

                </div>
            </div>
        </>
    );
}

export default Game4;