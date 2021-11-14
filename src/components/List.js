function List(props) {
    return  (
        <div className="list">
            <ul className="no-bullet">
                {props.list.map(person => {
                    return <li key={person} onClick={() => props.checkPerson(person)}>{person.replaceAll("'",'')}</li>
                })}
            </ul>
        </div>
    )
}

export default List;