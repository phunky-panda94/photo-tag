function List(props) {
    return  (
        <div className="list">
            <ul className="no-bullet">
                {props.list.map(person => {
                    return <li key={person}>{person}</li>
                })}
            </ul>
        </div>
    )
}

export default List;