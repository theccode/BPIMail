const is_selected = require('../isSelected');

describe("is_selected", () => {
    it('has a model', ()=> {
        expect(is_selected).toBeDefined();
        const expected = "function";
        const actual = typeof is_selected;
        expect(expected).toEqual(actual);
    });

    it('returns true if the provided path matches the provided pathname', ()=>{
        const expected = true;
        const actual = is_selected('/foo', '/foo');
        expect(expected).toEqual(actual);
    });

    it('returns true if the provided path is /inbox and the provided pathname is /', ()=>{
        const expected = true;
        const actual = is_selected('/', '/inbox');
        expect(expected).toEqual(actual);
    });

    it("returns false if the provided path is not /inbox and the provided pathname is /", ()=>{
        const expected = false;
        const actual = is_selected('/', '/fail');
        expect(expected).toEqual(actual);
    });

    it('returns false if the provided path is not /inbox and the provided pathname is /', ()=>{
        const expected = false;
        const actual = is_selected('/foo', '/bar');
        expect(expected).toEqual(actual);
    });
})