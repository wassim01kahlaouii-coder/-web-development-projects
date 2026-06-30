let jokes = [
    "Why don’t programmers like nature? Too many bugs ",
    "Why do Java developers wear glasses? Because they don’t C# ",
    "I told my computer I needed a break... it said no problem, it crashed ",
    "Why was the computer cold? It left its Windows open "
];


    let index = 0;

function newJoke(){

    document.getElementById("joke").innerHTML = jokes[index];

    index++;

    if(index >= jokes.length){
        index = 0;
    }
}