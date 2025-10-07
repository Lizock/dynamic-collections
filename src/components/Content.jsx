export default function Content(props) { 
    return ( 
        <> 
            <h2>{props.content.name}</h2> 
            <p>Type: {props.content.type}</p> 
            <p>HP: {props.content.hp}</p> 
            <p>Attack: {props.content.attack}</p> 
            <p>Defense: {props.content.defense}</p> 
            <img src={props.content.image}></img> 
        </> 
    )
 }