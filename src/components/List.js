function List(props) {

    const {list, correctPerson, score, setScore, setGuessed} = props;

    function checkPerson(selectedPerson) {

        if (selectedPerson === correctPerson) {
            window.alert('Correct!');
            setScore(score + 1);
            setGuessed(true);
        } else {
            window.alert('Oops. Try again!');
        }

    }

    return  (
        <div className="list">
            <ul className="no-bullet">
                {list.map(person => {
                    return <li key={person} onClick={() => checkPerson(person)}>{person.replaceAll("'",'')}</li>
                })}
            </ul>
        </div>
    )
}

export default List;