let peronsa = "hello";

let a = "hola" //  a: string  -> lo puedes  poner manuamente pero no es recomendable por typescript es capas de INFERIR el tipo de dato




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

function saludar({name , age}: { name: string; age: number }) {
     console.log(`hola ${name} ,  tienes ${age} años`);
}
//Opcion 2 de tipar objetos por destructuracion
// function saludar(peronsa:{name: string , age: number}) {
//     const {name , age} = peronsa
//     console.log(`hola ${name} ,  tienes ${age} años`);
// }
//tipar dato de retorno 
// function saludar(peronsa:{name: string , age: number}):string {
//     const {name , age} = peronsa
//     console.log(`hola ${name} ,  tienes ${age} años`);
//     return name;
// }

// saludar({name : "juan" , age : 20})


// tipado de funciones
// const sayHiFromFuncion = (fn : (name : string) => void) => { //  fn: Function  =>  aunque funcion no tiene contexto de tipo de dato que reciba como parametro ni como retorno es
//                                                              //el ANY de las funciones
//    fn("Juan");

// }

// sayHiFromFuncion((name:string) => console.log(`hola ${name}`));

//tipado de arrow functions 
 //opcion 1
 const sumar  = (a:number , b:number):number => a + b

//  opcion 2
const sumar2: (a:number , b:number) => number = (a,b) => a + b


//NEVER
function error(message: string): never {
    throw new Error(message);

    //-> return  nunca llega
}


//inferencia de funciones anonimas segun el contexto

const avenger = ["Hulk" , "Thor" , "Spiderman"];

avenger.forEach((x) => console.log(x.toUpperCase)); //sabe que es de tipo string 


//ALIAS DE TIPOS

type Point = { //el nombre del tipo tien que ser PascalCase 
readonly id?: number; // solo lectura -> tener encuenta que no lo convierte en inmutable 
    x: number;
    y: number;
    z?: number;  //Opcional properties 
}


let position: Point = { x: 10, y: 20 };



function createPoint (x: number, y: number): Point{
     return { x, y };
}  

position = createPoint(10, 20);



//template union rypes 
type HexadecimalColor  =  `#${string}`;
const color: HexadecimalColor = "#FFFFFF";


//UNIONS DE TIPOS
let ann : number | string; ///Puedes usar valores EJ   : number | 2 | 

ann = 10;


//Extends type

type Point2 = { x: number; y: number };
type Point3 = { z: number };

type Loc = Point2 & Point3;  


//TYPE INDEXING 

type HeroProperties = {
    isActive: boolean,
    address:{
         planet : string,
         city : string
    }
};


const addressHero : HeroProperties["address"] = {
    planet : "Earth",
    city : "Miami"
}


///TYPE FROM VALUES
const  address ={
    planet : 'sadsjd',
    city : 'prueba'
}


type Address = typeof address;

const  adddressHero2 : Address = {
    planet : 'sadsjd',
    city : 'prueba'
}



// ARRAYS 


const numbers : number[] = [1,2,3,4]

const numbers2 : Array<number> = [1,2,3,4]

//si de mas de un tipo de dato
const numbers3 : (string | number)[] = [1,2,3,4,'5']


//con tus propios tipos de datos

type Point4 = { x: number; y: number };

const points : Point4[] = [ { x: 10, y: 20 } ]




/**
 *[
 * [ 'x' , 'o' , 'x'] 
 * [ 'x' , 'o' , 'x']
 * [ 'x' , 'o' , 'x']
 * ] 
 */


type CellValue = 'x' | 'o' | ' ';

type Board =[
    [CellValue , CellValue , CellValue],
    [CellValue , CellValue , CellValue],
    [CellValue , CellValue , CellValue]
] 


const gameBoard : Board  = [
    [ 'x' , 'o' , 'x'], 
    [ 'x' , 'o' , 'x'], 
    [ 'x' , 'o' , 'x'], 
]

