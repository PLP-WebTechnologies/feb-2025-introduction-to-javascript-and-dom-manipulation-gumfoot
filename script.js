function changeText() {
    const text = document.getElementById('text');
    text.textContent = "The text has been changed! 🎉";
  }
  
  function changeStyle() {
    const title = document.getElementById('main-title');
    title.style.color = 'crimson';
    title.style.fontSize = '2.5rem';
    title.style.fontFamily = 'Courier New, monospace';
  }
  
  function addElement() {
    const area = document.getElementById('dynamic-area');
    if (!document.getElementById('new-paragraph')) {
      const newPara = document.createElement('p');
      newPara.id = 'new-paragraph';
      newPara.textContent = "This is a dynamically added paragraph.";
      area.appendChild(newPara);
    }
  }
  
  function removeElement() {
    const para = document.getElementById('new-paragraph');
    if (para) {
      para.remove();
    }
  }
  