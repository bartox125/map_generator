import {insertBackground} from "./marking.ts"
/**
 * tworzy siatkę div'ów
 * @param width szerokośc generowanej mapy
 * @param height wysokośc generowanej mapy
 * @param element div w którym ma być generowana mapa 
 */
function createMap(width:number,height:number,element:HTMLDivElement){
    for(let y=0;y<height;y++){
        for(let x=0;x<width;x++){
            const div=document.createElement("div")
            div.setAttribute("id", `m_${y}_${x}`)
            div.classList.add("el")
            div.classList.add("mapEl")
            element.append(div);
        }
    }
}
/**
 * tworzy siatkę div'ów
 * @param width szerokośc generowanego div'a
 * @param height wysokość generowanego div'a
 * @param element div, w którym będzie generowana siatka div'ów
 */
function createItems(width:number,height:number,element:HTMLDivElement){
    for(let y=0;y<height/2;y++){
        for(let x=0;x<width;x++){
            const div=document.createElement("div")
            div.setAttribute("id", `i_${y}_${x}`)
            div.classList.add("el")
            div.classList.add("item")
            div.style.backgroundPosition=`-${2+25*x}px -${2+25*y}px`
            div.addEventListener("click", ()=>insertBackground(div, document.querySelector<HTMLInputElement>('#automat')!))
            element.append(div);
        }
    }
    for(let yy=height/2;yy<height;yy++){
        for(let xx=0;xx<width;xx++){
            const div=document.createElement("div")
            div.setAttribute("id", `i_${yy}_${xx}`)
            div.classList.add("el")
            div.classList.add("item")
            div.style.backgroundPosition=`-${402+25*xx}px -${(2+25*yy)-500}px`
            div.addEventListener("click", ()=>insertBackground(div, document.querySelector<HTMLInputElement>('#automat')!))
            element.append(div);
        }
    }
}

export {createMap, createItems}