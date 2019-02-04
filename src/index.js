import React from 'react';
import ReactDOM from 'react-dom';
import TimerDisplay from './components/Display';
import BtnDisplay from './components/BtnDisplay';
import MarkDisplay from './components/MarkDisplay';
import  './stylesheets/index.css';

// to set state to default
const INITSTATE={
			min:0,
			sec:0,
			msec:0,
			timer:false,
			mark:[],
			timer_pause:false
		};

class App extends React.Component{


	constructor(props){
		super(props);
		this.startClick = this.startClick.bind(this);
		this.pauseClick = this.pauseClick.bind(this);
		this.remarkClick = this.remarkClick.bind(this);
		this.state = INITSTATE;// creating to recall timer chamges
	}
	// reset ticking Clock
	resetClock(){
		this.setState (INITSTATE);
	}
	// to start the timer
	startClick(){
		if(!this.state.timer){// if timer not running, start it.
		this.setState({sec:1,timer:true});
        // start counting
		 this.startTimer(this);
		}else{
			this.stopTimer();// else stop timer if its running
		}
	}

	startTimer(){
		this.timerID = setInterval(
		  () => this.tick(),
		  1000
		);
	}
	stopTimer(){
		// check if timer has been clear
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
	  if(this.state.timer){
		  const item =`${this.state.min}min ${this.state.sec}sec`;
		  this.setState((state,props)=>{mark:state.mark.push(item)});

	  }
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
		 <TimerDisplay
			 min={this.state.min}

			 sec={this.state.sec}

			 msec={this.state.msec}
		 />
		 <div><hr/>
		 <BtnDisplay
		 start_name={(this.state.timer)?'stop':'start'}
		 pause_name={(this.state.timer_pause)?'resume':'pause'}
		 startClick={this.startClick}
		 pauseClick={this.pauseClick}
		 remarkClick={this.remarkClick}
		  />
		  </div>
		  <MarkDisplay list={this.state.mark} />
		  </div>
		 </div>
		);
	}

}





ReactDOM.render(<App />,
		document.getElementById('root')
);
