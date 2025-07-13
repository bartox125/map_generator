import './style.css'
import { createMap, createItems } from './generate.ts'
import {startDragging, dragging, stopDragging, deactivateCtrl, chose, clearBoard} from './marking.ts'
import {saveToStack, undo, rendo} from './stack.ts'
import { router } from './router.ts'
import {save, load} from './save_load.ts'

createItems(16,40,document.querySelector<HTMLDivElement>('#items')!)
createMap(45,40,document.querySelector<HTMLDivElement>('#map')!)
saveToStack(document.querySelector<HTMLDivElement>('#map')!)
document.getElementById("map")?.addEventListener("mousedown", (e:MouseEvent)=>{
  startDragging(e, document.querySelector<HTMLDivElement>('#cover')!)  
})
document.addEventListener("mouseup", ()=>{
  stopDragging()
})
document.getElementById("map")?.addEventListener("mousemove", (e:MouseEvent)=>{
  dragging(e)
})
document.getElementById("cover")?.addEventListener("mousemove", (e:MouseEvent)=>{
  dragging(e)
})
document.addEventListener("keydown", (event:KeyboardEvent)=>{
  router(event)
})
document.addEventListener("keyup",()=>{
  deactivateCtrl()
})
document.getElementById("map")?.addEventListener("contextmenu", (event:MouseEvent)=>{
  event.preventDefault()
  document.querySelector<HTMLDialogElement>('#menu')!.showModal()
})
document.getElementById("map")?.addEventListener("click", (e:MouseEvent)=>{
  const target = e.target as HTMLElement;
    if (target.classList.contains("mapEl")) {
        chose(target as HTMLDivElement);
    }
})
document.getElementById("save")?.addEventListener("click", ()=>{
  save(document.querySelector<HTMLDivElement>('#map')!)
})
document.getElementById("load")?.addEventListener('click', () => {
  document.getElementById("fileInput")?.click();
});
document.getElementById("fileInput")?.addEventListener("change", (event)=>{
  load(event,document.querySelector<HTMLDivElement>('#map')!)
})
document.getElementById("undo")?.addEventListener("click", (event)=>{
  event.preventDefault();
  undo(document.querySelector<HTMLDivElement>('#map')!)
})
document.getElementById("rendo")?.addEventListener("click", (event)=>{
  event.preventDefault();
  rendo(document.querySelector<HTMLDivElement>('#map')!)
})
document.getElementById("delete")?.addEventListener("click",()=>{
  clearBoard()
})
