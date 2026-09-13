export function setupInfoCard(card,button,content){
 function toggle(){const collapsed=card.classList.toggle('collapsed');content.hidden=collapsed;button.setAttribute('aria-expanded',String(!collapsed));button.setAttribute('aria-label',collapsed?'설명 펼치기':'설명 접기');button.textContent=collapsed?'＋':'−';card.title=collapsed?'더블클릭하여 설명 펼치기':'더블클릭하여 설명 접기';}
 card.addEventListener('dblclick',event=>{if(event.target.closest('button,a,input,select'))return;event.preventDefault();toggle();});
 button.addEventListener('click',event=>{event.stopPropagation();if(event.detail>1)return;toggle();});
 return {toggle};
}
