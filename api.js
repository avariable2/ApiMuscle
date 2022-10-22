const fs = require("fs");

class Api {

    /** constructeur */
    constructor() {
        try {
            const data = fs.readFileSync("./bdd.json", 'utf-8') // On doit d'abord lire enregistrer la bdd avant de pouvoir interragir avec.
            this.bdd = JSON.parse(data) // on la transforme en objet js
        } catch (e) {
            console.log("erreur d'initialisation, contacter admin.")
        }
    }

    /**
     * Fonction qui retourne un tableau des élèments regroupé a partir d'une partie du corps.
     * @param {string} pPartie - Partie du corps
     * @return [{JSON}] - Tableau des exercices pour cette partie du corps
     */
    getParPartieCorps(pPartie) {
        try {
            let tab = []
            const parm = pPartie.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
            for (let i = 0; i < this.bdd.length; i++) {
                const str = this.bdd[i].partie.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                if (str === parm) {
                    // forcement un string car une seul partie par exo
                    tab.push(this.bdd[i])
                }
            }
            return tab
        } catch (e) {
            return []
        }

    }

    /**
     * Fonction qui retourne un tableau des élèments ciblant le muscle donné.
     * @param {string} pCible - Muscle ciblé
     * @return [{JSON}] - Tableau des exercices qui cible ce muscle
     */
    getParCible(pCible) {
        try {
            let tab = []
            const parm = pCible.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
            for (let i = 0; i < this.bdd.length; i++) {
                // Si cible === string, il n'y a qu'une seul cible
                if (typeof this.bdd[i].cible !== 'string') {
                    for (let index in this.bdd[i].cible) {
                        // on recupere l'index de la valeur dans l'object de type { 0: 'deltoïdes', 1: 'biceps'}
                        const str = this.bdd[i].cible[index].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                        if (str === parm) {
                            tab.push(this.bdd[i])
                            break
                        }
                    }
                } else {
                    const str = this.bdd[i].cible.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                    if (str === parm) {
                        tab.push(this.bdd[i])
                    }
                }
            }
            return tab
        } catch (e) {
            return []
        }

    }

    /**
     * Fonction qui retourne un tableau des élèments possédant l'equipement donnée.
     * @param {string} pEquipement - Equipement
     * @return [{JSON}] - Tableau des exercices avec cette equipement
     */
    getParEquipement(pEquipement) {
        let tab = []
        const paramNormalizer = pEquipement.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()

        for (let i = 0; i < this.bdd.length; i++) {
            // Si equipement === string, il n'y a qu'un seul equipement
            if (typeof this.bdd[i].equipement !== 'string') {
                for (let index in this.bdd[i].equipement) {
                    // on recupere l'index de la valeur dans l'object de type { 0: 'barre', 1: 'haltere'}

                    const str = this.bdd[i].equipement[index].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                    if (str === paramNormalizer) {
                        tab.push(this.bdd[i])
                        break
                    }
                }
            } else {
                const str = this.bdd[i].equipement.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                if (str === paramNormalizer) {
                    tab.push(this.bdd[i])
                }
            }
        }
        return tab
    }

    /**
     * Fonction qui retourne la totalité des exercices sous forme de tableau d'element JSON.
     * @return [{JSON}] - La base de donnée
     */
    getTous() {
        return this.bdd
    }

    /**
     * Fonction qui retourne un tableau des élèments correspondant à l'id de l'exercice.
     * @param {string} id - id de l'exercice
     * @return [{JSON}] - Tableau des exercices avec le même id
     */
    getParId(id) {
        try {
            if (isNaN(parseInt(id))) {
                return []
            }
            for (let i = 0; i < this.bdd.length; i++) {
                if (parseInt(this.bdd[i].id) === parseInt(id)) {
                    return [this.bdd[i]]
                }
            }
            return []
        } catch (e) {
            return []
        }

    }

    /**
     * Fonction qui retourne un tableau des élèments correspondant au nom de l'exercice.
     * @param {string} pNom - Nom de l'exercice
     * @return [{JSON}] - Tableau des exercices avec le même nom
     */
    getParNom(pNom) {
        try {
            const parm = pNom.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
            for (let i = 0; i < this.bdd.length; i++) {
                const str = this.bdd[i].nom.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                if (str === parm) {
                    return [this.bdd[i]]
                }
            }
            return []
        } catch (e) {
            return []
        }

    }

    getTousEquipement() {
        var tabFinal = []
        for (let i = 0; i < this.bdd.length; i++) {
            const str = this.bdd[i].equipement
            if (Array.isArray(str)) {
                for (let j = 0; j < str.length; j++) {
                    this.checkSiDataEstDoublon(str[j], tabFinal)
                }
            } else {
                this.checkSiDataEstDoublon(str, tabFinal)
            }
        }
        return tabFinal
    }

    getTousPartieDuCorps() {
        var tabFinal = []
        for (let i = 0; i < this.bdd.length; i++) {
            this.checkSiDataEstDoublon(this.bdd[i].partie, tabFinal)
        }
        return tabFinal
    }

    getTousMuscles() {
        var tabFinal = []
        for (let i = 0; i < this.bdd.length; i++) {
            const cibleTableauOuVariable = this.bdd[i].cible
            if (Array.isArray(cibleTableauOuVariable)) {
                cibleTableauOuVariable.forEach(element => {
                    this.checkSiDataEstDoublon(element, tabFinal)
                })
            } else {
                this.checkSiDataEstDoublon(cibleTableauOuVariable, tabFinal)
            }
        }
        return tabFinal
    }

    checkSiDataEstDoublon(data, tableau) {
        let donnee = data.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
        if (!tableau.includes(donnee)) {
            tableau.push(donnee)
        }
    }
}

module.exports = Api