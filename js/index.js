let monPost = document.getElementById("#PostIt");
let PostIt1 = new PostIt(200,200,300,300,"green","Hello");
PostIt1.affiche();
console.log("PostIt1");

PostIt1.agrandi(500,500);
PostIt1.deplace(500,500);