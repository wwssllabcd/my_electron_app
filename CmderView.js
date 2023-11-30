



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

export function click_btn_fresh(){
    var cboDeviceSel = document.querySelector('#cboDeviceSel');
    console.log('cboDeviceSel=' + cboDeviceSel)
    let arr = ['test1', 'test2'] 
    select_bind(cboDeviceSel, arr)
}