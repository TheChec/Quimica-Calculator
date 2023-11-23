//Soluciones morales
let Solution = document.querySelector('#SoluMoral');

Solution.addEventListener('click', () => {
    let WeightMol = document.querySelector('#MolSol').value;
    let Molarmass = document.querySelector('#VoluSol').value;

    

    let WeightDisol = document.querySelector('#WeiAt').value;
    let resultN = 0;
    let resultM = 0;

    resultN= Molarmass/WeightMol;
    resultM = resultN/WeightDisol;

    
    document.querySelector('#MasaSolu').innerHTML = "Molalidad (M) "+resultM.toFixed(2)+" g";
    document.querySelector('#CalcN').innerHTML = "Moles de soluto (N) = "+resultN.toFixed(2);
})

/*En esta parte creamos un boton que despliegue varios inputs 
dependiendo de la cantidad de datos que se necesite ingresar
*/
const btnAdd = document.querySelector('#Add');
const InputDinamic = document.querySelector('#dinamicInputs');
const btnCalc = document.querySelector('#Calc')
let total = 1;

btnAdd.addEventListener('click',e => {
    let div = document.createElement('div')
    div.innerHTML = '<label>${total++}</label>  <input type="number" name="element[]" placeholder="Masa del elemento" autocomplete="off" required>  <input type="number" name="elementN[]" placeholder="Cantidad" autocomplete="off" required>  <button onclick="deletes(this)">Eliminar</button>'
    InputDinamic.appendChild(div);

    UpdateTotal();
})

//Eliminar inputs
const deletes = (e) => {
    const divFather = e.parentNode;
    InputDinamic.removeChild(divFather);
    UpdateTotal();
}
//Actualizar número de elementos
const UpdateTotal = () => {
    let divs = InputDinamic.children;
    total = 1;
    for(let i = 0; i < divs.length; i++){
        divs[i].children[0].innerHTML = "Elemento "+total++;
    }
}

//Obtener datos de los inputs
function getData() {
    let divs = InputDinamic.children;
    let WeightElement = [];
    let AmountElement = [];

    for(let i = 0; i < divs.length; i++){
        WeightElement.push(divs[i].children[1].value);
        AmountElement.push(divs[i].children[2].value);
    }
    return {WeightElement: WeightElement,
            AmountElement: AmountElement}
}

//Aquí operamos para conseguir la masa molar del elemento

function masaMolar(){
    const {WeightElement, AmountElement} = getData()
    let result = 0;

    for(let i = 0; i < WeightElement.length; i++){
        result += WeightElement[i] * AmountElement[i];
    }
    let resultMasaMolar = document.querySelector('#ResultMasaMolar');
    resultMasaMolar.innerHTML = result.toFixed(2)+" g/mol";
    document.querySelector('#FormMasaMolar').reset();
    console.log(result);
}



//Conversión de unidades
//Aquí organizamos el select para mostrar lo que necesitamos para convertir

function Converter(){
    let Anything;
    Anything = document.Convertions.Anything[document.Convertions.Anything.selectedIndex].value;
    if(Anything == 0){
        document.querySelector('#Contain5').style.display = 'none';
        document.querySelector('#Contain4').style.display = 'none';
        document.querySelector('#Contain1').style.display = 'flex';
        document.querySelector('#Contain2').style.display = 'none';
        document.querySelector('#Contain3').style.display = 'none';
   }else if(Anything == 1){
        document.querySelector('#Contain5').style.display = 'none';
        document.querySelector('#Contain4').style.display = 'none';
        document.querySelector('#Contain2').style.display = 'flex';
        document.querySelector('#Contain1').style.display = 'none';
        document.querySelector('#Contain3').style.display = 'none';
   }else if(Anything == 2){
        document.querySelector('#Contain5').style.display = 'none';
        document.querySelector('#Contain4').style.display = 'none';
        document.querySelector('#Contain3').style.display = 'flex';
        document.querySelector('#Contain2').style.display = 'none';
        document.querySelector('#Contain1').style.display = 'none';
   }else if(Anything == 3){
        document.querySelector('#Contain5').style.display = 'none';
        document.querySelector('#Contain4').style.display = 'flex';
        document.querySelector('#Contain3').style.display = 'none';
        document.querySelector('#Contain2').style.display = 'none';
        document.querySelector('#Contain1').style.display = 'none';
   }else if(Anything == 4){
        document.querySelector('#Contain5').style.display = 'flex';
        document.querySelector('#Contain4').style.display = 'none';
        document.querySelector('#Contain3').style.display = 'none';
        document.querySelector('#Contain2').style.display = 'none';
        document.querySelector('#Contain1').style.display = 'none';
   }
}

//Conversión de gramos a moles

let btnGraMas = document.querySelector('#ConGraMas');
btnGraMas.addEventListener('click', () => {
    let grams = document.querySelector('#GramCon1').value;
    let MolarMass = document.querySelector('#MasaMolCon1').value; 
    let result = 0;

    result = grams / MolarMass;

    document.querySelector('#ResultConverter1').innerHTML = result+" Moles";
});

//conversión de Moles a Atomos

let btnMolAt = document.querySelector('#ConMolAt');
btnMolAt.addEventListener('click', () => {
    let Mols = document.querySelector('#MolCon2').value;
    let result = 0;
    let Avogadro = 6.022*Math.pow(10,23);
    
    result = Mols*( Avogadro/1 );

    document.querySelector('#ResultConverter2').innerHTML = result+" Átomos";
});

//Conversión de Atomos a Gramos
let ConAtGra = document.querySelector('#ConAtGra');
ConAtGra.addEventListener('click', () => {
    let Grams = document.querySelector('#GraCon3').value;
    let MolarMass = document.querySelector('#PMCon3').value;
    let Avogadro = 6.022*Math.pow(10,23);
    let Amount1 = document.querySelector('#Amount1Con3').value;
    let Amount2 = document.querySelector('#Amount2Con3').value;

    let result = 0;

    result = Grams*(1/MolarMass)*(Avogadro/1)*(Amount1/Amount2);

    document.querySelector('#ResultConverter3').innerHTML = result+" g"
});

//Conversión de Moles a gramos
let ConMolGra = document.querySelector('#ConMolGra');
ConMolGra.addEventListener('click', () =>{
    let Mol = document.querySelector('#MolCon4').value;
    let MolarMass = document.querySelector('#MasaMol4').value;
    
    
    let result = 0;
    
    result = Mol*(MolarMass/1)

    document.querySelector('#ResultConverter4').innerHTML = result+" g"
})
//Conversión de mililitros a litros
let ConMlL = document.querySelector('#ConMlL');
ConMlL.addEventListener('click', () =>{
    let Ml = document.querySelector('#MlCon5').value;
    let result = 0;
    
    result = Ml*(1/1000)

    document.querySelector('#ResultConverter5').innerHTML = result+" L"
})

document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = "block";
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = "none";
});

document.getElementById('openModal2').addEventListener('click', function() {
    document.getElementById('myModal2').style.display = "block";
});

document.getElementById('closeModal2').addEventListener('click', function() {
    document.getElementById('myModal2').style.display = "none";
});

document.getElementById('openModal3').addEventListener('click', function() {
    document.getElementById('myModal3').style.display = "block";
});

document.getElementById('closeModal3').addEventListener('click', function() {
    document.getElementById('myModal3').style.display = "none";
});
