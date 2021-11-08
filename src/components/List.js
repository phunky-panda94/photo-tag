function List(props) {
    return  (
        <div className="list">
            <ul className="no-bullet">
                <li>{props.person}</li>
            </ul>
        </div>
    )
}

export default List;