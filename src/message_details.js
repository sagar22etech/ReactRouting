import React from 'react';
export default class MessageDetails extends React.Component {
 
    render() {
        return this.props.data ? (<div className='col-md-9'>
            <h1>{this.props.data.title}</h1>
            <small>{this.props.data.from}</small>
            <p>{this.props.data.content}</p>
        </div>)
            : null;
    }
}