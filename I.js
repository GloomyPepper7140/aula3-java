let VarA = 'A'
let VarB = 'B'
let VarC = 'C'
  //*A nova ordem tem que ser B C A


let a = VarA
let a2 = VarB
let a3 = VarC

VarC = a
VarB = a3
VarA = a2

console.log ( VarA, VarB, VarC)