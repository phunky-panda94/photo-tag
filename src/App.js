import env from 'react-dotenv';
import './App.css';
import List from './components/List';
import Outline from './components/Outline';
import { useState, useEffect } from 'react';

function App() {
  
    const [score, setScore] = useState(0);
    const [people, setPeople] = useState();
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {

            console.log('fetching data...');

            try {
                let api = `${env.SERVER}/data`;
            
                const response = await fetch(api, { mode: 'cors' })
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
