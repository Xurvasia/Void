const { ipcRenderer } = require('electron')


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



function minWindow () {
    ipcRenderer.send('minimize');
}

function maxWindow () {
    ipcRenderer.send('maxUnmax');
}

function exitWindow () {
    ipcRenderer.send('close');
}