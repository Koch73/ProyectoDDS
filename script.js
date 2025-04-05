let count = 0;
function incrementar() {
    count++;
    document.getElementById('contador').innerText = count;
}
function disminuir() {
    count--;
    document.getElementById('contador').innerText = count;
}
console.log(count);
function resetear() {
    count = 0;
    document.getElementById('contador').innerText = count;
}