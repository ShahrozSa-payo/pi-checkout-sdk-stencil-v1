export function message(type: string, text: string, delay: number = 2000, color: string = '') {
  const el: HTMLDivElement = document.createElement('div');
  
  el.style.backgroundColor = color ? color : type === 'success' ? 'green' : 'red';
  el.style.color = 'white';
  el.style.fontSize = '20px';
  el.style.borderRadius = '5px';
  el.style.border = '1px solid grey';
  el.style.padding = '10px 15px';
  el.style.position = 'fixed';
  el.style.zIndex = '900';
  el.style.right = '5%';
  el.style.top = '5%';
  el.style.boxShadow = '0 2px 4px -1px black';
  el.innerHTML = text;

  document.body.appendChild(el);
  setTimeout(() => el.remove(), delay);
}
