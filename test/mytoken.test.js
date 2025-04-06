const MyToken = artifacts.require("MyToken");

contract("MyToken", accounts => {
    const sender = accounts[0]; // The sender (usually the first account provided by Truffle)
    const receiver = accounts[1]; // The receiver (second account)
  
    it("should have a total supply of 1 million tokens", async () => {
        const instance = await MyToken.deployed();
        const totalSupply = await instance.totalSupply();
        assert.equal(totalSupply.toString(), '1000000000000000000000000', "Total supply should be 1 million");
    });

    it("should allow token transfers", async () => {
        const instance = await MyToken.deployed();
        let initialBalance = await instance.balanceOf(sender);
        let transferAmount = web3.utils.toWei('100', 'ether');  // 100 tokens with 18 decimals
        
        // Transfer 100 tokens to the receiver
        await instance.transfer(receiver, transferAmount, { from: sender }); 

        let finalBalance = await instance.balanceOf(sender);

        // Assert that the sender's balance decreases by 100 tokens (with 18 decimals)
        assert.equal(finalBalance.toString(), (initialBalance.sub(web3.utils.toBN(transferAmount))).toString());
    });
});
