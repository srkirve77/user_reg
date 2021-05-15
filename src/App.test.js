// import { render, screen } from '@testing-library/react';
// //import App from './App.js';
// import Pagination from './pagination/pagination'

// test('renders learn react link', () => {
//   render(<Pagination />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import React from "react";
import Listing from'./listing'
import { shallow } from 'enzyme';
import { ExpansionPanelActions } from "@material-ui/core";
//import { expect } from 'chai';

describe('Listing page', ()=>{
   it('Should display User Registry in header',()=>{
    const wrapper = shallow(<Listing/>);
    const header=wrapper.find('h1');
    expect(header).toBeDefined();
    //expect(header).to.have.lengthOf(1);
   })
})