const myIdentity = {
    name: 'Houssen Moussadjy',
    profile: 'PROFILE',
    profileParagraph: 'J’ai 19 ans, je suis en phase de devenir développeur JavaScript et je souhaite postuler pour un stage dans 5 mois.',
    experience: 'EXPERIENCE',
    experienceParagraph:'EXPERIENCE',
    interests:'INTERETS',
    interestsParagraph:'INTERETS',
    contact:'CONTACT',
    contactParagraph:'CONTACT',
    education:'EDUCATION',
    educationParagraph1:'EDUCATION',
    educationParagraph2:'EDUCATION',
    skills:'COMPETENCES',
    skillsParagraph:'COMPETENCES',

};

function findSelectorAndReplaceData (selector,data) {
    document.querySelector (selector).textContent = data;
}

findSelectorAndReplaceData('#name', myIdentity.name);
findSelectorAndReplaceData('#profile', myIdentity.profile);
findSelectorAndReplaceData('#experience', myIdentity.experience);
findSelectorAndReplaceData('#interests', myIdentity.interests);
findSelectorAndReplaceData('#contact', myIdentity.contact);
findSelectorAndReplaceData('#education', myIdentity.education);
findSelectorAndReplaceData('#skills', myIdentity.skills);
findSelectorAndReplaceData('#profile-p', myIdentity.profileParagraph);



