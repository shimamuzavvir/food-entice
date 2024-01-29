function result(){
    var Firstname = document.getElementById("first-name").value;
    var t1 =document.getElementById("t1");
    var fname =t1.append(Firstname);
    document.body.append(fname);

    var Lastname = document.getElementById("last-name").value;
    var t2 =document.getElementById("t2");
    var lname =t2.append(Lastname);
    document.body.append(lname);

    var Address = document.getElementById("address").value;
    var t3 =document.getElementById("t3");
    var add =t3.append(Address);
    document.body.append(add);

    var Pincode = document.getElementById("pincode").value;
    var t4 =document.getElementById("t4");
    var pin =t4.append(Pincode);
    document.body.append(pin);

    var Gender = document.getElementById("gender").value;
    var t5 =document.getElementById("t5");
    var gen =t5.append(Gender);
    document.body.append(gen);
    
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var selectedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
    var t6 = document.getElementById('t6');
    t6.innerHTML = '<td id="t6"></td>';
    selectedCheckboxes.forEach(function(checkbox) {
        var checkboxLabel = document.createElement('p');
        checkboxLabel.textContent = checkbox.value;
        t6.appendChild(checkboxLabel);
    });

    
    var State = document.getElementById("state").value;
    var t7 =document.getElementById("t7");
    var sta =t7.append(State);
    document.body.append(sta);

    var Country = document.getElementById("country").value;
    var t8 =document.getElementById("t8");
    var count =t8.append(Country);
    document.body.append(count);

    


   
    
}