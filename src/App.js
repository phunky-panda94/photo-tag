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
        event.preventDefault();
        if (clicked) {
            event.target.style.borderColor = '#4c843c';
            setClicked(false)
        } else {
            event.target.style.borderColor = '#a4d454';
            setClicked(true);
        }

    }

    function checkPerson(selectedPerson) {

        selectedPerson === person ? window.alert('Correct!') : window.alert('Oops. Try again!');
        setScore(score + 1);

    }

    return (
        <div className="container flex flex-col flex-ai-c" >
            <h1>Guess Who?</h1>
            <h2>Score: {score}</h2>
            <div className="photo flex flex-col flex-jc-c">
                <img alt="group" src="/group.jpg" onMouseMove={checkCoordinates}></img>
                {inZone && <div className="outline" style={position} onClick={handleClick}>
                    {clicked && <List list={getRandomNamesList(person)} checkPerson={checkPerson}/>}
                </div>}
            </div>
        </div>
    );

}

export function getRandomNamesList(person) {

    let namesList = [person];
    let name;
    let randomIndex;

    // loop until 5 names in list
    while (namesList.length < 5) {

        // get random name from names
        randomIndex = Math.floor(Math.random(0,1) * (coordinates.length - 1))
        name = coordinates[randomIndex][2]

        // skip if name already in list 
        if (!namesList.includes(name)) {
            namesList.push(name);
        } else {
            continue;
        }

    }

    randomise(namesList);

    return namesList

}

export function randomise(list) {

    let temp;
    let randomIndex;

    for (let i = 0; i < list.length; i++) {
        temp = list[i];
        randomIndex = Math.floor(Math.random(0,1) * (list.length - 1));
        list[i] = list[randomIndex];
        list[randomIndex] = temp;
    }

}

// TODO: refactor to use Person object and store in backend

// Kiri Campos, Romeo Finch

export default App;
