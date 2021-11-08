import './App.css';
import { useState } from 'react';

function App() {
  
    const [inZone, setInZone] = useState(false);
    const [position, setPosition] = useState({
        top: 0,
        left: 0
    });
  
    // TODO: get center coordinates of each face (e.g 904,439) (x: 25, y: 40)
    function getCoordinates(event) {

        let outlineY = event.clientY - event.target.getBoundingClientRect().top;
        let outlineX = event.clientX - event.target.getBoundingClientRect().left;

        setPosition({
            top: outlineY - 40,
            left: outlineX - 25
        })
        
    }

    // TODO: if hover within radius of center, show outline
    function checkCoordinates(event) {
        if (event.clientX < 905 + 25 && 
            event.clientX > 905 - 25 && 
            event.clientY < 440 + 40 && 
            event.clientY > 440 - 40) {
            setInZone(true);
        } else {
            setInZone(false);
        }
    }

    return (
        <div className="container flex flex-col flex-ai-c" >
            <h1>Guess Who?</h1>
            <div className="border photo flex flex-col flex-jc-c">
                <img alt="group" src="/group.jpg" onClick={getCoordinates}></img>
                <div className="border outline" style={position}></div>
            </div>
        </div>
    );

}

// TODO: when clicked, show tooltip of name + random names

// TODO: if selected name correct, return Win message

export default App;
