let filmer = [
    'Love Actually',
    'The Holiday',
    'Elf',
    'Harry Potter 1',
    'Harry Potter 2',
    'Hjemme Alene',
    'Hjemme Alene i New York',
    'Polarekspressen',
    'Flåklypa',
]

function colorchange(id) {
    var background = document.getElementById(id).style.background;

    if(background == "brown") {
        document.getElementById(id).style.background = "blue";
    } 
    else {
        document.getElementById(id).style.background = "brown";
    }
}

function getmovie(){
    const randomElement = filmer[Math.floor(Math.random() * filmer.length)]
    document.getElementById("random_generator").innerHTML = randomElement;
}

