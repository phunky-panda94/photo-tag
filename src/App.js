import './App.css';

function App() {
  return (
    <div className="container flex flex-col flex-ai-c">
        <h1>Guess Who?</h1>
        <div className="photo flex flex-col flex-jc-c">
            <img alt="group" src="/group.jpg" onClick={getCoordinates}></img>
        </div>
    </div>
  );
}

function getCoordinates(event) {
    console.log(`${event.clientX},${event.clientY}`);
}

// TODO: get center coordinates of each face

// TODO: if click within radius of center, highlight clicked area

// TODO: when clicked, show pop-up list of name + random names

// TODO: if selected name correct, return Win message

export default App;
