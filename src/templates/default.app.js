import React, { Component, PropTypes } from 'react';
import { Provider } from 'mobx-react';

/*====================================
=           views import             =
====================================*/
import CounterView from '../views/counterview';

/*=====  End of views import  ======*/

/*=========================================
=            state managements            =
=========================================*/
import CounterStore from '../stores/counterstore';

const counter = new CounterStore();
/*=====  End of state managements  ======*/



export default class App extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        return (
            <div className='default-template'>
                <Provider counter={ counter }>
                    <CounterView />
                </Provider>
            </div>
        );
    }
}
