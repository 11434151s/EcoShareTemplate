// Mock autocomplete: in a real app replace by AJAX calls to server
const sampleNames = ['Perceuse', 'Perceuse sans fil', 'Tour à bois', 'Chaise pliante', 'Lampe', 'Vélo', 'Tente', 'Table de jardin'];
function autocompleteName(q){
  const list = document.getElementById('autocomplete-list');
  if(!list) return;
  list.innerHTML = '';
  if(!q || q.length < 1) return;
  const matches = sampleNames.filter(s => s.toLowerCase().includes(q.toLowerCase())).slice(0,6);
  matches.forEach(m=>{
    const div = document.createElement('div');
    div.className='autocomplete-item';
    div.textContent = m;
    div.onclick = ()=> {
      const input = document.getElementById('q-name');
      if(input) input.value = m;
      list.innerHTML = '';
    };
    list.appendChild(div);
  });
}
function filterList(){
  alert('Filtre appliqué (simulation). Intégrer la logique côté serveur pour résultats réels.');
}
