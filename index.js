String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}


// Defines a Phrase object
function Phrase(content) {
    this.content = content;
    
// Returns contenet processed for palindrome testing.
this.processedContent = function processedContent() {
    return this.content.toLowerCase();
}

//Returns true for a palindrom, false otherwise
    this.palindrom = function palindrom (){
        return this.processedContent() === reverse(this.processedContent());
    }
}


