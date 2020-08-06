document.body.addEventListener('click',handleClick,false);
let res = document.getElementById('res');

function handleClick(e) {
    var btns = e.target || e.srcElement;
    var op = document.getElementById(btns.id).innerHTML;

    switch (e.target.id) {
        case 'btn0':
            res.textContent += '0';
            break;
        case 'btn1':
            res.textContent += '1';
            break;
        case 'btnSum':
            res.textContent += '+';
            break;
        case 'btnSub':
            res.textContent += '-';
            break;
        case 'btnMul':
            res.textContent += '*';
            break;
        case 'btnDiv':
            res.textContent += '/';
            break;
        case 'btnEql':    
        //Replacing int with binaries
            res.innerHTML = Math.floor(eval(res.innerHTML.replace(/\d+/g, function(str) {
                return parseInt(str, 2)}))).toString(2);
            break;
        case 'btnClr':
            res.textContent = '';
            break;
        default:
            break;
        }
}
