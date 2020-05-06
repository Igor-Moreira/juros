//Exe 1
const jurosSimples = (C,i,t) =>  C*i*t


//Exe 2
const montanteSimples = ({jurosSimples}) => (C, i, t) => C + jurosSimples(C, i, t)
 

//Exe 3
const montanteJurosCompostos = (C, i, t) => C * Math.pow((1+i), t)

//Exe 4
const jurosCompostos = ({montanteJurosCompostos}) => (C, i, t) => montanteJurosCompostos(C, i, t) - C


module.exports = {
    jurosSimples,
    montanteSimples: montanteSimples({jurosSimples}),
    montanteJurosCompostos,
    jurosCompostos: jurosCompostos({montanteJurosCompostos}),
    pure: {
        montanteSimples, 
        jurosCompostos,
    }
    
}