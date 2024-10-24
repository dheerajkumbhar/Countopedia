import React  from "react";
import defend from "./Images/defence.png";
import attack from "./Images/battle.png";

export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAttack= this.handleAttack.bind(this);
        this.handleDefence= this.handleDefence.bind(this);
        this.state={
            count:0,
            gameStatus:"",
            lastPlay:"",
        }
    }
    handleAttack=()=>{
        // alert("Attack clicked");
        this.setState((previousState)=>{
            let newCount= previousState.count + Math.round(Math.random() * 10);
            return{           
                count:newCount,
                lastPlay:"Attack",
                gameStatus: newCount >10 ? "You Won!!!":previousState.gameStatus,
            };
        });
    }
    handleDefence=()=>{
        // alert("Defence clicked");
        this.setState((previousState)=>{
            let newCount = previousState.count - Math.round(Math.random() * 10);
            return{
                count:newCount,
                lastPlay:"Defence",
                 gameStatus: newCount < -10 ? "You Lost!!!":previousState.gameStatus,
            };
        });
    }
    handleRandomPlay=()=>{
        let playMode = Math.round(Math.random());
        if(playMode === 0){
            this.handleAttack();
        }
        else{
            this.handleDefence();
        }
    }

    handleReset=()=>{
        this.setState(()=>{
            return{
                count:0,
                lastPlay:"",
                gameStatus:"",
            };
        });
    }
    render(){
        return(
            <div className="row text-white text-center">
            <h1>Game Score: {this.state.count}</h1>
            <p>You will Win at +10 and lose at -10 Points!!</p>
            <p>Last Play:{this.state.lastPlay}</p>
            <h3>Game Status:{this.state.gameStatus}</h3>
            
            {/* Wrapping the images in a flex container to center them */}
            <div className="d-flex justify-content-center px-3">
                <div className="col-6 col-md-3 mx-3">
                    <img 
                        style={{ width: "100%", cursor: "pointer", border: "1px solid green" }} 
                        className="p-4 rounded" 
                        src={attack} 
                        onClick={this.handleAttack}
                    />
                </div>
                <div className="col-6 col-md-3 mx-3">
                    <img 
                        style={{ width: "100%", cursor: "pointer", border: "1px solid red" }} 
                        className="p-4 rounded" 
                        src={defend} 
                        onClick={this.handleDefence}
                    />
                </div>
            </div>
        
            <div className="col-12 col-md-4 offset-md-4">
                <button className="btn btn-secondary w-100 mt-2" onClick={this.handleRandomPlay}>Random Play</button><br/>
                <button className="btn btn-warning w-100 mt-2" onClick={this.handleReset}>Reset</button>
            </div>
        </div>
        )
    }
}