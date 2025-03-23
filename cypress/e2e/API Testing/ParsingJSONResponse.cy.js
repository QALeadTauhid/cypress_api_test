describe('Parsing Json Response', ()=>{
    it('Parsing SImple JSOn response', ()=>{
        cy.request({
            method: "GET",
            url: "https://fakestoreapi.com/products/"
            //https://jsonpathfinder.com/
        })
        .then((response)=>{
            //1 th
            expect(response.status).to.equal(200)
            expect(response.body[0].id).to.equal(1)
            expect(response.body[0].title).to.equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
            expect(response.body[0].price).to.equal(109.95)
            expect(response.body[0].category).to.equal("men's clothing")
            expect(response.body[0].rating.rate).to.equal(3.9)
            expect(response.body[0].rating.count).to.equal(120)


            //11 th
            expect(response.status).to.equal(200)
            expect(response.body[10].id).to.equal(11)
            expect(response.body[10].title).to.equal("Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5")
            expect(response.body[10].price).to.equal(109)
            expect(response.body[10].category).to.equal("electronics")
            expect(response.body[10].rating.rate).to.equal(4.8)
            expect(response.body[10].rating.count).to.equal(319)

            //20 th
            expect(response.status).to.equal(200)
            expect(response.body[19].id).to.equal(20)
            expect(response.body[19].title).to.equal("DANVOUY Womens T Shirt Casual Cotton Short")
            expect(response.body[19].price).to.equal(12.99)
            expect(response.body[19].category).to.equal("women's clothing")
            expect(response.body[19].rating.rate).to.equal(3.6)
            expect(response.body[19].rating.count).to.equal(145)
        })
    })


    it('Parsing Complex JSON response', ()=>{
        let totalPrice=0;
        cy.request({
            method: "GET",
            url: "https://fakestoreapi.com/products/",
            //https://jsonpathfinder.com/
            qs: {limit: 5}
        })
        .then((response)=>{
            //1 th
            expect(response.status).to.equal(200)
            response.body.forEach(element=>{
                totalPrice=totalPrice+element.price;

            }) 
            expect(totalPrice).to.equal(899.23); //limit 5   
        
          
        })
    })



})