const text = "Name: antón";
  let index = 0;
  const efect = document.getElementById("author");

  function type() {
    efect.textContent = text.slice(0, index);
    index++;
    
    if (index > text.length) {
      index = 0;
    }
    setTimeout(type, 200);
  }
  type();
