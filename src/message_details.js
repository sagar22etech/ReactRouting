import React from 'react';
import data from './message.json';

export default class MessageDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return this.props.data ? (<div className='col-md-9'>
            <h1>{this.props.data.title}</h1>
            <small>{this.props.data.from}</small>
            <p>{this.props.data.content}</p>
        </div>)
            : null;
    }
}