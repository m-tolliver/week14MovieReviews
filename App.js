import React from "react";
import "style.css";

export default function App() {
    const [likes, setLikes] = React.useState(5);
    const [isSubtracting, setIsSubtracting] = React.useState(false);

    return (
        <div className="App">
          <h3>Likes {likes}</h3>
          <button onClick={()=> setLikes(likes + 1)}> Like </button>  
        </div>
    )
} 


function Profiles() {
    return (
        <div>
            <img src={props.image} alt={props.name} width="200" />
            <img src="C:\Users\melin\Downloads\aquaman_and_the_lost_kingdom.htm" />
            <img src="C:\Users\melin\Downloads\I.S.S. _ Rotten Tomatoes_files" />
            {props.profilePage ? <a href={props.profilePage}>View Profile</a>}
        </div>
    );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<Profiles />, rootElement);