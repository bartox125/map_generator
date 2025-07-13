import { activateCtrl, clearBoard } from "./marking.ts"
import { rendo, undo } from "./stack.ts";
import {save} from './save_load.ts';
/**
 * funkcja, która w zależności od klikniętych klawiszy wywołuje odpowiednie funkcje
 * @param e zdarzenie klawiatury
 */
const router = (e: KeyboardEvent) => {
    if (e.key == "Control" || e.key == "Meta") {
        activateCtrl()
    }
    if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || e.key == 'Y')) {
        e.preventDefault();
        rendo(document.querySelector<HTMLDivElement>('#map')!)
    }
    if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key == 'Z')) {
        e.preventDefault();
        undo(document.querySelector<HTMLDivElement>('#map')!)
    }
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key == 'S')) {
        save(document.querySelector<HTMLDivElement>('#map')!)
    }
    if ((e.ctrlKey || e.metaKey) && (e.key === 'l' || e.key == 'L')) {
        document.getElementById("fileInput")?.click();
    }
    if (e.key == "Delete") {
        clearBoard()
    }
}

export { router }