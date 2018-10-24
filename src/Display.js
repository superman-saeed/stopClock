import React from 'react';


class TimerDisplay extends React.Component{
	// Display stopclock secound and minute count
	render(){
		return(
		 <div className='time-display'>
		  <h1>{`${this.props.min}m`}</h1>
		  <h1>{`${this.props.sec}s`}</h1>
		 </div>
		);
	}
	
}
export default TimerDisplay;