class Combattant { 
    constructor(nom, PV, ATK) { 
        this.nom = nom; // on donne un nom au combattant
        this.pv = PV; // des points de vie au combattant
        this.atk = ATK; // une valeur d'attaque à chaque combattant
    }

    getAttaque() { 
        return this.atk; // pour retourner l'attaque du combattant
    }

    getPrecision() { 
        return Math.random(); // et pour retourner un nombre aléatoire entre 0 et 1 pour la précision
    }
}

// on crée deux combattants avec leurs caractéristiques
let combattant1 = new Combattant("Eugene", 50, 10);
let combattant2 = new Combattant("Eude", 50, 10);

console.log("Début du combat !"); 
while (combattant1.pv > 0 && combattant2.pv > 0) { // le combat continue tant que les deux combattants ont des PV supérieurs à 0

    if (combattant1.getPrecision() > combattant2.getPrecision()) { 
        combattant2.pv -= combattant1.getAttaque(); // si Eugene a plus de précision, il attaque Eude
    } else { 
        combattant1.pv -= combattant2.getAttaque(); // sinon, Eude attaque Eugene
    }

    if (combattant2.pv <= 0) { 
        console.log(combattant2.nom + " est vaincu !");
        console.log(combattant1.nom + " remporte le combat ! ");
        break; // si un combattant perd tous ses PV, le combat se termine
    }

    if (combattant1.pv <= 0) { 
        console.log(combattant1.nom + " est vaincu !");
        console.log(combattant2.nom + " remporte le combat ! ");
        break; // et si l'autre combattant perd, le combat se termine aussi
    }

    // pour afficher les PV restants de chaque combattant après chaque tour
    console.log(combattant1.nom + " avec " + combattant1.pv + " PV" + " face à " + combattant2.nom + " avec " + combattant2.pv + " PV");
}
