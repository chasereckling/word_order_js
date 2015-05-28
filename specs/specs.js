describe('wordOrder', function() {
  it('Will count how many times an instance of a word appears in a sentence', function() {
    expect(wordOrder("hello world hello")).to.eql("hello 2, world 1");
  });
});
