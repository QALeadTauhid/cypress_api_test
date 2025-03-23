describe("HTTP Requests", ()=>{

    it("Get Request", ()=>{
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200);
    })

    it("Post Request", ()=>{
        cy.request({
            method:'POST', 
            url:'https://jsonplaceholder.typicode.com/posts/',
            body: {
                title: "Test Post method",
                body: "This is a post method body",
                userid: 101020

            }
        })
        .its('status')
        .should('equal', 201);
    })


    it("Put request", ()=>{
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: "This is a updated tite for testing",
                body: 'This is a body without head for testing',
                userid: 101020,
                id: 1

            }
        })
        .its('status')
        .should('equal', 200);
    })

    it("Delete Request", ()=>{
        cy.request({
            method: "DELETE",
            url: "https://jsonplaceholder.typicode.com/posts/1"
        })
        .its("status")
        .should('equal', 200);
    })

})