import './App.css';
import List from './components/List';
import Outline from './components/Outline';
import { useState, useEffect } from 'react';

// TODO: if person already correctly guessed, set outline to light green
// 1̶.̶ ̶ ̶ ̶a̶d̶d̶ ̶o̶u̶t̶l̶i̶n̶e̶ ̶t̶o̶ ̶e̶v̶e̶r̶y̶ ̶p̶e̶r̶s̶o̶n̶
// 2̶.̶ ̶ ̶ ̶i̶f̶ ̶i̶n̶ ̶z̶o̶n̶e̶ ̶a̶n̶d̶ ̶n̶o̶t̶ ̶a̶l̶r̶e̶a̶d̶y̶ ̶o̶u̶t̶l̶i̶n̶e̶d̶,̶ ̶d̶i̶s̶p̶l̶a̶y̶ ̶o̶u̶t̶l̶i̶n̶e̶
// 2.1  when clicked, lock outline, change color to light green and display names list 
// 2.2  if correctly guessed, set outline to stay on screen
// 3.   if in zone and already outlined, display name 

function App() {
  
    const [score, setScore] = useState(0);
    const [people, setPeople] = useState();
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {

            console.log('fetching data...');

            try {
                let api = 'http://localhost:8000/data'
            
                const response = await fetch(api, {mode: 'cors'})
                const responseData = await response.json();
                
                setPeople(responseData);
                setDataLoaded(true);
                
                console.log('data successfully retrieved');

            } catch(err) {
                console.error('Unable to fetch data', err);
            }

        }
        
        fetchData();

    }, [])

    return (
        dataLoaded && <div className="container flex flex-col flex-ai-c">
            <h1>Guess Who?</h1>
            <h2>Score: {score}</h2>
            <div className="photo flex flex-col flex-jc-c">
                <img alt="group" src="/group.jpg"></img>
                {people.map(person => {
                    let position = {
                        left: person.x - 25,
                        top: person.y - 40
                    }
                    return (
                        <Outline key={person.name} person={person} position={position} >
                            <List list={getRandomNamesList(person.name, people)} correctPerson={person.name} score={score} setScore={setScore} />
                        </Outline>
                    )
                })}
            </div>
        </div>
    );

}

export function getRandomNamesList(person, list) {

    let namesList = [person];
    let name;
    let randomIndex;

    // loop until 5 names in list
    while (namesList.length < 5) {

        // get random name from names
        randomIndex = Math.floor(Math.random(0,1) * (list.length - 1))
        name = list[randomIndex].name

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

export default App;
