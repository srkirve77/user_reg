import React from "react";
import Pagination from'../../pagination/pagination'
import { shallow } from 'enzyme';
import { ExpansionPanelActions } from "@material-ui/core";
import { expect } from 'chai';
import { render } from '@testing-library/react'
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';


enzyme.configure({ adapter: new Adapter() });
describe('pagination', ()=>{
   it('should not go backward than zero',()=>{
    const mockCallBack = sinon.spy();
    const pagination = shallow(<Pagination />)    
    pagination.find('skip to').simulate('click');
    //console.log(container)
    expect(mockCallBack).toHaveProperty('callCount', 1);
    //expect(tableRow).to.have.lengthOf(7);
   })
})