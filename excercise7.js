//Excercise One
let line="#";
while (line.length<8) {
    console.log(line);
    line+="#";
}

// Doing the same excercise using a for loop
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

//Excercise Two
let number=0, count=1;
while (number<30) {
  	output="2 * " + count + " = ";
    number=2*count;
    console.log(output + number);
    count++;
}