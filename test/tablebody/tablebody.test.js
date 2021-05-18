import React from "react";
import UserList from'../../src/tablebody/tablebody'
import { shallow } from 'enzyme';
import { ExpansionPanelActions } from "@material-ui/core";
import { expect } from 'chai';

describe('User Listing page', ()=>{
   it('Should display 7 columns in table',()=>{
    const wrapper = shallow(<UserList/>);
    const tableRow=wrapper.find('TableRow');
    //expect(header).toBeDefined();
    //console.log(tableRow)
    expect(tableRow).to.have.lengthOf(0);
   })
})