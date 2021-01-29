//<script type="text/javascript">

// function isValid() {
//     if (isNaN(bp) || bp === '' || bp < 3500 || bp > 99999) {
//         alert('enter valid basic pension');
//         document.getElementById(
//             'error'
//         ).textContent = `Please enter a valid basic Pension number >3500 & < 99999`;
//         return false;
//     } else {
//         alert(bp);

//         document.getElementById('error').textContent = '';
//     }
// }

// function calculate() {
//     //     //document.getElementById('DA_DR').value = 0;

//     //     return;
//     // }
//     // if (!isValid(bp)) {
//     //     const bp = parseInt(document.getElementById('basic_pension').value);
//     const dr = 0.775;
//     const drp = 0.759;
//     //let gp = 0;
//     //let gpp = 0;
//     const bp = parseInt(document.getElementById('basic_pension').value);
//     if (isNaN(bp) || bp == '' || bp < 3500 || bp > 99999) {
//         // alert('enter valid basic pension');
//         document.getElementById(
//             'error'
//         ).textContent = `Please enter a valid basic Pension number >3500 & < 99999`;
//         return false;
//     } else {
//         document.getElementById('error').textContent = '';
//     }

//     //     return true;
//     // }
//     document.getElementById('DA_DR').value = dr;
//     //const dr = 0.775;
//     //const drp = 0.759;

//     gp = bp + bp * dr;
//     // alert(gp);

//     document.getElementById('GPension').value = Math.ceil(gp);
//     //alert(gp);

//     gpp = bp + bp * drp;
//     //alert(gpp);
//     document.getElementById('GOL').value = Math.ceil(gp - gpp);

//     function newFunction() {
//         return true;
//     }
// }
const bp = parseInt(document.getElementById('basic_pension').value);
//alert(isValid(3200));
//alert(bp);
x = document.getElementById('error');

function isValid() {
    const bp = parseInt(document.getElementById('basic_pension').value);
    //alert(bp);
    if (isNaN(bp) || bp === '' || bp < 3500 || bp > 99999) {
        //alert('enter valid basic pension');
        // document.getElementById(
        //     'error'
        // ).innerHTML = `Please enter a valid basic Pension number >3500 & < 99999`;
        x.innerHTML = `Please enter a valid basic Pension number >3500 & < 99999`;
        return false;
    } else {
        //     // bp = parseInt(document.getElementById('basic_pension').value);
        //reset();
        // document.getElementById('error').innerHTML.reset() = '';
        //     // alert(bp);
        //fun();
        //newFunction();
        // x.innerHTML.value.reset() = '';
        calculate();

        return true;
        // }
    }

    // function newFunction() {
    //     {
    //         x.reset();
    //     }
    // }

    function calculate() {
        //isValid();
        // const bp = parseInt(document.getElementById('basic_pension').value);
        const dr = 0.852;
        const drp = 0.775;
        document.getElementById('DA_DR').value = dr;
        gp = bp + bp * dr;
        //alert(gp);
        document.getElementById('GPension').value = Math.ceil(gp);
        //alert(gp);
        gpp = bp + bp * drp;
        //alert(gpp);
        document.getElementById('GOL').value = Math.ceil(gp - gpp);
    }
}
// const x = document.getElementById('error');