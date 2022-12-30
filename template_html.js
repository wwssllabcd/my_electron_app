
function get_nav_html(active) {

    var res = `
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link active-1" href="index.html">Main</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active-2" href="nvme.html">NVMe</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active-3" href="wrc_test.html">WRC Test</a>
        </li>
    </ul>
    <p>
    `;

    if (active == 1) {
        res = res.replace("active-1", "active aria-current='page'");
        res = res.replace("active-2", "");
        res = res.replace("active-3", "");
    } else if (active == 2) {
        res = res.replace("active-1", "");
        res = res.replace("active-2", "active aria-current='page'");
        res = res.replace("active-3", "");
    } else if (active == 3) {
        res = res.replace("active-1", "");
        res = res.replace("active-2", "");
        res = res.replace("active-3", "active aria-current='page'");
    }

    return res;
}

function get_device() {
    var res = `
    <div class="container">
        <div class="row">
            <div class="col col-4">
                <select class="form-select" aria-label="Default select example" id="cboDeviceSel" >
                
                    <option value="1">D:</option>
                    <option value="2">E:</option>
                </select>
            </div>
            <div class="col col-2">
                <button type="button" class="btn btn-secondary" id="btnFresh" >Fresh</button>
            </div>
            <div class="col col-1">
                <button type="button" class="btn btn-primary" id="btnExecute" >Execute</button>
            </div>
            <div class="col">
                
            </div>
        </div>
    </div>
    <P> 
    `;

    return res;
}

function get_cmd_select() {
    var res = `<P> 
    <div class="container">
        <div class="row">
            <div class="col col-4">
                <select class="form-select" aria-label="Default select example" id="cboCmdSel">
                    <option value="1">id</option>
                    <option value="2">id-ns</option>
                </select>
            </div>
            <div class="col">
                
            </div>
        </div>
    </div>
    <P> 
    `;

    return res;
}

function get_cmd_input_box() {
    var res = `<P> 
    <div class="container">
        <div class="row">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="CDW0" id="txtCdw00">
                <input type="text" class="form-control" placeholder="CDW1" >
            </div>
            <div class="col">
                
            </div>
        </div>
        <div class="row">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="CDW10" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <input type="text" class="form-control" placeholder="CDW11" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <input type="text" class="form-control" placeholder="CDW12" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <input type="text" class="form-control" placeholder="CDW13" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <input type="text" class="form-control" placeholder="CDW14" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <input type="text" class="form-control" placeholder="CDW15" aria-label="Recipient's username" aria-describedby="basic-addon2">
            </div>
            <div class="col">
                
            </div>
        </div>
    </div>
    <P> 

    
    <P> 
    `;

    return res;
}

function get_device_select() {
    var res = get_device();
    return res;
}

