import React from 'react';
import ReactDOM from 'react-dom';
import  './index.css';


class Timer_display extends React.Component{
	// Display stopclock count
	render(){
		return(
		 <div className='time-display'>
		  <h1>{`${this.props.min}m`}</h1>
		  <h1>{`${this.props.sec}s`}</h1>
		 </div>
		);
	}
	
}
class Btn_display extends React.Component{
	render(){
		return(
			<div className='btn-display'>
			<button onClick={this.props.startClick}>
			{this.props.start_name}
			</button>
			<button onClick={this.props.pauseClick}>
			{this.props.pause_name}
			</button>
			<button onClick={this.props.remarkClick}>
			 mark
			</button>
			</div>
		);
	}
	
}
class Mark_display extends React.Component{
	render(){
		const items =this.props.list.map(
			(item)=><li>{item}</li>
		)
		return(
		  <ul>{items}</ul>
		);
	}
}
class App extends React.Component{
	constructor(props){
		super(props);
		this.startClick = this.startClick.bind(this);
		this.pauseClick = this.pauseClick.bind(this);
		this.remarkClick = this.remarkClick.bind(this);
		this.state ={
			min:0,
			sec:0,
			msec:0,
			timer:false,
			mark:[],
			timer_pause:false
		};
	}
	// reset ticking Clock
	resetClock(){
		this.setState ({
			min:0,
			sec:0,
			msec:0,
			timer:false,
			mark:[],
			timer_pause:false
		});
	}
	startClick(){
		if(!this.state.timer){
		this.setState({sec:1,timer:true});
        // start counting		
		 this.startTimer(this);
		}else{
			this.stopClick();
		}
	}
	
	startTimer(){
		this.timerID = setInterval(
		  () => this.tick(),
		  1000
		);
	}
	stopClick(){
		// check if clock is pause
		if(this.state.timer_pause){
			this.resetClock();
		}else{
		clearInterval(this.timerID);
		    this.resetClock();
		}
		
		
	}
	pauseClick(){
		//check if clock is ticking
		if(this.state.timer && !this.state.timer_pause){
			
			clearInterval(this.timerID);//stop the ticking
			this.setState({timer_pause:true});
		} else if(this.state.timer_pause){
			this.setState({timer_pause:false});
			this.startTimer();
			
			
		}
			
	}
	remarkClick(){
	  const item =`${this.state.min}min ${this.state.sec}sec`; 
	  this.setState((state,props)=>{mark:state.mark.push(item)});
	}
	componentDidMount() {

	}

	componentWillUnmount() {
	clearInterval(this.timerID);
	}
  
	tick() {

		if(this.state.sec !==60){
			this.setState((state,props)=>({
				sec:1 + state.sec 
			  }));
		}else{
			this.setState((state,props)=>({
			min:1 + state.min,
			sec:0
			}));
		}
	}
	render(){
		return(
		 <div className='app'>
		 <h1>Stop watch</h1><hr/>
		 <div className='content'>
		 <Timer_display 
			 min={this.state.min} 
			 
			 sec={this.state.sec}
			 
			 msec={this.state.msec}
		 />
		 <div><hr/>
		 <Btn_display 
		 start_name={(this.state.timer)?'stop':'start'}
		 pause_name={(this.state.timer_pause)?'resume':'pause'}
		 startClick={this.startClick} 
		 pauseClick={this.pauseClick}
		 remarkClick={this.remarkClick}
		  />
		  </div>
		  <Mark_display list={this.state.mark} />
		  </div>
		 </div>
		);
	}
	
}





ReactDOM.render(<App />,
		document.getElementById('root')
);