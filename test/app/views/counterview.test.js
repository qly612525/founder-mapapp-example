import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CounterView from 'src/views/counterview';
import CounterStore from 'src/stores/counterstore';

const counter = new CounterStore();

describe('views/counterview', () => {
    it('counterview first tag should be <p>', () => {
        const counterview = shallow(<CounterView.wrappedComponent counter={counter} />);
        expect(counterview.find('p').length).to.equal(2);
    });
});
