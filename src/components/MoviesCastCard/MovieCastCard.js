
export const MovieCastCard = (props) => {
    return(
        <div>
            <img src={props.poster}/>
            <h1>{props.name}</h1>
            <p>{props.character}</p>
        </div>
    )
}