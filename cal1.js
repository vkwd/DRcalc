x = document.getElementById('err1');

function bpnsion() {
    return parseInt(document.getElementById('basic_pension').value);
}

const calculate = () => {
    const bp = bpnsion();
    const dr = 0.852;
    const drp = 0.775;
    if (isNaN(bp) || bp == '' || bp < 3500 || bp > 99999) {
        x.value = `enter Basic Pension >3500 or <99999`;
        return false;
    } else {
        x.value = '';
    }
    document.getElementById('DA_DR').value = dr;
    gp = bp + bp * dr;

    document.getElementById('GPension').value = Math.ceil(gp);

    gpp = bp + bp * drp;

    document.getElementById('GOL').value = Math.ceil(gp - gpp);
};

const mybtn = document.querySelector('#btn');

mybtn.addEventListener('click', calculate);