# CSS

## Qu'est ce que c'est?

Le CSS ("Cascading Style Sheets") est un langage de balises. Il est principalement utilisé pour mettre en forme les 
fichiers HTML (personnaliser la mise en page d'un site web).

## Syntaxe
    color                                          couleur (de l'élément désigné)
    text-align                                     alignement de texte
    background-color                               couleur de fond     
    text-decoration                                décoration de texte (souligner)
    border                                         bordure
    width                                          largeur
    height                                         hauteur
    box-shadow                                     ombre de la "boite"
    font-style                                     style de police

## Flexbox CSS

### Définition:

Le flexbox est un excellent outil pour créer des structures responsives et flexibles,  
c’est-à-dire pour positionner et aligner des éléments HTML sans même connaitre leur dimension à priori.
  
  **En effet, le Flexbox va nous permettre de gérer précisément** :
  
>  * La direction des éléments (horizontalement ou verticalement) ;
>  * L’alignement des éléments selon un axe principal et secondaire ainsi que leur répartition ;
>  * L’ordre des éléments ;
>  * La place prise par les éléments en fonction de l’espace disponible.
  
### Syntaxe

On a deux types d'éléments principaux en Flexbox CSS:

> 1. Le **container**, qui est le corps principal  
> 2. Les **items**, qui sont contenus dans le premier

#### Le *container* (l'élément parent)  

Les différentes propriétés du **container** sont:

> display

    .container {
      display: flex;
    }

Il permet d'initialiser le flex container

> flex-direction

    .container {
      flex-direction: row | row-reverse | column | column-reverse;
    }
    
Il permet de définir la direction des items      

> justify-content

    .container {
      justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
    }
    
> align-items

    .container {
      align-items: stretch | flex-start | flex-end | center | baseline;
    }

> align-content

    .container {
      align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    }

#### Les *items* (les éléments enfants)  
  
Les différentes propriétés des **items** sont:

> flex-grow

    .item {
      flex-grow: <number>; /* default 0 */
    }
