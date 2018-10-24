import React from 'react';


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