describe("API Tsting of POST methods", ()=>{
    it('Approach 1- Hard coded json object', ()=>{

    const rquestBody={
        tourist_name: "John",
        tourist_email: "john1234@gmail.com",
        tourist_location: "Paris"
        }
    cy.request({
        method: "POST",
        url: 'http://restapi.adequateshop.com/api/Tourist',
        body: rquestBody
    })
    .then((response)=>{
        expect(response.status).to.eq(201)
        expect(response.body.tourist_name).to.eq("John")
        expect(response.body.tourist_email).to.eq("john1234@gmail.com")
        expect(response.body.tourist_location).to.eq("Paris")

        })
    })

    it('Approach 2- Dynamically Generate json object', ()=>{

        const rquestBody={
            tourist_name: Math.random().toString(5).substring(2),
            // Math.random().toString(36).substring(2);
            //This would include both numbers and letters.
            tourist_email: Math.random().toString(5).substring(2)+"@gmail.com",
            tourist_location: "Paris"
            }
        cy.request({
            method: "POST",
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: rquestBody
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestbody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestbody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestbody.tourist_location)
    
        })
    })


    it('Approach 3- Using Fixture', ()=>{

        cy.fixture('tourist').then((myfixture)=>{
            const requestbody = myfixture;

        cy.request({
            method: "POST",
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: rquestBody
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestbody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestbody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestbody.tourist_location)
            expect(response.body).has.property('tourist_email',requestbody.tourist_email)
            expect(response.body).to.have.property('tourist_email',requestbody.tourist_email)
    
            })    

        })

        
    })

})
