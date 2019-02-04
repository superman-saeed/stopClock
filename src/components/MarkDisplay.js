import React from 'react';

// to display a list of clocked timers
class MarkDisplay extends React.Component{
	render(){
		const items =this.props.list.map(
			(item,index)=><li key={index}>{item}</li>
		)
		return(
		  <ol>{items}</ol>
		);
	}
}
export default MarkDisplay;
