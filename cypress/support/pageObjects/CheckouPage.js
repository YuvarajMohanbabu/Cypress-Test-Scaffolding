class ProductsPage{

    getCheckoutButton(){
        return cy.get('button.btn.btn-success')
    }
    getCountryText(){
        return cy.get('#country')
    }
    pickCountry(){
        return cy.get('.suggestions > ul > li > a')
    }
    getCheckbox(){
        return cy.get('#checkbox2')
    }
    getPurchaseButton(){
        return cy.get('[type="submit"]')
    }
    getSuccessBanner(){
        return cy.get('.alert')
    }

}
export default ProductsPage;