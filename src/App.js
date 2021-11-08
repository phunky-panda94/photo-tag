import './App.css';
import { useState } from 'react';

function App() {
  
    const [inZone, setInZone] = useState(false);
    const [position, setPosition] = useState({
        top: 0,
        left: 0
    });

    const coordinates = [
        [615, 260],
        [595, 347],
        [519, 363]
    ]
  
    // TODO: get center coordinates of each face (e.g 904,439) (x: 25, y: 40)
    function getCoordinates(event) {

        let outlineY = event.clientY - event.target.getBoundingClientRect().top;
        let outlineX = event.clientX - event.target.getBoundingClientRect().left;

        console.log(outlineX, outlineY);

        checkCoordinates(outlineX, outlineY);

    }

    // TODO: if hover within radius of center, show outline
    function checkCoordinates(x, y) {
    
        // check if (x,y) within range of stored coordinates

        for (let coordinate of coordinates) {

            if (x > coordinate[0] - 25 && x < coordinate[0] + 25 &&
                y > coordinate[1] - 40 && y < coordinate[1] + 40) {

                console.log('in the zone');
                
                setInZone(true);
                setPosition({
                    left: coordinate[0] - 25,
                    top: coordinate[1] - 40
                });

            }

        }
    }

    return (
        <div className="container flex flex-col flex-ai-c" >
            <h1>Guess Who?</h1>
            <div className="photo flex flex-col flex-jc-c">
                <img alt="group" src="/group.jpg" onClick={getCoordinates}></img>
                {inZone && <div className="outline" style={position}></div>}
            </div>
        </div>
    );

}

// TODO: when clicked, show tooltip of name + random names

// TODO: if selected name correct, return Win message

export default App;
