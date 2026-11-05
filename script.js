
//Écrire une fonction getActiveGroups(groups) qui retourne uniquement les groupes qui ne sont pas clôturés.



function getActiveGroups(groups){
   let newGroupe = groups.filter((element)=>
        element.cloture == true
    )
    return newGroupe;
}
  console.log(getActiveGroups(groups));
   


 //Recherche d'un membre
//ecrire une fonction findMemberById(members, id) qui recherche et retourne un membre à partir de son identifiant. Si aucun membre ne correspond, retourner null.


function findMemberById(members, id) {
  let newMember =  members.foreach(function (element) {
        if (element.id == id) {
            return newMember
        }else{
            return ('null')
        }
    })
}


console.log(findMemberById(members, id));


//Écrire une fonction getTotalExpenses(expenses, groupId) qui calcule et retourne le montant total des dépenses d'un groupe donné.

function getTotalExpenses(expenses, groupId){
   let newExpenseGroups = expenses.filter(function (item) {
    
       if (item.groupId == groupId ) {
        return newExpenseGroups;
       } 

       let total = 0;
      newExpenseGroups.foreach(function (element) {
         total = element.montant + total;
         return total;
      }
        
    )
   })
}
console.log(getTotalExpenses(expenses, groupId));
//Écrire une fonction getExpensesByCategory(expenses, groupId, category) qui retourne les dépenses
//  d'une catégorie précise dans un groupe donné.

function getExpensesByCategory(expenses, groupId, category){
    expenses.foreach(function (element) {
        if (element.groupId == groupId && element.category == category) {
            return expenses;
        }
    })
}

console.log(getExpensesByCategory(expenses, groupId, category));

//Écrire une fonction getMemberExpenses(expenses, memberId) qui retourne toutes les dépenses
//  auxquelles un membre a participé, qu'il soit payeur ou simple participant.

function getMemberExpenses(expenses, memberId){
   expenses.foreach(function (item) {
    
     item.foreach(function (element) {
     
  })


    if (item.payeurId == memberId) {
        
    }
    
   })
    
}

