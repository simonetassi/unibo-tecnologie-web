//NOT WORKING

function volume_sphere() {
    var r = document.getElementById("radius").value;
    r = Math.abs(r);
    var vol = (4 / 3) * Math.PI * Math.pow(r, 3);
    vol = vol.toFixed(5);
    document.getElementById("volume").value = vol;
    return false;
}
window.onload = document.getElementById("myForm").onsubmit = volume_sphere;