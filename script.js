let money, time;
function start (){
    while (isNaN(money) || money =="" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "20000" );
    }    
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019*04-12" );
}
start();

let appData = {
    budget: money,          //бюджет (передаем сюда переменную из п.2)
    timeData: time,         //данные времени
    expenses: {},           //объект с обязательными расходами
    optionalExpenses: {},   //объект с необязательными расходами
    income: [],             //массив данных с доп. доходом
    savings: true
};

function chooseExpenses () {
    for (let i = 0; i < 2; i++ ) {  //While(...){}; do {} while(...);
        let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце (< 50 символов)",
                        "Еда");
        let secondAnswer = +prompt("Во сколько это обойдётся? (число)",
                        "1000");
        
        if (typeof(firstAnswer) != null && typeof(secondAnswer) != null
            && firstAnswer != "" && firstAnswer.length < 50
            && !isNaN(secondAnswer) && secondAnswer != "") {              //NaN!=NaN
                console.log("done");
                        /* с ключами работать пока не готов!!!
                        && firstAnswer != appData.expenses.firstAnswer*/
                appData.expenses[firstAnswer] = secondAnswer; 
        } else { i--; }
    }    
}
chooseExpenses();

function chooseOptExpenses () {
    for (let i = 1; i < 4; i++ ) {  //While(...){}; do {} while(...);
        let Answer = prompt("Статья необязательных расходов?  (< 50 символов)",
                        "Бухло");
        
        if (typeof(Answer) != null && Answer != ""
            && Answer.length < 50) {              //NaN!=NaN
                console.log("done");
                appData.optionalExpenses[i] = Answer; 
        } else { i--; }
    }    
}
chooseOptExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Ежедневный бюджет "+ appData.moneyPerDay);
}
detectDayBudget();

function detectLevel(){
    if(appData.moneyPerDay < 200) {
            console.log("Маловато будет");
    } else if(appData.moneyPerDay >= 200 && appData.moneyPerDay < 2000) {
            console.log("СереднячОк");
    } else if(appData.moneyPerDay >= 2000) {
            console.log("АллигарХ-Х-Х");
    } else {
            console.log("Что-то пошло не так");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Признавуайся сколько прячешь?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Месячный доход с депозита: " + appData.monthIncome)
    }
}
checkSavings();
console.log("АллигарХ-Х-Х");