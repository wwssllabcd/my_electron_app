

function select_clear(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
}

function select_bind(selectElement, arr) {
    select_clear(selectElement)

    var i = 0;
    arr.forEach(element => {
        var opt = document.createElement('option');
        opt.value = element;
        opt.innerHTML = element;
        selectElement.appendChild(opt);
        i++;
    });


}

var crlf = "<br>"
document.querySelector('#btnFresh').addEventListener('click', () => {
    var cboDeviceSel = document.querySelector('#cboDeviceSel');
    console.log('cboDeviceSel=' + cboDeviceSel)
    let arr = ['test1', 'test2'] 
    select_bind(cboDeviceSel, arr)
})

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
