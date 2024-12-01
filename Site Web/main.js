var body = document.getElementById('body');
var button = document.getElementById('button-darkmode');

button.addEventListener('click', function() { // on ajoute un clic au bouton pour déclencher l'action
    body.classList.toggle('dark'); // on ajoute ou retire la classe dark du body pour activer ou désactiver le darkmode
})



var li=document.querySelectorAll(".tab"); 
var div=document.querySelectorAll(".content");

li.forEach(element => { // boucle pour ajouter à chaque éléments de la liste un évènement
    element.addEventListener('click', function(){ // on ajoute un clic à chaque onglet pour déclencher une action
        li.forEach(Li => {
            Li.classList.remove('tab-active')
        })
        div.forEach(Div => {
            Div.classList.remove('active')
        })

        this.classList.add('tab-active')

        div.forEach(Div => {
            const targettab = this.getAttribute('data-tab') // récupère la valeur de "data-tab" de l'onglet cliqué
            if (Div.id === targettab) { // si l'id de la div correspond à l'attribut de l'onglet
                Div.classList.add('active') // alors on ajoute la class active à cette div pour qu'elle apparaisse dans le rendu lorsqu'on clique sur l'onglet correspondant
            }
        })
    })
})



let form = document.querySelector('form')
// on empêche que la page se refresh lors de l'envoi pour pouvoir vérifier les champs d'abord
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let pseudo = document.querySelector('#pseudo') // on cherche l'élément qui possède l'id pseudo (en l'occurence le imput du pseudo)
    if(pseudo.value.length < 6) { // on vérifie si sa la longueur de sa valeur est inférieure à 6 caractères
        // on lui applique le style error ou sucess dans le css en fonction de s'il convient aux critères ou non
        pseudo.classList.add('error') 
    } else {
        pseudo.classList.add('sucess')
    }

    // on fait exactement la même chose avec les autres mais avec différents critères de validation
    let email = document.querySelector('#email')
    if(email.value.length < 8) {
        email.classList.add('error')
    } else {
        email.classList.add('sucess')
    }

    let password = document.querySelector('#password')
    let passCheck = new RegExp( // pour vérifier que le mot de passe est sécurisé
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$" // = au moins une minuscule, une majuscule, un chiffre et un caractère spécial
    )
    // on vérifie si le mot de passe possède au moins 8 caractère et s'il convient aux critères de sécurité du passCheck
    if(password.value.length < 8 || passCheck.test(password.value) == false) {
        password.classList.add('error')
    } else {
        password.classList.add('sucess')
    }

    let password2 = document.querySelector('#password2')
    if(password.value == "" || password2.value !== password.value) {
        password2.classList.add('error')
    } else {
        password2.classList.add('sucess')
    }
})
