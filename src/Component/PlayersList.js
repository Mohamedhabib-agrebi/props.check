import players from "../players";
import PlayersCard from "./PlayersCard"
const PlayersList=()=> {
    return (
        <div>
            <h1>PlayerList Component</h1>
            <div className="habb">
            {
                players.map((el,i,t)=> <PlayersCard key={i} el={el}/>  )
            }
            </div>
        </div>
    )
}
export default PlayersList