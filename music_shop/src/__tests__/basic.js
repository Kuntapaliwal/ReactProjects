//test suite

describe("testing sum",()=>
{
    function sum(a,b)
    {
        return a+b;
    }
//test cases we will write here

    it('should equal to 4',()=>
    {
        expect(sum(2,2)).toBe(4)
    })
     it('should not be equal to 5',()=>
    {
        expect(sum(2,2)).toBeLessThan(5)
    })
})