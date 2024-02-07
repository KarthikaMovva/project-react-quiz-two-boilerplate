import {Component} from "react";
// import Arr from "../resources/quizQuestion";

class Quizpage extends Component{
 constructor(props){
    super(props)
    this.state={
        index : 0
    }
 }
 nextbutton = ()=>{
    let questionnumber=this.state.index;
  
    if(questionnumber==this.props.arr.length-1){
        this.setState({index : 0});
        // console.log(this.props.arr)
       
    }
    else{
        this.setState({index : questionnumber+1})
        // console.log(this.props.arr)
    }
 }
 prevbutton = ()=>{
    let questionnumber=this.state.index;

    if(questionnumber==0){
        this.setState({index : this.props.arr.length-1});
    }
    else{
        this.setState({index : questionnumber-1})
    }
}
 
quitbutton = ()=>{
    let questionnumber=this.state.index;
    alert("Are you sure you want to quit?")
    if(questionnumber==this.props.arr.length-1){
        this.setState({index : 0});
       
    }
    else{
    this.setState({index : questionnumber+1})}
}
 render(){
    let questionnumber=this.state.index;

    return(
        <div className="table"> 
            <h2 className="address">Question</h2>
             <p className="serialno">1 of 15</p>
            <h4 className="ques">{this.props.arr[questionnumber].question}</h4>
           <div className="option1">
                <p className="gap">{this.props.arr[questionnumber].optionA}</p>
                <p className="gap">{this.props.arr[questionnumber].optionB}</p>
            </div>
            <div className="option2">
                <p className="gap">{this.props.arr[questionnumber].optionC}</p>
                <p className="gap">{this.props.arr[questionnumber].optionD}</p>
            </div>
            <div className="option3">
                <button className="b first" onClick={this.prevbutton}>Previous</button>
                <button className="b second" onClick={this.nextbutton}>Next</button>
                <button className="b third" onClick={this.quitbutton}>Quit</button>
            </div>  
        </div>
    )
 }
}

export default Quizpage