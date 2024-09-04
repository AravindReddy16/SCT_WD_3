import React,{useState,useEffect} from "react";
import "../styles/main.css";

export default function Main(){
    let [game,setGame] = useState({1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""})
    let [buttons,setButtons] = useState([1,2,3,4,5,6,7,8,9])
    let [chance,setChance] = useState("X")
    let [over,setOver] = useState(null)

    useEffect(() => {
        gameover();
    },[game])

    function clickHandler(e){
        if(game[e] === ""){
            if(chance==="X"){
                setGame(prev => ({...prev,[e]:chance}))
                setChance("O")
            }else {
                setGame(prev => ({...prev,[e]:chance}))
                setChance("X")
            }
        }
    }

    function gameover() {
        for(let i=0;i<3;i++){
            if((game[1+(3*i)] === "X" && game[2+(3*i)] === "X" && game[3+(3*i)] === "X") || (game[1+i] === "X" && game[4+i] === "X" && game[7+i] === "X") || (game[1] === "X" && game[5] === "X" && game[9] === "X") || (game[3] === "X" && game[5] === "X" && game[7] === "X")){
                setOver("X")
            }
            if ((game[1+(3*i)] === "O" && game[2+(3*i)] === "O" && game[3+(3*i)] === "O") || (game[1+i] === "O" && game[4+i] === "O" && game[7+i] === "O") || (game[1] === "O" && game[5] === "O" && game[9] === "O") || (game[3] === "O" && game[5] === "O" && game[7] === "O")){
                setOver("O")
            }
        }
    }

    function reset(){
        setGame({1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""})
        setChance("X")
        setOver(null)
    }
    
    return (
        <div className="main">
            <div className="gamebox">
                <div className="header">
                    <h1>Tic-Tac-Toe</h1>
                </div>
                <div className="gameclicks">
                    {over === null ? buttons.map(e => <button key={e} onClick={() => clickHandler(e)}>{game[e]}</button>) : <h1>{over} Win's</h1>}
                </div>
                <div className="gamecontrols">
                    <div className="player">
                        <p>Player "{chance}" Turn's</p>
                    </div>
                    <div className="reset">
                        <button onClick={reset}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}