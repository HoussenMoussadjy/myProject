# Javascript

## Qu'est ce que c'est?

JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi 
pour les serveurs comme avec l'utilisation de Node.js.

## Syntaxe

1)


    const myIdentity = {
      name: 'HOUSSEN MOUSSADJY'
      profile: 'PROFIL'
    };

    const name = document.querySelector( selectors: '#name').textContent= myIdentity.name
    const profile = document.querySelector( selectors: '#profile').textContent= myIdentity.profile
    
    
2)


    function findSelectorAndReplaceData (selector, data){
       document.querySelector (selector).textContent= data;
    }
     
    findSelectorAndReplaceData (#name, myIdentity.name);
    findSelectorAndReplaceData (#profile, myIdentity.profile);
              

Sachant que pour les variables 1 et 2, la mise en forme des "data"
reste la même.


3)


    const myDictionnary = new Map()
        .set ('#name', 'HOUSSEN MOUSSADJY')
        .set ('#profile', 'PROFILE')
        .set ('#experience', 'EXPERIENCE')
        .set ('#interests','INTERETS')
        .set ('#contact','CONTACT')
        .set ('#education','EDUCATION')
        .set ('#skills','COMPETENCES');
    
    
    function replace (selector,data) {
        document.querySelector(selector).textContent = data;
    }
    
    myDictionnary.forEach((value, key) => {
        replace(key, value);
    });    
    
        
## Fonctions basiques

Je veux une fonction qui me permette de multiplier 5 par 10:

    function multiplicator (x,y){
       return x * y
    }
   
    console.log (multiplicator(5, 10));

Cette fonction permet de multiplier une première valeur 'x' par une deuxième 'y'.


## Les différentes propriétés array.prototype

Pour faire des tableaux en Javascript, on a recours a différentes propriétés  
selon nos besoins:

### La méthode map()

### La méthode filter()

### La méthode sort()

### La méthode reduce()

### La méthode forEach()





