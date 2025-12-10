function Game6(){
    return(
          <>
            <div className="centered-container"> {/* React ya conoce esta clase por App.tsx */}
                <div className="centered-content">
                    <h1 className="centered-title">Game 6</h1>
                    
                    <iframe
                        src="/Game6/index.html"
                        title="Game 6"
                        className="centered-unity" 
                        style={{ border: "none" }} 
                    ></iframe>

          
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
  

                  
                </div>
            </div>
        </>
    );
}

export default Game6;