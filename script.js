let money = +prompt("Ваш бюджет на месяц?", "20000" );
let time = prompt("Введите дату в формате YYYY-MM-DD", "2019*04-12" );
// let money = 2000;
// let time = "2019*04-12";
let firstAnswer = "Мама";
let secondAnswer = "мыла раму";

let appData = {
    budget: money,          //бюджет (передаем сюда переменную из п.2)
    timeData: time,         //данные времени
    expenses: {},               //объект с обязательными расходами
    optionalExpenses: {},       //объект с необязательными расходами
    income: [],                 //массив данных с доп. доходом
    savings: false
};

for (let i = 0; i < 2; i++ ) {  //While(...){}; do {} while(...);
firstAnswer = prompt("Введите обязательную статью расходов в этом месяце (< 50 символов)",
                    "Еда");
secondAnswer = +prompt("Во сколько это обойдётся? (число)",
                    "1000");

if (typeof(firstAnswer) != null && typeof(secondAnswer) != null
        && firstAnswer != "" && firstAnswer.length < 50
        && !isNaN(secondAnswer) ) {              //NaN!=NaN
                console.log("done");
                /* с ключами работать пока не готов!!!
                && firstAnswer != appData.expenses.firstAnswer
                console.log(appData.expenses.firstAnswer);
                console.log(firstAnswer);*/
                appData.expenses[firstAnswer] = secondAnswer; 
        } else { i--; }
}

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет "+ appData.moneyPerDay);

if(appData.moneyPerDay < 200) {
        console.log("Маловато будет");
} else if(appData.moneyPerDay >= 200 && appData.moneyPerDay < 2000) {
        console.log("СереднячОк");
} else if(appData.moneyPerDay >= 2000) {
        console.log("АллигарХ-Х-Х");
} else {
        console.log("Что-то пошло не так");
}