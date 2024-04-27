
const Blusa1 = document.querySelector('.Blusa1');
const Blusa2 = document.querySelector('.Blusa2')
const Saia1 = document.querySelector('.Saia1');
const Saia2 = document.querySelector('.Saia2');
const Vestido1 = document.querySelector('.Vestido1');
const Vestido2 = document.querySelector('.Vestido2');
const Vestido3 = document.querySelector('.Vestido3');


function trocarRoupa() {
  roupas[indexAtual].style.display = 'none'; 
  indexAtual = (indexAtual + 1) % roupas.length; 
  roupas[indexAtual].style.display = 'block'; 
}

setInterval(trocarRoupa, 2000);

const vestirBlusa1 = () => {
  Blusa1.classList.remove('Blusa1');
  Blusa1.classList.add('vestirBlusa1');
}; 

const desvestirBlusa1 = () => {
  Blusa1.classList.remove('vestirBlusa1');
  Blusa1.classList.add('Blusa1');
};


Blusa1.addEventListener('click', () => {
  if (Blusa1.classList.contains('vestirBlusa1')) {
      desvestirBlusa1();
  } else {
      vestirBlusa1();
  }
});

const vestirBlusa2 = () => {
  Blusa2.classList.remove('Blusa2');
  Blusa2.classList.add('vestirBlusa2');
}; 

const desvestirBlusa2 = () => {
  Blusa2.classList.remove('vestirBlusa2');
  Blusa2.classList.add('Blusa2');
};


Blusa2.addEventListener('click', () => {
  if (Blusa2.classList.contains('vestirBlusa2')) {
      desvestirBlusa2();
  } else {
      vestirBlusa2();
  }
});

const vestirSaia1 = () => {
  Saia1.classList.remove('Saia1');
  Saia1.classList.add('vestirSaia1');
}; 

const desvestirSaia1 = () => {
  Saia1.classList.remove('vestirSaia1');
  Saia1.classList.add('Saia1');
};



Saia1.addEventListener('click', () => {
  if (Saia1.classList.contains('vestirSaia1')) {
      desvestirSaia1();
  } else {
      vestirSaia1();
  }
});

const vestirSaia2 = () => {
  Saia2.classList.remove('Saia2');
  Saia2.classList.add('vestirSaia2');
}; 

const desvestirSaia2 = () => {
  Saia2.classList.remove('vestirSaia2');
  Saia2.classList.add('Saia2');
};



Saia2.addEventListener('click', () => {
  if (Saia2.classList.contains('vestirSaia2')) {
      desvestirSaia2();
  } else {
      vestirSaia2();
  }
});

const vestirVestido1 = () => {
  Vestido1.classList.remove('Vestido1');
  Vestido1.classList.add('vestirVestido1');
}; 

const desvestirVestido1 = () => {
  Vestido1.classList.remove('vestirVestido1');
  Vestido1.classList.add('Vestido1');
};

Vestido1.addEventListener('click', () => {
  if (Vestido1.classList.contains('vestirVestido1')) {
      desvestirVestido1();
  } else {
      vestirVestido1();
  }
});

const vestirVestido2 = () => {
  Vestido2.classList.remove('Vestido2');
  Vestido2.classList.add('vestirVestido2');
}; 

const desvestirVestido2 = () => {
  Vestido2.classList.remove('vestirVestido2');
  Vestido2.classList.add('Vestido2');
};

Vestido2.addEventListener('click', () => {
  if (Vestido2.classList.contains('vestirVestido2')) {
      desvestirVestido2();
  } else {
      vestirVestido2();
  }
});

const vestirVestido3 = () => {
  Vestido3.classList.remove('Vestido3');
  Vestido3.classList.add('vestirVestido3');
}; 

const desvestirVestido3 = () => {
  Vestido3.classList.remove('vestirVestido3');
  Vestido3.classList.add('Vestido3');
};

Vestido3.addEventListener('click', () => {
  if (Vestido3.classList.contains('vestirVestido3')) {
      desvestirVestido3();
  } else {
      vestirVestido3();
  }
});