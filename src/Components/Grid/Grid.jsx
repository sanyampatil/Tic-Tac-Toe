import { useState } from "react";
import Card from "../Card/Card";
import './grid.css'
import isWinner from "../../helpers/CheckWinner";

function Grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn,setturn]=useState(true);
    const [winner,setWinner]=useState(null)
    function Play(index){

        if(turn==true){
            board[index]="O";
        }else{
            board[index]="X";
        }
        const win=isWinner(board,turn? "O": "X")
        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setturn(!turn);
    }
    function reset(){
        setBoard(true)
        setWinner(null)
        setBoard(Array(numberOfCards).fill(""))

    }
        return (
            <div className="grid-wrapper">
        {
            winner &&(
                <>

                <h1 className="turn-highlight">winner is {winner}</h1>
                <button className="reset" onClick={reset}>Reset Game</button>
                </>
            )
        }
        <h1 className="turn-highlight">Current turn:{(turn)? "O":"X"}</h1>

            <div className="grid">
                {board.map((el, idx) => <Card gameEnd={winner? true : false}key={idx} onplay={Play} player={el} index={idx}/>)}

            </div>
        </div>
    )
}
export default Grid;