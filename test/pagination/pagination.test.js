import React from "react";
import Pagination from'../../src/pagination/pagination'
import { shallow } from 'enzyme';
import { ExpansionPanelActions } from "@material-ui/core";
import { expect } from 'chai';
import sinon from 'sinon';
import { render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enzyme from 'enzyme';

enzyme.configure({ adapter: new Adapter() })

describe('Pagination', ()=>{
   
    const onPage = () => {};
    const currentPage = 1;
    const totalPages = 10;

   let tree;
   beforeEach(() => {
        tree = shallow(<Pagination onPage = {onPage} currentPage = {currentPage} totalPages = {totalPages}/>);
   }),

   it('should have input type as Number',()=>{
    expect(tree.find('input').getElement().props.type).to.equal('number');
   }),

   it('The name of button should be "skip to"',()=>{
    expect(tree.find('WithStyles(ForwardRef(Button))').getElement().props.children).to.equal('skip to');
   }),
   
   it('The name of button should be "skip to"',()=>{
    const button = tree.find('Memo(ForwardRef(ArrowBackIosIcon))').getElement().props;
    button.onClick();
    expect(currentPage).to.equal(1);
   }),

   it('The text in label should be according currentpage and totalpage',()=>{
    const label = tree.find('div.pagelabel').text();
    expect(label).to.equal('page1of10');
   }),

   it('After clicking on Back button when current page is at 1 it should Not  call onPage',()=>{
      tree = shallow(<Pagination onPage = {onPage} currentPage = {currentPage} totalPages = {totalPages}/>);
      const button = tree.find("#backward-button").props();
      console.log(button);
      console.log(tree.debug());
    //const button = tree.find("#forward-button").props().onClick();
    //const label = tree.find('div.pagelabel').text();
    //console.log(label);
    //console.log(button);
    //console.log(currentPage);    
    //expect(currentPage).to.equal("2");
    }),

    it('After clicking on Back button when current page is at 2 it should  call onPage 1',()=>{
        //tree = shallow(<Pagination onPage = {onPage} currentPage = {2} totalPages = {totalPages}/>);
        //const tree.find("#forward-button");
        //const button = tree.find("#backward-button").props().onClick();
        //const label = tree.find('div.pagelabel').text();
        //console.log(label);
        //console.log(button);
        //console.log(currentPage);    
        //expect(currentPage).to.equal("2");
    })



})