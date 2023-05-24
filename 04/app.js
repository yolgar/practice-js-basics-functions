function runTimer() {

    let iter = 0;
    const idInterval = setInterval(function() {
        const time = (new Date()).toLocaleTimeString();
        console.log(time);

        iter++;

        if(iter === 5) {
        clearInterval(idInterval);
    }
    }, 5000);
}

runTimer();