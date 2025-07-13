/**
 * zapisuje zawartość podanego div'a w pliku
 * @param contentDiv div, którego zawartość ma być zapisana w pliku
 */
const save=(contentDiv:HTMLDivElement)=>{
    const blob = new Blob([contentDiv.innerHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content.html';
    a.click();
    URL.revokeObjectURL(url);
}
/**
 * funkcja ładuje zawartość pliku do podanego div'a
 * @param event zmiana stanu inputa
 * @param contentDiv div do którego ma być załadowany plik 
 */
const load=(event:Event,contentDiv:HTMLDivElement)=>{
    const files = (event.target as HTMLInputElement).files;
            if (files && files.length > 0) {
                const file = files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    contentDiv.innerHTML = e.target?.result as string;
                };
                reader.readAsText(file);
            }
}
export {save, load}