var expect = require("chai").expect
var wrapWithHTML= require("./index")

describe("wrap-with-html", function(){
  it("correctly wraps html", function(){
    var newString = wrapWithHTML({
      string: "Hello World",
      customId: "hello-world",
      tagName: "span",
      customClass: "underline"
    })
    
    var expectedString = "<span id='hello-world' class='underline'>Hello World</span>"
    expect(newString).to.equal(expectedString);
  })
})
