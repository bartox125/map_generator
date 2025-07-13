import {isInArray, removeElement, getId} from "./utilis.ts"
import { saveToStack } from "./stack.ts"
let cover:HTMLDivElement
let elements:Element[]=[]
interface startPosition{
    x: number;
    y: number;
}
let ctrl=false
let isDragging=false
let startData:startPosition={
    x: 0,
    y: 0,
}
/**
 * zmienia granicę zaznaczonego div'a, w zależności od zmiennej ctrl odznacza poprzedni element, jednocześnie dodaje div'a do yablicy aktywnych elementów 
*@param object klikniety własnie div
*/
const chose=(object:HTMLDivElement)=>{
    if(elements.length==0){
        object.classList.add("checked")
        object.classList.remove("notChecked")
        elements.push(object)
    }
    else{
        if(ctrl==true){
            if(isInArray(object,elements)==true){
                elements.push(object)
                object.classList.add("checked")
                object.classList.remove("notChecked")
            }
            else{
                object.classList.add("notChecked")
                elements=removeElement(object,elements)
            }
        }
        else{
            for(let i=0;i<elements.length;i++){
                elements[i].classList.add("notChecked")
            }
            elements=[]
            elements.push(object)
            object.classList.add("checked")
            object.classList.remove("notChecked")
        }
    }
}
/**
 * ustawia zmienną ctrl na true
 */
const activateCtrl=()=>{
        ctrl=true
}
/**
 * ustawia zmienną ctrl na false
 */
const deactivateCtrl=()=>{
    if(ctrl){
        ctrl=false
    }    
}
/**
 * ustawia isDragging na true, ustawia początkowe współrzędne div'a cover oraz jego szerokość i wysokość
 * @param e połozenie myszki
 * @param div div cover, który zaznacza elementy mapy
 */
const startDragging=(e:MouseEvent,div:HTMLDivElement)=>{
    isDragging=true
    cover=div
    startData.x=e.pageX;
    startData.y = e.pageY;
    cover.style.left=`${startData.x}px`;
    cover.style.top = `${startData.y}px`;
    cover.style.display=`block`;
    cover.style.width="0px"
    cover.style.height="0px"
}
/**
 * jeżeli uzytkownik przesuwa myszką to zmienia to parametry div'a cover
 * elementy znajdujące się "pod" div'em cover dodaje do tablicy aktywnuch elementów oraz nadaje im klasę
 * odpowiedzialną za zmianę koloru
 * @param e położenie myszki
 */
const dragging=(e:MouseEvent)=>{
    if(isDragging){
        if(!ctrl && elements.length>1){
            for(let i=0;i<elements.length;i++){
                elements[i].classList.remove("checked")
            }
            elements=[]
        }
        const currentX = e.pageX;
        const currentY = e.pageY;
        const width = currentX - startData.x;
        const height = currentY - startData.y;
        console.log(currentX);
        console.log(currentY);
        console.log(width);
        console.log(height);
        console.log(startData);
        
        cover.style.width = `${Math.abs(width)}px`;
        cover.style.height = `${Math.abs(height)}px`;
        cover.style.left = `${Math.min(startData.x, currentX)}px`;
        cover.style.top = `${Math.min(startData.y, currentY)}px`;

        document.querySelectorAll("mapEl").forEach(cell=>{
            cell.classList.add("checked")
            cell.classList.remove("notChecked")
        })
        
        const rect = cover.getBoundingClientRect();
        document.querySelectorAll('.mapEl').forEach(cell => {
            const cellRect = cell.getBoundingClientRect();
            if (
                cellRect.left < rect.right &&
                cellRect.right > rect.left &&
                cellRect.top < rect.bottom &&
                cellRect.bottom > rect.top
            ) {
                cell.classList.add("checked")
                cell.classList.remove("notChecked")
                elements.push(cell)
            }
        });
    }
}
/**
 * kończy proces przesuwania 
 */
const stopDragging=()=>{
    if(isDragging){
        isDragging=false
        cover.style.display="none"
        cover.style.width="0px"
        cover.style.height="0px"
    }
}
/**
 * czyści wykrane przez użytkownika elementy mapy
 */
const clearBoard=()=>{
        elements.forEach(element=>{
            element.classList.remove("checked")
            element.classList.remove("item")
        })
        elements=[]
}
/**
 * ustawia background image zaznaczonych elementów mapy na ten podany przez użytkownika
 * @param element element, który ma być wstawiony w odpowiednie miejsce na mapie
 * @param input input, który odpowiada za aktywację automatycznego zaznaczania
 */
const insertBackground=(element:HTMLDivElement,input:HTMLInputElement)=>{
    const isSet=input.checked
    let startEl=elements[0]
    if(elements.length>0){
        for(let i=0;i<elements.length;i++){
            let obj=(elements[i] as HTMLDivElement)
            obj.classList.add("item")
            obj.style.backgroundPosition=element.style.backgroundPosition
        }
        saveToStack(document.querySelector<HTMLDivElement>('#map')!)
        elements.forEach(element=>{
            element.classList.remove("checked")
        })
        elements=[]
    }
    if(isSet && startEl){
        let id=getId(startEl)
        const nextElement=document.querySelector<HTMLDivElement>('#'+id)!
        chose(nextElement)
    }    
}
export {chose, activateCtrl, deactivateCtrl, startDragging, dragging, stopDragging, clearBoard, insertBackground,}
