import React, { Component } from 'react';

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = { score: 0 };
        this.singleKill = this.singleKill.bind(this);
        this.TripleKill = this.TripleKill.bind(this);
    }
    singleKill() {
        this.setState({ score: this.state.score + 1 })
    }
    // TripleKill() {
    //     this.setState({ score: this.state.score + 1 })
    //     this.setState({ score: this.state.score + 1 })
    //     this.setState({ score: this.state.score + 1 })
    // }
    //  TripleKill() {
    //     this.setState(st=>{
    //         return {score:st.score+1};
    //     });
    //     this.setState(st=>{
    //         return {score:st.score+1};
    //     });
    //     this.setState(st=>{
    //         return {score:st.score+1};
    //     });
    // }

    incrementScore(curState){
        return {score:curState+1};
    }
    TripleKill(){
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }

    render() {
        return (
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill!</button>
                <button onClick={this.TripleKill}>Triple Kill!</button>
            </div>
        )
    }
}

export default ScoreKeeper;