//JSON
var course = [];
//Function to list courses






function select(line) {

    // Fill fields
    document.getElementById("id").value = line;
    document.getElementById("Cname").value = course[line].Cname;
    document.getElementById("Tname").value = course[line].Tname;
    document.getElementById("hour").value = course[line].hour;

    //Hide or show buttons
    document.getElementById("btnregister").style.display = "none";
    document.getElementById("btnconfirm").style.display = "inline-block";
    document.getElementById("btnedit").style.display = "inline-block";
    document.getElementById("btnremove").style.display = "inline-block";
    document.getElementById("btncancel").style.display = "inline-block";

}
function lst() {

    //Get the table
    var table1 = document.getElementById("table1");

    //Clear table
    table1.innerHTML = "";

    //For Loop
    for (var index = 0; index < course.length; index++) {

        //Table row
        var line = table1.insertRow(-1);

        //Columns
        var column1 = line.insertCell(0);
        var column2 = line.insertCell(1);
        var column3 = line.insertCell(2);
        var column4 = line.insertCell(3);
        var column5 = line.insertCell(4);

        //Column content
        column1.innerHTML = index + 1;
        column2.innerHTML = course[index].Cname;
        column3.innerHTML = course[index].Tname;
        column4.innerHTML = course[index].hour;
        column5.innerHTML = "<button class='btn btn-success' onclick='select(" + index + ")'>Select</button>";

    }

}
//Registration Function
function register() {

    //Obter os dados
    var Cname = document.getElementById("Cname").value;
    var Tname = document.getElementById("Tname").value;
    var hour = document.getElementById("hour").value;

    //Register in JSON
    course.push({
        "Cname": Cname,
        "Tname": Tname,
        "hour": hour,
    });

    lst();
    //Clear fields
   ddl();

 
   

}
function ddl(){

    //Clear fields
    document.getElementById("Cname").value = "";
    document.getElementById("Tname").value = "";
    document.getElementById("hour").value = "";

    //Hide or show buttons
    document.getElementById("Cname").focus();

    //Hide or show buttons
    document.getElementById("btnregister").style.display = "inline-block";
    document.getElementById("btnconfirm").style.display = "none";
    document.getElementById("btnedit").style.display = "none";
    document.getElementById("btnremove").style.display = "none";
    document.getElementById("btncancel").style.display = "none";

}






// Function to remove
function remove() {

    // Get the JSON line
    var id = document.getElementById("id").value;

    // Remove from JSON
    course.splice(id, 1);

    lst();
    //Clear fields
    ddl();

    // Update the table
    

}

// Function to edit
function edit(){

    // Get all product data
    var id = document.getElementById("id").value;
    var Cname = document.getElementById("Cname").value;
    var Tname = document.getElementById("Tname").value;
    var hour = document.getElementById("hour").value;

    // Change JSON
    course[id] = {
        "Cname": Cname,
        "Tname": Tname,
        "hour": hour
    };
    lst();
    //Clear fields
    ddl();

    // Update the table
   
}

