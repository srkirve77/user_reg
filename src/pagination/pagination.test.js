import React from "react";
import Pagination from'./pagination'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enzyme from 'enzyme';

enzyme.configure({ adapter: new Adapter() })

describe('Pagination', ()=>{
    
     const onPage = jest.fn();
     const currentPage = 1;
     const totalPages = 10;
     
   let tree;
   beforeEach(() => {
        jest.clearAllMocks();
        tree = shallow(<Pagination onPage = {onPage} currentPage = {currentPage} totalPages = {totalPages}/>);
   }),

   it('should have input type as Number',()=>{
    expect(tree.find('input').getElement().props.type).toBe('number');
   }),

   it('The name of button should be "skip to"',()=>{
    expect(tree.find('WithStyles(ForwardRef(Button))').getElement().props.children).toBe('skip to');
   }),
   
   it('The name of button should be "skip to"',()=>{
    const button = tree.find('Memo(ForwardRef(ArrowBackIosIcon))').getElement().props;
    button.onClick();
    expect(currentPage).toBe(1);
   }),

   it('The text in label should be according currentpage and totalpage',()=>{
    const label = tree.find('div.pagelabel').text();
    expect(label).toBe('page 1 of 10');
   }),
   
   it('After clicking on Back button when current page is at 2 it should call onPage',()=>{
    tree = shallow(<Pagination onPage = {onPage} currentPage = {2} totalPages = {totalPages}/>);
    tree.find("#backward-button").props().onClick();
    expect((onPage)).toHaveBeenCalledTimes(1);
   }),

   it('After clicking on Back button when current page is at 1 it should Not  call onPage',()=>{
    tree.find("#backward-button").props().onClick();
    expect((onPage)).toHaveBeenCalledTimes(0);
   }),

   it('After clicking on Forward button when current page is at 2 it should call onPage',()=>{
    tree = shallow(<Pagination onPage = {onPage} currentPage = {2} totalPages = {totalPages}/>);
    tree.find("#forward-button").props().onClick();
    expect((onPage)).toHaveBeenCalledTimes(1);
   }),

   it('After clicking on Forward button when current page is at last page it should Not  call onPage',()=>{
    tree = shallow(<Pagination onPage = {onPage} currentPage = {totalPages} totalPages = {totalPages}/>);
    tree.find("#forward-button").props().onClick();
    expect((onPage)).toHaveBeenCalledTimes(0);
   })

})  