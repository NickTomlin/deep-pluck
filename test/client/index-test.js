describe('deepPluck', function () {
  var json, result;

  function tmpl(fixturePath) {
    return JSON.parse(__html__[fixturePath]);
  }

  it('retrieves a key from a deeply nested js object', function () {
    json = tmpl('test/fixtures/nested.json');
    result = pluckDeep(json, 'sub_section_items');
    expect(result.length).to.equal(3);
  });

  it('collects target at multiple levels', function () {
    json = tmpl('test/fixtures/multiple-levels.json');
    result = pluckDeep(json, 'target');
    expect(result.length).to.equal(3);
  });

  it('handles normal javascript objects', function () {
    result = pluckDeep(data, 'target');
    expect(result.length).to.equal(2);
  });
});
