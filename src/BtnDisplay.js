import React from 'react';


class BtnDisplay extends React.Component{
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
export default BtnDisplay;