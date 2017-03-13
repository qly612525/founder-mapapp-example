import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

/*========================================
=            Component import            =
========================================*/
// UI组件，必须为无状态组件


/*=====  End of Component import  ======*/
@inject('counter') @observer
export default class CounterView extends Component {

    constructor() {
        super();
        this.onIncreament = this.onIncreament.bind(this);
        this.onDecreament = this.onDecreament.bind(this);
    }

    render() {
        return (
            <div className='counterview'>
                <p>Counter: {this.props.counter.counter}</p>
                <p>Counter: {this.props.counter.counterT}</p>
                <button onClick={this.onIncreament}>+</button>
                <button onClick={this.onDecreament}>-</button>
            </div>
        );
    }

    onIncreament() {
        this.props.counter.increament();
    }

    onDecreament() {
        this.props.counter.decreament();
    }
}
