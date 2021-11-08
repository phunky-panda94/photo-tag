import './App.css';
import List from './components/List';
import { useState } from 'react';
import coordinates from './Coordinates';

function App() {
  
    const [inZone, setInZone] = useState(false);
    const [position, setPosition] = useState();
    const [clicked, setClicked] = useState(false);
    const [score, setScore] = useState(0);
    const [person, setPerson] = useState();

    function checkCoordinates(event) {

        if (!clicked) {
        
            let x = event.clientX - event.target.getBoundingClientRect().left;
            let y = event.clientY - event.target.getBoundingClientRect().top;
        
            // check if (x,y) within range of stored coordinates
            for (let coordinate of coordinates) {

                if (x > coordinate[0] - 25 && x < coordinate[0] + 25 &&
                    y > coordinate[1] - 40 && y < coordinate[1] + 40) {

                    setInZone(true);
                    setPosition({
                        left: coordinate[0] - 25,
                        top: coordinate[1] - 40
                    });
                    setPerson(coordinate[2]);

                    break;

                } 

                setInZone(false);

            }

        }

    }

    function handleClick(event) {

        if (clicked) {
            event.target.style.borderColor = '#4c843c';
            setClicked(false)
        } else {
            event.target.style.borderColor = '#a4d454';
            setClicked(true);
        }

    }

    return (
        <div className="container flex flex-col flex-ai-c" >
            <h1>Guess Who?</h1>
            <h2>Score: {score}</h2>
            <div className="photo flex flex-col flex-jc-c">
                <img alt="group" src="/group.jpg" onMouseMove={checkCoordinates}></img>
                {inZone && <div className="outline" style={position} onClick={handleClick}>
                    {clicked && <List person={person}/>}
                </div>}
            </div>
        </div>
    );

}

// TODO: when clicked, show tooltip of name + random names

// TODO: if selected name correct, return Win message

export default App;
