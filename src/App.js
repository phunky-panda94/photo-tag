import './App.css';
import { useState } from 'react';
import coordinates from './Coordinates';

function App() {
  
    const [inZone, setInZone] = useState(false);
    const [position, setPosition] = useState({
        top: 0,
        left: 0
    });

    function getCoordinates(event) {

        let outlineY = event.clientY - event.target.getBoundingClientRect().top;
        let outlineX = event.clientX - event.target.getBoundingClientRect().left;

        checkCoordinates(outlineX, outlineY);

    }

    function checkCoordinates(x, y) {
    
        // check if (x,y) within range of stored coordinates
        for (let coordinate of coordinates) {

            if (x > coordinate[0] - 25 && x < coordinate[0] + 25 &&
                y > coordinate[1] - 40 && y < coordinate[1] + 40) {

                setInZone(true);
                setPosition({
                    left: coordinate[0] - 25,
                    top: coordinate[1] - 40
                });

                break;

            } 

            setInZone(false);

        }

    }

    return (
        <div className="container flex flex-col flex-ai-c" >
            <h1>Guess Who?</h1>
            <div className="photo flex flex-col flex-jc-c">
                <img alt="group" src="/group.jpg" onMouseMove={getCoordinates}></img>
                {inZone && <div className="outline" style={position}></div>}
            </div>
        </div>
    );

}

// TODO: when clicked, show tooltip of name + random names

// TODO: if selected name correct, return Win message

export default App;
