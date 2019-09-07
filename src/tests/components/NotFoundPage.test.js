import React from 'react';
import { shallow } from 'enzyme';
import { NotFoundPage } from '../../components/notFoundPage';
 


test ('should render Notfoundpage correctly',() =>{
    const wrapper = shallow (< NotFoundPage/>);
    expect (wrapper).toMatchSnapshot();
});
