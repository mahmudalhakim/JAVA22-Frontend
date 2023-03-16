


// En parameterlös funktion
function hello(){
    console.log("Hello");
}

// Funktionsanrop (invoke / call)
hello();

// Funktion med parametrar
function print(message){
    console.log(message);
}

// Anropa med olika argument
print(1);
print("TEST");
print(window);

const el = document.getElementById('header');
print(el);
print(el.innerHTML);

// Funktioner med return
function fullName (firstName , lastName){
    return firstName + " " + lastName;  
}

print(fullName("Mahmud" , "Al Hakim"));