/// <reference types="Cypress" />

import prop from '../../fixtures/prop.js'

const {
name,url,gender,productName
}=prop.value

describe("Test suite",function() {
    beforeEach(function () {
        cy.fixture('properties').then(function(data) {
            this.data=data;
            
        })
        
    })

it('end to end',function() {

    cy.visit(url)
    cy.get('input[name="name"]:nth-child(2)').type(name)
    cy.get("select").select(gender)
    cy.get(':nth-child(4) > .ng-untouched').should('have.value', name)
    cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
    cy.get('#inlineRadio3').should('be.disabled')
    cy.get('[class="btn btn-success"]').click()
    cy.get('.alert').should('be.visible').contains("Success!")
    cy.get(':nth-child(2) > .nav-link').click()
   
  

})

it("shopPage", function(){
  
   //javascript array foreach - When we need to select multiple elements
    productName.forEach(function(element) {
        cy.log(element)  
     //from custom commands
     cy.selectProduct(element)
    })

        
       
    

    

})
 
})

