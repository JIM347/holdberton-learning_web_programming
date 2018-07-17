let x = process.argv[2];
if (x<70) {
    console.log("fail")
}
else if (69<x&& x<70){console.log ("c")}
else if (74<x && x<80){console.log ("c+")}
else if (79<x && x<85){console.log("b")}
else if (84<x&& x<90){console.log("b+")}
else if (89<x &&x<95){console.log("a")}
else if (94<x &&x<101){console.log("a+")}
else{console.log("please enter a number less than or equal to 100")}
