function result(){
    var Firstname = document.getElementById("first-name").value;
    var t1 =document.getElementById("t1");
     t1 =t1.append(Firstname);
    document.body.append(t1);

    var Lastname = document.getElementById("last-name").value;
    var t2 =document.getElementById("t2");
     t2 =t2.append(Lastname);
    document.body.append(t2);

    var Address = document.getElementById("address").value;
    var t3 =document.getElementById("t3");
    t3=t3.append(Address);
    document.body.append(t3);

    var Pincode = document.getElementById("pincode").value;
    var t4 =document.getElementById("t4");
    t4 =t4.append(Pincode);
    document.body.append(t4);

    var Gender = document.getElementById("gender").value;
    var t5 =document.getElementById("t5");
    t5 =t5.append(Gender);
    document.body.append(t5);
    
  var food = document.getElementsByClassName("food");
  var checkedbox=[];
  for(let i=0; i<food.length; i++){
    if(food[i].checked){
    checkedbox.push(food[i].value)
  }}
  var t6 = document.getElementById("t6");
  checkedbox = checkedbox.join(",");
  t6 = t6.append(checkedbox);
  document.body.append(t6)

    
    var State = document.getElementById("state").value;
    var t7 =document.getElementById("t7");
    t7 =t7.append(State);
    document.body.append(t7);

    var Country = document.getElementById("country").value;
    var t8 =document.getElementById("t8");
    t8 =t8.append(Country);
    document.body.append(t8);
}