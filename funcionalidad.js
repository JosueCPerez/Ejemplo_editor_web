function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      displayContents(contents);
    };
    reader.readAsText(file);
  }
  
  function displayContents(contents) {
    var element = document.getElementById('floatingTextarea2');
    element.innerHTML = contents;
  }
  
  document.getElementById('file-input')
    .addEventListener('change', readSingleFile, false);

function compilar(){
    
    var textarea= document.getElementById('floatingTextarea2')
    alert(textarea.textContent)
    
}