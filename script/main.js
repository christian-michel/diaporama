// récupérer et lister les images
let nbPhoto = ["1.jpg","2.jpg","3.jpg"]; 
let i = "";
const diapoSection = document.querySelector(".diapo_section"); 

/*
 * ==========================
 * Affichage des photos
 * ==========================
 */
// espace de la photo 
const photo = document.createElement("div");
photo.classList.add("photo");
diapoSection.appendChild(photo); 

const image = document.createElement("img");
image.src = "img/"+ nbPhoto[0] +"";
image.animate([{opacity: 0}, {opacity: 1}], 250);
photo.appendChild(image);

// bouton de navigation next, sur le diaporama 
const btnNext = document.createElement('div'); 
btnNext.classList.add("btn-nav", "next"); 
btnNext.setAttribute('id', 'next');
btnNext.textContent = ">"; 
photo.appendChild(btnNext);
btnNext.addEventListener('click', function(){
    console.log(numeroPhoto("next"));
  }); 

// bouton de navigation prev, sur le diaporama 
const btnPrev = document.createElement('div'); 
btnPrev.classList.add("btn-nav", "prev"); 
btnPrev.setAttribute('id', 'prev');
btnPrev.textContent = "<"; 
photo.appendChild(btnPrev);
btnPrev.addEventListener('click', function(){
    console.log(numeroPhoto("prev"));
  }); 

/*
 * ==========================
 * Affichage du numéro des photos, en dessous (1, 2, 3...)
 * ==========================
 */
const numero = document.createElement('div');
numero.classList.add("numero"); 
diapoSection.appendChild(numero);

const ul = document.createElement("ul");
numero.appendChild(ul);

var k = 1;
for(var s = 0; s < nbPhoto.length; s++){ 
    const li = document.createElement("li");
    ul.appendChild(li); 
    
    if(i == "" && s == 0){
        li.innerHTML = "<span class=\""+ k +" active\" onclick=\"numeroPhoto("+ s +")\" > "+ k +" </span>";
    }else{
        li.innerHTML = "<span class=\""+ k +"\" onclick=\"numeroPhoto("+ s +")\" > "+ k +" </span>";
    } 

    k++
}

/*
 * ==========================
 * Gestion des noms de fichiers et des numéros 
 * ==========================
 */
// Trouver le nom du fichier
function photoNom() {
    var fullPath = document.querySelector("#diaporama").src;
    var index = fullPath.lastIndexOf("/");
    var filename = fullPath;
    if(index !== -1) {     
        filename = fullPath.substring(index+1,fullPath.length);
    }
    var photoName = document.getElementById("result"); 
    // photoName.textContent = filename; // indique le nom du fichier
    photoName.textContent = nbPhoto.indexOf(filename); // indique le numéro du fichier dans le tableau nbPhoto
}

/*
 * ==========================
 * Gestion centralisée de la navigation et du numéro de la photo affiché
 * ==========================
 */
function numeroPhoto(x){
    const tableauEmp = nbPhoto.length;
    const emp = tableauEmp-1;

    if(x == "next" && i != 'undefined'){ // btn next
        if(i != 0 && i < emp){ i = i+1; } 
        else if(i == 0){ i = 1; }
        else if(i >= emp){ i = 0; }
        else{}
    }else if(x == "prev" && i != 'undefined'){ // btn prev
        if(i != 0 && i > 0){ i = i-1; }
        else if(i == 0){ i = emp; }
        else{}
    }else{ // numéros de photos (1, 2, 3) sous le diaporama 
        if(x == 0){ i = x; }
        else if(x == 1){ i = x; }
        else if (x == 2){ i = x; }
        else{}
    }

    affichePhoto(i);
    afficheNumero(i);
    return i;
}; 

function affichePhoto(g){
    image.src = "img/"+ nbPhoto[g] +""; 
    image.animate([{opacity: 0}, {opacity: 1}], 250);
    return image;
}

function afficheNumero(z){ 
    var k = 1;
    let maSpan = document.querySelectorAll("div ul li span");
    for(var s = 0; s < nbPhoto.length; s++){          
        if(s == z){
            maSpan[s].classList.add("active");
        }else{
            maSpan[s].classList.remove("active");  
        }
        k++
    } 
}; 