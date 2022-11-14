// À l’aide d’un tableau, écrivez un programme qui affiche les tables de multiplication de 1 à 9.
//  (de 1x1=1 à 9x9=81). 
//  Vous allez utiliser des boucles imbriquées. Utilisez le tableau : tables=[1,2,3,4,5,6,7,8,9];



// 1 * 9
// 2 * 9
// 3 * 9
// 4 * 9
// 5 * 9
// 6 * 9
// 7 * 9
// 8 * 9
// 9 * 9


const tablesTwo =  [1,2,3,4,5,6,7,8,9]



// for (let  i = 0; i >=  9; i ++)
// {

    // return i
// }

// for let j = 0; j >= 9; j++
// {
    // console.log( i * j)
    // return j
// }


// ----------------------------------------------------------


// tables de nombres en tant que variable et pour chacun de ses nombres
// on retourne leur tables

// ' chiffre de table  *  chiffre par lequel on multiplie'

// commencer  par table qui contient des chiffres pour multiplier
// const tables =  [1,2,3,4,5,6,7,8,9]
// entrer un chiffre par lequel on multiplie

// const chiffreChoisi = 1
// multiplier par chaque chiffre de la table

// function bidon (x, y ) {

//      y.forEach( nombreY => {
//             x.forEach( nombreX => {
//                 console.log('---------------------------------------------------------')
//             console.log( ` ${nombreX} x ${ nombreY} = ${ nombreX * nombreY} `)
//             }

//             )
//       })

// }

// bidon( tables, tables)



// avoir tableau y qui contient les éléments suivant [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// avoir tableau x qui contient les éléments suivant [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    // pour chaque element de tableau y 
    // multiplier y fois x
        // y.forEach( nombrey => {
            // x.forEach( nombreX => {
            // console.log( ` ${nombreX} x ${ nombreY} = ${ nombreX * nombreY} `)
            // }

            // )
    //   })


    function moyenne(n1,n2,n3){
        //let total= (n1+n2+n3);
         let moyenne = (n1+n2+n3)/3
        return moyenne
    }

        let x = moyenne(50,50,52);
         if (x >=55) { console.log('reussi')}
         else {console.log('echoue')};
        
        console.log('valeur de x')
        console.log(x)