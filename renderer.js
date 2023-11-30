
import {click_btn_fresh} from './CmderView.js';




var crlf = "<br>"
document.querySelector('#btnFresh').addEventListener('click',click_btn_fresh)

document.querySelector('#btnExecute').addEventListener('click', () => {

    var res = "00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F" + crlf;
    var txtCdw00 = document.querySelector('#txtCdw00');
    res += txtCdw00.value;

    var txtMain = document.querySelector('#txtMain');
    console.log('txtMain=' + txtMain)
    txtMain.innerHTML = res;
    

})

var test = document.querySelector('#cboCmdSel');
console.log('test=' + test)
document.querySelector('#cboCmdSel').addEventListener('change', () => {
    var txtCdw00 = document.querySelector('#txtCdw00');
    console.log('txtCdw00=' + txtCdw00)
    txtCdw00.value = "99";
})
