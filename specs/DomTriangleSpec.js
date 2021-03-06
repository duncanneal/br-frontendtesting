
describe('DomTriangle', function() {
  it('exists', function() {
    expect(DomTriangle).toBeDefined();
  });

  it('exposes first element value as sideALength', function() {
    var domTriangle = new DomTriangle({ value: "2" });

    expect(domTriangle.a()).toEqual(2);
  });

  it('exposes second element value as sideBLength', function() {
    var domTriangle = new DomTriangle({}, { value: "3" });

    expect(domTriangle.b()).toEqual(3);
  });

  it('exposes third element value as sideCLength', function() {
    var domTriangle = new DomTriangle({}, {}, { value: "4" });

    expect(domTriangle.c()).toEqual(4);
  });
});

