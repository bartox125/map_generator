/**
 * sprawdza czy dany element znajduje się w tablicy
 * @param obj szukany obiekt
 * @param array tablica, w której szukamy
 * @returns zwraca true albo flase
 */
function isInArray(obj:Element,array:Array<Element>){
    for(let i=0;i<array.length;i++){
        if(array[i]==obj){
            return false
        }
    }
    return true
}
/**
 * usuwa element z tablicy
 * @param obj element do usunięcia
 * @param array tablica, z której ma byc usunięty element
 * @returns tablica bez elementu, który miał być usunięty
 */
function removeElement<HTMLDivElement>(obj:HTMLDivElement,array:Array<HTMLDivElement>){
    let id=array.indexOf(obj)
    array.splice(id,1)
    return array
}
/**
 * funkcja, która zwraca następny element mapy do zaznaczania
 * @param element aktywny element mapy
 * @returns id następnego elemntu mapy
 */
function getId(element:Element){
    let id=element.id
    let array=id.split("_")
    if(parseInt(array[2])<44){
        return `m_${array[1]}_${parseInt(array[2])+1}`
    }
    else if(parseInt(array[1])!=39){
        return `m_${parseInt(array[1])+1}_0`
    }
}

export {isInArray, removeElement, getId}