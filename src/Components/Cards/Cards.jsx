import "./Cards.css"

const Cards = (props) => {
    return (
        <div>
            <div className="cards">
                        <h2>{props.first}</h2>
                        <p>{props.text}</p>
                    </div>
        </div>
    )
}

export default Cards