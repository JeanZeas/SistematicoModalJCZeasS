function InsertarRegistro(){
    var nombre = document.getElementById('FirstNameTextBox').value;
    var apellido = document.getElementById('LastNameTextBox').value;
    var numhijos = document.getElementById('Hijos').value;
    var gender = GetCheckedRadioValue("Sexo");
    
    if(numhijos>=0)
    {
        numhijos =numhijos;
        
    }else
    {
        alert('El numero de hijos no puede ser negativo');
        return;
    }

    if(numhijos>10)
    {
        var numhijos = confirm('¿Esta seguro del numero de hijos?');
            if(numhijos)
            {
                numhijos =numhijos;
            }
            else
            {
                return;
            }
    }

    console.log('El Nombre es ' + nombre);
    console.log('El apellido es ' + apellido);
    console.log('El numero de hijos es ' + numhijos);
    console.log('This is the gender ' + gender);

    if (ValidarCedula(document.getElementById('IDTextBox').value)&& nombre !='' && apellido !='' && numhijos!=''&& gender !='')
    {
        var a=document.getElementById('PersonTable').insertRow(1);
        var b=a.insertCell(0);
        var c=a.insertCell(1);
        var d=a.insertCell(2);
        var e=a.insertCell(3);
        var f=a.insertCell(4);
        var g=a.insertCell(5);
        var h=a.insertCell(6);
        var i=a.insertCell(7);


        b.innerHTML=document.getElementById('IDTextBox').value;
        c.innerHTML=document.getElementById('FirstNameTextBox').value;
        d.innerHTML=document.getElementById('LastNameTextBox').value;
        //
        var genero = GetCheckedRadioValue("Sexo");
        e.innerHTML=genero;     
        //
        var pasatiempos= GetCheckedBoxesValue("Pasatiempos");  
        f.innerHTML=pasatiempos;

        var select = document.getElementById('ProfessionDropDown');
        var value = select.options[select.selectedIndex].value;
        g.innerHTML = value;

        
        var hijos = document.getElementById('Hijos').value;
        console.log('Este es el numero de hijos ' + hijos );
        h.innerHTML = hijos;
  

        
        

        var buttons ="<button name='EditButton' onclick='ShowModalForEdit(this)'>Editar</button>";
        buttons = buttons.concat("&nbsp;").concat("<button name='DeleteButton' onclick='deleteRow(this)'>Eliminar</button>");
        i.innerHTML=buttons;
        



        //This drops the form
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    }

}

function deleteRow(sender) {
    var i = sender.parentNode.parentNode.rowIndex;
    document.getElementById("PersonTable").deleteRow(i);
}