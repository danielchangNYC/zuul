describe('Set of tests', function () {
    xit('should pass', function () {
        expect(1).toEqual(1);
    });

    describe('I am', function () {
        describe('a', function () {
            describe('very', function () {
                describe('very', function () {
                    describe('nested', function () {
                        fit('spec', function () {
                            expect(1).toBe(1);
                        })
                    })
                })
            })
        })
    });

    xit('should fail', function () {
        expect(1).toBe(1);
        expect(3).toEqual(4);
    })
});
