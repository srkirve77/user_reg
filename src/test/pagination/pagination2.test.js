// import React from "react";
// import Pagination from'../../pagination/pagination'
// import { shallow } from 'enzyme';
// import { ExpansionPanelActions } from "@material-ui/core";
// import sinon from 'sinon';
// import { render, mount } from 'enzyme';
// import Button from '@material-ui/core/Button';
// React.useLayoutEffect = React.useEffect 

// describe('Pagination', ()=>{
//     const onPage = () => {};
//     const currentPage = 1;
//     const totalPages = 10;

//     let tree;
//     beforeEach(() => {
//         tree = shallow(<Pagination onPage = {onPage} currentPage = {currentPage} totalPages = {totalPages}/>);        
//     }),

//     it('"skip to" button functionality', () => {
//         const input = tree.find('input');
//         //console.log(input);
//     }),

//     it('After clicking on Back button when current page is at 1 it should be 1 only',()=>{
//         //const tree.find("#forward-button");
//         const button = tree.find("#forward-button").props().onClick();
//         const label = tree.find('div.pagelabel').text();
//         //console.log(label);
//         //console.log(button);
//         //console.log(currentPage);    
//         //expect(currentPage).to.equal("2");
//     })

// })
