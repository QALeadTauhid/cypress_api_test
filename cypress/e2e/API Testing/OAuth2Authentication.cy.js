// Pre-requisite: Generate auth code
//https://github.com/login/oauth/authorize?client_id=

//Step 1: Get the OAuth2 accss token
//https://github.com/login/oauth/access_token
// Quary param: client_id, client_secret  and code

//Step 2: Send actual get request by using accss token
//https://api.github.com/user/repos
//Auth: accessToken

describe("OAuth2 authentication", ()=>{
    let accessToken = "";
    it("get Oauth2 access token", ()=>{
        cy.request({
        method: 'POST',
        url: 'https://github.com/login/oauth/access_token',
        qs: {

            client_id: '--------------',
            client_secret: '-------------',
            code: '--------'
        }

    })
    .then((response)=>{
        //
       const params= response.body.split('&');
       accessToken= params[0].split('=')[1];
       cy.log("Generated token is "+accessToken);
    })

    })

    it("Oauth2 request", ()=>{
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                Authorization: 'Bearer '+accessToken
        }

    })
    .then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body[0].id).to.eq(877273149);
    })

    })

})