const myDictionnary = new Map()
    .set ('#name', 'Houssen Moussadjy')
    .set ('#profile', 'PROFILE')
    .set ('#experience', 'EXPERIENCE')
    .set ('#interests','INTERETS')
    .set ('#contact','CONTACT')
    .set ('#education','EDUCATION')
    .set ('#skills','COMPETENCES')


function replace (selector,data) {
    document.querySelector(selector).textContent = data;
}

myDictionnary.forEach((value, key) => {
    replace(key, value);
})



