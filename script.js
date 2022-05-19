const counters = document.querySelectorAll('.counter');
const speed = 90000;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 800);
        } else {
            count.innerText = target;
        }
    }

    updateCount();

    setTimeout(function() {
        location.reload();
      }, 10000);

});