class PostIt {
    x;
    y;
    largeur;
    hauteur;
    couleur;
    texte;
constructor(x,y,largeur,hauteur,couleur,texte){
    this.x = x;
    this.y = y;
    this.largeur = largeur;
    this.hauteur = hauteur;
    this.couleur = couleur;
    this.texte = texte;
}
deplace(x, y) {
    this.x = x;
    this.y = y;
    PostIt.style.top = this.y + "px";
    PostIt.style.left = this.x + "px";
}
agrandi(largeur, hauteur) {
    this.largeur = largeur;
    this.hauteur = hauteur;
    PostIt.style.width = this.largeur + "px";
    PostIt.style.height = this.hauteur + "px";
}
chgTexte(texte) {
    this.texte = texte
}
affiche() {
    let newElem = false
    //On essaye d'attraper le postIt par son id
    let monElem = document.getElementById("PostIt" + this.num)
    if (monElem === null) {
        //si le post it n'existe pas on le crée
        newElem = true
        monElem = document.createElement("div")
        monElem.id = "PostIt" + this.num
    }
    monElem.style.top = this.y + "px"
    monElem.style.left = this.x + "px"
    monElem.style.width = this.largeur + "px"
    monElem.style.height = this.hauteur + "px"
    monElem.style.position = "fixed"
    monElem.style.backgroundColor = this.couleur
    monElem.innerHTML = this.texte
    if (newElem) {
        //si le post it n'existe pas on l'ajoute au document HTML
        document.body.appendChild(monElem)
    }

}
}
