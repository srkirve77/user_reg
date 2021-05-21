import React from "react";
import UserList from'./tablebody'
import { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enzyme from 'enzyme';
import { TableBody } from "@material-ui/core";

enzyme.configure({ adapter: new Adapter() })

describe('ListingUsers', ()=>{
   
     const pageNo = 1;
     const getTotalPages = jest.fn();
     const users = [ {"id":1, "name":"john"}]

     let tree;
     beforeEach(() => {
          jest.clearAllMocks();
          tree = shallow(<UserList pageNo = {pageNo} getTotalPages = {getTotalPages}/>);
     }),

     it('getUsers should have been called',()=>{
          expect(tree.find(TableBody).text()).toHaveLength(0);
     })

})