/// <reference types="Cypress" />

import prop from '../../fixtures/prop.js'
import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage'
import CheckoutPage from '../../support/pageObjects/CheckouPage'
const {
name,url,gender,productName,successMessage,country
}=prop.value


describe("Test suite",function() {
    beforeEach(function () {
        cy.fixture('properties').then(function(data) {
            this.data=data;
            
        })
        
    })

    const homepage = new HomePage()
    const productsPage = new ProductsPage()
    const checkoutPage = new CheckoutPage()
it('end to end',function() {

    cy.visit(Cypress.env('url'))
    homepage.getEditBox().type(name)
    homepage.getGender().select(gender)
    homepage.getTwowayDataBinding().should('have.value', name)
    homepage.getEditBox().should('have.attr','minlength','2')
    homepage.getEntrepreneaur().should('be.disabled')
    homepage.getSubmitbutton().click()
    homepage.getSuccessBanner().should('be.visible').contains(successMessage)
    homepage.getShopTab().click()

})

it("shopPage", function(){
  
   //javascript array foreach - When we need to select multiple elements
    productName.forEach(function(element) {
        cy.log(element)  
     //from custom commands
     cy.selectProduct(element)
    })

   
    productsPage.CheckoutButton().click()
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{

      
        const amount=$el.text()
        var result = amount.split(' ')
        result = result[1].trim()
      
        sum= Number(sum) + Number(result)
     //asynchronous- Promise solving JS   
    }).then(function(){
        cy.log(sum)
    })
    cy.get('h3 strong').then(function(element){

        const amount=element.text()
        var result = amount.split(' ')
        var totalAmount= result[1].trim()
        cy.log(totalAmount)
        expect(sum).to.equal(Number(totalAmount))
    })  

})


it("CheckoutPage", function(){
   checkoutPage.getCheckoutButton().click()
   checkoutPage.getCountryText().type(country)
   checkoutPage.pickCountry().click()
   checkoutPage.getCheckbox().click({force:true})
   checkoutPage.getPurchaseButton().click()
   checkoutPage.getSuccessBanner().should('be.visible').contains(successMessage)


 
})
})

