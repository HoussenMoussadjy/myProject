# Javascript

## Qu'est ce que c'est?

JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi 
pour les serveurs comme avec l'utilisation de Node.js.

## Syntaxe

Les fonctions retournent les valeurs à l'aide du mot-clé return. [return] termine l'exécution de la fonction et renvoie  
la valeur spécifiée à l'endroit où elle a été appelée.  
Une erreur courante est d'oublier le mot-clé de retour, mais sans l'utiliser dans les fonctions, l'information ne nous est pas renvoyée. 

    // Bonne manière
    function sum(num1, num2) {
      return num1 + num2;
    }

    // Mauvaise manière
    function sum(num1, num2) {
      num1 + num2; 
    }   
 
 
Les déclarations de fonction sont construites à partir du mot-clé de la fonction, du nom de la fonction,  
d'une liste de paramètres séparés par des virgules et entourés d'un ensemble de parenthèses (),  
et d'un corps de fonction enfermé dans un ensemble de crochets {}. 
 
     function add(num1, num2) {
       return num1 + num2;
     }
 
       
## Fonctions basiques

Je veux une fonction qui me permette de multiplier 5 par 10:

    function multiplicator (x,y){
       return x * y
    }
   
    console.log (multiplicator(5, 10));

Cette fonction permet de multiplier une première valeur [x] par une deuxième [y].


## Les différentes propriétés

Pour faire des tableaux en Javascript, on a recours a différentes propriétés  
selon nos besoins:

### La méthode map()

Le map() permet de créer un nouveau tableau et d'y modiifier les éléments sélectionnés.

### La méthode filter()

Le filter() permet de filtrer ou d'enlever des éléments.

### La méthode sort()

Le sort() permet de trier ou de classer des éléments.

### La méthode reduce()

Le reduce() permet de prendre des éléments de plusieurs tableaux pour les rassembler dans un seul.

### La méthode push()

Le push() permet d'ajouter un ou plusieurs éléments à la fin d'un tableau.

### La méthode length()

Le length() permet d'afficher la longueur d'un tableau ou d'une chaine de caractères.

## Les arrays (tableaux)

### Définition

    // Un array contenant des nombres
    const numberArray = [0, 1, 2, 3];

    // Un array contenant différents types de données
    const mixedArray = [1, 'chicken', false, null];
    
En JavaScript, les tableaux sont des listes de données ordonnées et stockées.  
Ils peuvent contenir des éléments de n'importe quel type de données.  
Les tableaux sont créés à l'aide de crochets, les éléments individuels étant séparés par des virgules.

### Syntaxe

    // Accéder à un élément 
    const myArray = [100, 200, 300];

    myArray[1]; // 200

    // Changer une valeur à partir d'un index
    let words = ['Hello', 'there'];

    words[0] = 'Hi';
    console.log(words); // ['Hi', 'there']
    
Les éléments de tableau sont classés par valeurs d'index, à partir de [0] comme premier index d'élément.  
Ils peuvent être modifiés en accédant à l'élément (ex: par leur index) et en l'affectant à une nouvelle valeur.  
    
## Les loops (boucles)

### Définition

Une boucle est un outil de programmation qui est utilisé pour répéter un ensemble d'instructions.

### Syntaxe

La boucle "For" 

    for (let i = 0; i < 4; i += 1) {
     console.log(i);
    };

    // `let i = 0` l'initialisation (où commencer la boucle)
    // `i < 4`     la condition d'arrêt (quand commencer la boucle)
    // `i += 1`    l'état d'itération ( met à jour l'itérateur chaque fois que la boucle est terminée)

    // résultat: 0, 1, 2, 3

