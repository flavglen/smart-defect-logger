/// <reference types="cypress" />

context('demoForm', () => {
        const testTempalte = [{
            testdescription: 'should check first form',
            type:'staticText',
            wrapper:'.wrapper',
            toTest:[
            {
                element: 'h3',
                text:'Demo Formd',
                message:'main element not found'
            },
            {
                element: 'h4',
                text:'Saple sub titile',
                message:'sub element not found'
            }
        ]
    }]

        beforeEach(() => {
        cy.visit('http://localhost:4200/page1')
        });
    
   // this is rough idea 
        testTempalte.forEach(testcase =>{
            it(testcase.testdescription,  () => {
                const { softExpect } = chai;
                cy.get(testcase.wrapper).within(($el) => {  //wrapper element
                    testcase.toTest.forEach( condtion =>{  //loops though condtions
                        cy.get(condtion.element).each($elem =>{
                            softExpect($elem[0].textContent ,condtion.message , condtion.testdescription).to.eq(condtion.text);
                            cy.screenshot()
                        })  ; 
                });
            });
        })
    })
});
