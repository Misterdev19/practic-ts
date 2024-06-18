let peronsa = "hello";

let  a = "hola" //  a: string  -> lo puedes  poner manuamente pero no es recomendable por typescript es capas de INFERIR el tipo de dato



//  ignora el tipo de dato y acepta cualquier tipo de dato
// ejemplo si lo pones como string lo lo va tratar como string
let  anyValue : any = "hola" 


/// FUNCIONES
//cuando no tiene contexto de tipo de dato
function sum(a: number, b: number) {    
    return a + b;
}   

/// this is correct sum(2, 3);
/// this is incorrect sum(2, '3');