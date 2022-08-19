"use strict";
const fettuccine = {
    menuName: 'Fettuccine',
    boil: () => 'Heat water to 212 degrees',
};
const steak = {
    menuName: 'New York Strip Steak',
    panFry: () => 'Heat oil to 350 degrees',
};
function prepareEntree(entree) {
    if ("boil" in entree) {
        return entree.boil();
    }
    else {
        return entree.panFry();
    }
}
console.log(prepareEntree(fettuccine));
