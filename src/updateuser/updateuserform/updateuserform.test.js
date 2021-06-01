import React from "react";
import UpdateUserForm from'./updateuserform'
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';

describe('Update User Form', ()=>{
    
    let tree;
    const CloseButton = jest.fn()
    const user = { "id":1, "name":"sam", "email":"abc", "gender":"male", "status":"active"}
    beforeEach(() => {
            jest.clearAllMocks();
            tree = shallow(<UpdateUserForm CloseButton = {CloseButton} user = {user}/>);
    }),

    it('Verify Save button text',()=>{
        var submitButton = tree.find(Button).getElements()[0];
        expect(submitButton.props.children).toBe('Save');
    }),

    it('Verify Cancel button text',()=>{
        var submitButton = tree.find(Button).getElements()[1];
        expect(submitButton.props.children).toBe('Cancel');
    }),

    it('Verify Gender Options',()=> {
        var genderInputField = tree.find('div.formfield').getElements()[2];
        var selectOption = genderInputField.props.children[1];
        var optionsArray = selectOption.props.children;
        expect(optionsArray[0].props.value).toBe("Male");
        expect(optionsArray[1].props.value).toBe("Female");
    }),

    it('Verify Status Options',()=> {
        var statusInputField = tree.find('div.formfield').getElements()[3];
        var selectOption = statusInputField.props.children[1];
        var optionsArray = selectOption.props.children;
        expect(optionsArray[0].props.value).toBe("Inactive");
        expect(optionsArray[1].props.value).toBe("Active");
    }),

    it('Verify input type of Name in Add user form', () => {
        var nameInputField = tree.find('div.formfield').getElements()[0];
        var nameInputDiv = nameInputField.props.children[1];
        expect(nameInputDiv.props.type).toBe('text');
    }),

    it('Verify input type of Email in Add user form', () => {
        var emailInputField = tree.find('div.formfield').getElements()[1];
        var emailInputDiv = emailInputField.props.children[1];
        expect(emailInputDiv.props.type).toBe('text');
    })

})