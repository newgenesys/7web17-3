function textScripts(text) {
  // the function textScripts takes text as an argument
  let scripts = countBy(text, (char) => {
    // assigns the value(an array o objects) of the function countBy to scripts, who takes two arguements
    let script = characterScript(char.codePointAt(0)); // the characterscript function assigns names to the characters
    return script ? script.name : "none"; // returns the scripts name if present, else it returns none
  }).filter(({ name }) => name != "none");  //performs a filter which returns script names which are nt empty

  let total = scripts.reduce((n, { count }) => n + count, 0); // it adds up the current value to the next value of the scripts array(to give us the total amt of characters)
  if (total == 0) return "No scripts found";  // returns  no scripts found when the total variable is equivalent to zero

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`; // creates a new script string where the entries are readable
    })
    .join(","); // separates the values of the new srcipt array, the name and count by a comma
}
