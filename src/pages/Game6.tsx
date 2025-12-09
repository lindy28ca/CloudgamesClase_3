function Game6(){
    return(
          <>
            <div className="centered-container"> {/* React ya conoce esta clase por App.tsx */}
                <div className="centered-content">
                    <h1 className="centered-title">Game 6</h1>
                    <p className="centered-description">
                        Es un juego en el que debes manejar a un heladito que tendra que conseguir todas las frutas qu ehay en el mapa para poder superar el nivel.
                    </p>
                    <p className="centered-instructions">
                        Instrucciones: Usa las flechas para moverte y recoge todas las frutas para ganar.
                    </p>
                    
                    <iframe
                        src="/Game6/index.html"
                        title="Game 6"
                        className="centered-unity" 
                        style={{ border: "none" }} 
                    ></iframe>
                  
                </div>
            </div>
        </>
    );
}

export default Game6;