let money = prompt("Ваш бюджет на месяц?", "20000" );
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
let i = 0;
for (i = 1; i < 3; i++ ) {
firstAnswer = prompt("Введите обязательную статью расходов в этом месяце",
                    "Еда");
secondAnswer = prompt("Введите обязательную статью расходов в этом месяце",
                    "1000");
appData.expenses[firstAnswer] = secondAnswer;
}
//console.log(appData.expenses);
var key;
alert("День "+ appData.timeData+
        "\n"+"Бюджет "+ appData.budget);