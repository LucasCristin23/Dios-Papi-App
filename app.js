//-------MIS NUMEROS DEL SORTEO
const numerosGanadores = [
    44 , 55 , 15
];

//-----DESARROLLO
const form = document.querySelector('#formNumber');
form.addEventListener('submit', (e) => {
    e.preventDefault()
})

const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    const input = document.querySelector('#input')
    numerosGanadores.includes(Number(input.value)) ? 
    alert('Ganaste wacho ganaste')
    :
    alert('no ganaste la proxima sera')    
});

console.log(numerosGanadores);