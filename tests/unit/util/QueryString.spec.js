import getParameterByName from "../../../src/util/QueryString";

describe('QueryString.js', () => {
    it('parses vallid callback url', () => {
        const url = "http://localhost:8080/callback#access_token=fancy-token-wooow&token_type=Bearer&expires_in=3600&state=6e37b0c9-f1a8-45f5-bdc1-9ee2013fe64f"

        const accessToken = getParameterByName("access_token", url);

        expect(accessToken).toMatch("fancy-token-wooow");
    })
});
