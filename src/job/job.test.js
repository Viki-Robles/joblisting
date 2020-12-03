import Enzyme, { mount } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Job from '../job/job';

Enzyme.configure({ adapter: new Adapter()});

describe('Job Component', () => {
    const onCountChange = jest.fn();
   
    let wrapper;
    beforeEach(() => {
    wrapper = mount(<Job onCountChange={onCountChange}/>)
    })
    it('renders', () => {
        expect(wrapper).toBeDefined()

    })
})
