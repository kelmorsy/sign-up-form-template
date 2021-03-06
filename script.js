const password = document.querySelector('input[name="password"]');
const confirmPass = document.querySelector('[name="password-confirm"]')

{
    const meter = document.querySelector('meter');
    const passwordStrength = document.querySelector('.strength')
    const strengths = {
        '0': "",
        '1': "Weak",
        '2': "Medium",
        '3': "Strong"
    }

    function updateMeter(e) {
        let password = e.target.value;
        let passLength = password.length;
        let passScore;

        if (passLength > 0) passScore = 0;
        if (password.match(/\d/g)) passScore += 1;
        if (password.match(/[a-z]/g)) passScore += 1;
        if (password.match(/[A-Z]/g)) passScore += 1;
        if (passLength < 7) passScore = 1;

        meter.value = passScore;
        passwordStrength.innerText = strengths[passScore];
    }
}


{
    const confirmMessage = document.querySelector('p.confirm');
    var timer;

    function confirmPassCheck(e) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (confirmPass.value != password.value) {
                confirmMessage.classList.add("invalid");
            } else confirmMessage.classList.remove("invalid");
        }, 1000)
    }
}

password.addEventListener('input', updateMeter)
confirmPass.addEventListener('input', confirmPassCheck)
