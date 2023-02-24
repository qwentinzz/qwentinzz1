let intervalVariable = undefined;
let timeleft = 0;
let totaltime = 0;

const startTimer = () => {
    // Создаем интервал, который будет считать нам время
    intervalVariable = setInterval(updateTime, 10);
}

const resetTimer = () => {
    // Останавливаем таймер
    stopTimer();
    timeleft = -10;

    // Обновляем значение в ui
    updateTime();
}

const stopTimer = () => {
    // Производим очистку интервала
    clearInterval(intervalVariable);
}

const updateTime = () => {
    // Шаг 10 миллисекунд
    timeleft = timeleft + 10;

    // Получаем нужные нам элементы
    const timers = document.getElementById("timers");
    const timerms = document.getElementById("timerms");
    const milli = timeleft % 1000;

    // Устанавливаем значения
    timers.innerHTML = Math.floor(timeleft / 1000);
    timerms.innerHTML = Math.floor(milli / 10);
    timers.style.color = "blue";
    timerms.style.color = "blue";
}
