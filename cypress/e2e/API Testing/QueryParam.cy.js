describe('API Testing', ()=>{
    it('Passing query param', ()=>{

        cypress.request({
            method: "GET",
            url: 'https://reqres.in/api/users',
            qs: {page=2}
        })



    })

})