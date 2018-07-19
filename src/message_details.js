import React from 'react';
import data from './message.json';

export default class MessageDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className='col-md-9'>
            <h1>{this.props.onClick.title}</h1>
            <small>{this.props.onClick.from}</small>
            <p>{this.props.onClick.content}</p>
        </div>);
    }
}