window.onload = () => {
    var markup = document.documentElement.innerHTML;
    document.getElementById('html').innerText = markup;

    const inputs = document.querySelectorAll('.field');

    for (const input of inputs) {
        input.setAttribute('required', '');
    }

    //loading page
    var roundLogEl = document.querySelector('.js-object-log');

    anime({
        targets: roundLogEl,
        innerHTML: [0, 100],
        easing: 'linear',
        round: 5 // Will round the animated value to 1 decimal
    });
    setTimeout(function () {
        let msg = document.getElementById("remove")
        msg.parentNode.removeChild(msg)
    }, 2000)

    var logEl = document.querySelector('.battery-log');

    var battery = {
        charged: '0%',
        cycles: 120
    }

    anime({
        targets: battery,
        charged: '100%',
        cycles: 100,
        round: 0,
        easing: 'linear',
        update: function () {
            logEl.innerHTML = JSON.stringify(battery);
        }
    });
    typeWriter()
}
var i = 0;
var txt = 'Corentin COLLERY';
var speed = 300;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("name").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        document.getElementById("name").innerHTML = ""
        i = 0
        setTimeout(typeWriter, 500)
    }
}

/*let darkModeState = 1

function darkMode() {
    let all = document.querySelectorAll(".bg-dark")
    console.log(darkModeState)

    if (darkModeState === 0) {
        let all = document.querySelectorAll(".bg-light")
        for (var j = 0; j < all.length; j++) {
            darkModeState = 1
            all[j].classList.add('bg-dark');
            all[j].classList.add('text-light');
            all[j].classList.remove('bg-light');
            all[j].classList.remove('text-dark');
        }
    } else {
        for (var i = 0; i < all.length; i++) {
            darkModeState = 0
            all[i].classList.add('bg-light');
            all[i].classList.add('text-dark');
            all[i].classList.remove('bg-dark');
            all[i].classList.remove('text-light');
        }
    }
}*/
