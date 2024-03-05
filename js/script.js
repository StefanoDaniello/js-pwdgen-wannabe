// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito

let userNome = prompt("Scrivi il tuo nome");
let userCognome = prompt("Scrivi il tuo cognome");
let favoriteColor = prompt("Scrivi il tuo colore preferito");
let mesaggio = `Ciao ${userNome} ${userCognome} il tuo colore preferito: ${favoriteColor}`;
document.getElementById('title').innerHTML=mesaggio;