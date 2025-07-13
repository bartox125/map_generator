let tour:number=0
let tab:string[]=[]
/**
 * dodaje do stosu zawartość mapy
 * @param board div mapa
 */
const saveToStack=(board:HTMLDivElement)=>{
    tab.push(board.innerHTML)
}
/**
 * umożliwia działanie Ctrl+Z
 * @param toChange div mapa
 */
const undo=(toChange:HTMLDivElement)=>{
    if(tab.length-1-tour>0){
        tour++
        toChange.innerHTML=tab[tab.length-1-tour]
    }
}
/**
 * umożliwia działanie Ctrl+Y
 * @param toChange div mapa
 */
const rendo=(toChange:HTMLDivElement)=>{
    if(tab.length-1-tour<tab.length-1){
        tour--
        toChange.innerHTML=tab[tab.length-1-tour] 
    }
}

export {undo, rendo, saveToStack}