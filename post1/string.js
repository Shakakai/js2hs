var expect = require("expect.js");

describe("String", function(){
	describe("UpperCase", function(){
		it('should convert string to uppercase', function(){
			var a = "hello";
			var b = a.toUpperCase();
			expect(b).to.be("HELLO");
		})
	})
	
	/*
	Javascript doesn't have a reverse method for strings
	but it does have one for arrays. We can convert the
	string to an array of characters splitting on an empty
	string. Then reverse the array and use the join method
	on Array to convert back to a string
	*/
	describe("Reverse", function(){
		it("should reverse the string", function(){
			var a = "hello";
			var b = a.split("").reverse().join("");
			expect(b).to.be("olleh");
		})
	})
	
	describe("Length", function(){
		it("should count the characters in the string", function(){
			var a = "hello";
			var b = a.length;
			expect(b).to.be(5);
		})
	})
	
	describe("CharAt", function(){
		it("should get the character a specfic index", function(){
		    var a = "hello";
		    var b = a.charAt(1);
		    expect(b).to.be("e");
		})
	})
})
