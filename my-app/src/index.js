import React from 'react';
import ReactDOM from 'react-dom';

// function formatDate(date) {
//     return date.toLocaleDateString();
//   }
// function Welcome(props){
//     return <h1>hello, {props.name}</h1> 
// }
// function App(){
//     return (
//         <div>
//             <Clock />
//             <Clock />
//             <Clock />
//         </div>
//     );
// }

// function Comment(props){
//     return (
//         <div className = "Comment">
//             <UserInfo user = {props.author}></UserInfo>
//             <div className = "Comment-text">
//                 {props.text}
//             </div>
//             <div className = "Comment-data">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }

// function Avatar(props){
//     return (<img className = "Avator" src = {props.user.avatarUrl} alt= {props.user.name}></img>);
// }

// function UserInfo(props){
//     return (
//         <div className = "UserInfo">
//             <Avatar user = {props.user} />
//             <div className = "UserInfo-name">
//                 {props.user.name}
//             </div>
//         </div>
//     );
// }
// const element = <Welcome name="sara"/>
// const commentInfo = {
//     date: new Date(),
//     text : "ASDASDASDASd",
//     author:{
//         name: "Zhiquan",
//         avatarUrl:"https://www.bing.com/th?id=OPN.RTNews_roWNdwVY4qSRQmvnvFaizw&w=372&h=176&c=7&rs=2&qlt=80&cdv=1&pid=PopNow"
//     },
// };

// // function Clock(props){
// //     return (
// //         <div> 
// //             <h1> hello, world</h1>
// //             <h2> It is {props.date.toLocaleTimeString()}.</h2>
// //         </div>
// //     );
// // }
// class Clock extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {date:new Date()};
//     }

//     tick(){
//         this.setState ({date:new Date()});
//     }

//     componentDidMount(){
//         this.TimerID = setInterval(
//             ()=>this.tick(),
//             10000
//         );
//     }
//     componentWillUnmount(){
//       clearInterval(this.TimerID);
//     }
//     render(){
//         return (
//             <div>
//                 <h1> Clock </h1>
//                 <h2> Time : {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// )

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn : true};
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick(){
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });
    }

    render(){
        return (
            <button onClick = {this.handleClick}>
                {this.state.isToggleOn ? "on" : "false"}
            </button>
        );
    }
}

ReactDOM.render(<Toggle/>,document.getElementById('root'));

// ReactDOM.render(<Comment date = {commentInfo.date} text = {commentInfo.text} author = {commentInfo.author}/>,document.getElementById('root'))

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { stat } from 'fs';

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: true,
//     };
//   }

//   renderSquare(i) {
//     return (
//       <Square
//         value={this.state.squares[i]}
//         onClick={() => this.onClick(i)}
//       />
//     );
//   }

//   render() {
//     const winner = calculateWinner(this.state.squares);
//     let status;
//     if (winner) {
//       status = "winner: " + winner;
//     } else {
//       status = "Next player: " + (this.state.xIsNext ? 'X' : 'O');
//     }

//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [{
//         squares: Array(9).fill(null),
//       }],
//       xIsNext : true
//     }
//   }
//   handleClick(i) {
//     const history = this.state.history
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       history: history.concat([{ squares: squares }]),
//       xIsNext: !this.state.xIsNext,
//     });
//   }
//   render() {
//     const history = this.state.history
//     const current = history[history.length - 1];
//     const winner = calculateWinner(current.squares);
//     let status;
//     if (winner) {
//       status = "Winner: " + winner;
//     } else {
//       status = "Next Player: " + (this.state.xIsNext ? "X" : "O");
//     }

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board squares={current}
//             onClick={(i) => this.handleClick(i)} />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// // ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );


// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];


//   for (let i = 0; i < lines.length; ++i) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }