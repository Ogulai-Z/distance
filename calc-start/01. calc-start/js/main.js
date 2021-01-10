//Находим элементы формы 
const squareInput = document.getElementById('square-input');
const squareRange = document.getElementById('square-range');
const inputs = document.querySelectorAll('input');

// Находим радио кнопки
const typeReconstructionElements = document.querySelectorAll('input[name="type"]');
const typeBuildingElements = document.querySelectorAll('input[name="building"]');
const roomsElements = document.querySelectorAll('input[name="rooms"]');

//Находим чекбоксы
const ceilings = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');

//Базовая цена и элемент для вывода стоимости 
const basePricePerMeter = 6000;
const totalPriceElement = document.getElementById('total-price');


//когда будет меняться ползунки будет меняться и цифра...связка range с текстовым полем

squareRange.addEventListener('input', function(){
    squareInput.value = squareRange.value; 
});
//связка  текстового поля с range
squareInput.addEventListener('input', function(){
    squareRange.value = squareInput.value; 
});
//
//Обходим все инпуты,и если какой-то инпут был изменен, запуская перерасчет стоимости
  inputs.forEach(function(item){
        item.addEventListener('input', calculate);
  });
  calculate();
  // Функция calculate для перерасчет стоимости 
  function calculate() {
    //площадь квартиры
    const  square = parseInt(squareInput.value);
// тип ремонта 
   let typeReconstructionCost;
   typeReconstructionElements.forEach(function (item){
       if(item.checked) {
        typeReconstructionCost = parseFloat(item.value); //parseFloat чтоб превратил с заятой на цифрую а  parseInt переведет толькоцелые числа
       }
   });
//тип дома 
let typeBuildingCost;
typeBuildingElements.forEach(function (item){
    if(item.checked) {
        typeBuildingCost = parseFloat(item.value); //parseFloat чтоб превратил с заятой на цифрую а  parseInt переведет толькоцелые числа
       }
});

  

//кол-во комнат 
let roomsCost;
roomsElements.forEach(function (item) {
    if (item.checked) {
        roomsCost = parseFloat(item.value);
    }
});

//доп опции
//const ceilingCost = условие ?выполняется если true: выполняется если false;
const ceilingCost = ceilings.checked ? parseFloat(ceilings.value): 1;
const wallsCost = walls.checked ? parseFloat(walls.value): 1;
const floorsCost = floor.checked ? parseFloat(floor.value): 1;

//Подсчитать общую стоимость 

const totalPrice = basePricePerMeter * square *
 typeReconstructionCost * typeBuildingCost * roomsCost * ceilingCost * wallsCost * floorsCost;
 console.log(totalPrice);

 const formatter = new Intl.NumberFormat('ru');


 totalPriceElement.innerText = formatter.format(totalPrice);
}














