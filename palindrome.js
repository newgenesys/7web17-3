 // Write a JavaScript function that checks whether a passed string is palindrome or not? 
       
 function check_Palindrome(str_entry) {
    // Change the  string into lowerCase and remove all the non_alphanumeric characters
    var change_String = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,  '');
    var change_Count  = 0;
    // Check whether the string is empty or not
    if (change_String==="") {
        console.log("Nothing fond!");
        return false;
    }
    // Check if the length of the string is even or odd 
    if ((change_String.length) % 2 === 0) {
        change_Count = (change_String.length)/2;
    } else {
         // If the length of the string is 1 then it becomes a palindrome
         if (change_String.length==1) {
             console.log("Entry is a palindrome.");
             return true;
         } else {
             // If the length of the string is odd ignore the middlle character
             change_Count = (change_String.length-1)/2;
         }
    }
    // Loop through to check the first character to the last character and then the next
    for (var x =0; x < change_Count; x++) {
        // Compare characters and drop them if they do not match
        if (change_String[x] != change_String.slice(-1-x)[0]) {
            console.log("Entry is not a Palindrome");
            return false;
        }
    }
    console.log("This Entry ia a Palindrome");
    return true;
}
console.log("======madam====")
check_Palindrome('madam');
console.log("======level====")
check_Palindrome('level');
console.log("======reviver====")
check_Palindrome('reviver');
console.log("======nurses run====")
check_Palindrome('nurses run');
console.log("====fox====");
check_Palindrome('fox');
console.log("=====wallace====");
check_Palindrome('wallace');