 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. 
	Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную 
	либо выражение с ответом.
	3) console.log() прописывать не обязательно, 
	т.к. команда return уже означает вывод результата работы функции.
 */

function averageMark(algebra, geography, physics) {
	let sum = algebra + geography + physics;
	let average = sum / averageMark.length; 
	
    
	return average;
}




function sayHello(myName) {
	let message = 'Привет, мир! Меня зовут ' + myName;
    
	return message;
}



function calculateFormula(x = 2, y = 22, z = 0) {
	let result = x * y + 5 * z + x - 1;

    return result;
}