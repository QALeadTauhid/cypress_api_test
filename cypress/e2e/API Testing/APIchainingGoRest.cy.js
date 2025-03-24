// gorest.co.in
// Post: https://gorest.co.in/public/v2/users
// put: https://gorest.co.in/public/v2/users/${userId}

// delete: https://gorest.co.in/public/v2/users/${userId}
describe('GoRest API Chaining', ()=>{

    const auth_token="Bearer -----------------"

    it('Create, update & delete user in Gorest API',()=>{
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body:{
                name: "John Kenedy",
                gender: "Male",
                email: Math.random().toString(36).substring(2)+"@gmail.com",
                status: 'active'
            },
            headers:{
                Authorization: auth_token
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            const userId= response.body.id

            //update user name
            cy.request({
                method: "PUT",
                url: `ttps://gorest.co.in/public/v2/users/${userId}`,
                body:{
                    name: "Scott"
                },
                headers:{
                    Authorization: auth_token
                }

            })
            .then((response)=>{
                expect(response.status).to.equal(200)
                expect(response.body.name).to.equal("Scott")
                //delete request
                cy.request({
                    method: "DELETE",
                    url: `ttps://gorest.co.in/public/v2/users/${userId}`,
                    headers:{
                        Authorization: auth_token
                    }
                })
                .then((response)=>{
                    expect(response.status).to.equal(204)
                })
            })
        })

    })
})