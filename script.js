/// Selects the container to put divs in
const container = document.querySelector('#gridContainer')




/// function to create divs
function createDivs(numDivs) {

    var parentElement = document.getElementById("gridContainer");

   
    for (var i = 0; i < numDivs; i++) {
       
        var newDiv = document.createElement("div");

        
       

        
        parentElement.appendChild(newDiv);
    }
}

 
createDivs(7);


















