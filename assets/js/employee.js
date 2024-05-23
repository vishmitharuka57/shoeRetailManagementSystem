getAllEmployee();

//add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach((item) =>{
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover",activeLink));

//menu toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}
function saveEmployee(){
    let name = $('#input2').val();
    let pic = $('#input3').val();
    let gender = $('#input4').val();
    let status = $('#input5').val();
    let designation = $('#input6').val();
    let accessRole = $('#input7').val();
    let dob = $('#input8').val();
    let dateOfJoin = $('#input9').val();
    let attachedBranch = $('#input10').val();
    let addressLine1 = $('#input11').val();
    let addressLine2 = $('#input12').val();
    let addressLine3 = $('#input13').val();
    let addressLine4 = $('#input14').val();
    let contact = $('#input15').val();
    let email = $('#input16').val();
    let emergencyPersonName = $('#input17').val();
    let emergencyPersonContact = $('#input18').val();

    //console.log(name);

    $.ajax({
          method: "POST",
          contentType: "application/json",
          url: "http://localhost:8080/api/v1/employee/saveEmployee",
          async:true,
          data:JSON.stringify({
              "empCode":"",
              "empName" :name,
              "empPic" :pic,
              "empGender" :gender,
              "empStatus" :status,
              "empDesignation" :designation,
              "empAccessRole" :accessRole,
              "empDOB" :dob,
              "empJoinDate" :dateOfJoin,
              "empAttachedBranch" :attachedBranch,
              "empAddressLine1" :addressLine1,
              "empAddressLine2" :addressLine2,
              "empAddressLine3" :addressLine3,
              "empAddressLine4" :addressLine4,
              "empContact" :contact,
              "empEmail" :email,
              "empEmergencyInformPerson" :emergencyPersonName,
              "empEmergencyInformContact" :emergencyPersonContact
          }),
          success: function (data){
              alert("saved");
              getAllEmployee();
          },
        error: function (xhr, exception){
            alert("Error!");
        }
        })
}

function updateEmployee(){
    let code = $('#input1').val();
    let name = $('#input2').val();
    let pic = $('#input3').val();
    let gender = $('#input4').val();
    let status = $('#input5').val();
    let designation = $('#input6').val();
    let accessRole = $('#input7').val();
    let dob = $('#input8').val();
    let dateOfJoin = $('#input9').val();
    let attachedBranch = $('#input10').val();
    let addressLine1 = $('#input11').val();
    let addressLine2 = $('#input12').val();
    let addressLine3 = $('#input13').val();
    let addressLine4 = $('#input14').val();
    let contact = $('#input15').val();
    let email = $('#input16').val();
    let emergencyPersonName = $('#input17').val();
    let emergencyPersonContact = $('#input18').val();

    $.ajax({
        method: "PUT",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/employee/updateEmployee",
        async:true,
        data:JSON.stringify({
            "empCode":code,
            "empName" :name,
            "empPic" :pic,
            "empGender" :gender,
            "empStatus" :status,
            "empDesignation" :designation,
            "empAccessRole" :accessRole,
            "empDOB" :dob,
            "empJoinDate" :dateOfJoin,
            "empAttachedBranch" :attachedBranch,
            "empAddressLine1" :addressLine1,
            "empAddressLine2" :addressLine2,
            "empAddressLine3" :addressLine3,
            "empAddressLine4" :addressLine4,
            "empContact" :contact,
            "empEmail" :email,
            "empEmergencyInformPerson" :emergencyPersonName,
            "empEmergencyInformContact" :emergencyPersonContact
        }),
        success: function (data){
            alert("Updated");
            getAllEmployee();
        },
        error: function (xhr, exception){
            alert("Error!");
        }
    })
}

function deleteEmployee(){
    let code = $('#input1').val();

    $.ajax({
        method: "DELETE",
        url: "http://localhost:8080/api/v1/employee/deleteEmployee/" +code,
        async:true,
        success: function (data){
            alert("Deleted");
            getAllEmployee();
        },
        error: function (xhr, exception){
            alert("Error!");
        }
    })
}
function getAllEmployee(){

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/employee/getAllEmployees",
        async:true,
        success: function (data){
            if (data.code==="00"){
                $('empTable').empty();
                for (let emp of data.content){
                    let code = emp.empCode
                    let name = emp.empName
                    let pic = emp.empPic
                    let gender = emp.empGender
                    let status = emp.empStatus
                    let designation =emp.empDesignation
                    let accessRole = emp.empAccessRole
                    let dob = emp.empDOB
                    let dateOfJoin =emp.empJoinDate
                    let attachedBranch =emp.empAttachedBranch
                    let addressLine1 = emp.empAddressLine1
                    let addressLine2 = emp.empAddressLine2
                    let addressLine3 = emp.empAddressLine3
                    let addressLine4 = emp.empAddressLine4
                    let contact =emp.empContact
                    let email =emp.empEmail
                    let emergencyPersonName = emp.empEmergencyInformPerson
                    let emergencyPersonContact =emp.empEmergencyInformContact

                    var row = `<tr>
                        <td>${code}</td>
                        <td>${name}</td>
                        <td>${pic}</td>
                        <td>${gender}</td>
                        <td>${status}</td>
                        <td>${designation}</td>
                        <td>${accessRole}</td>
                        <td>${dob}</td>
                        <td>${dateOfJoin}</td>
                        <td>${attachedBranch}</td>
                        <td>${addressLine1}</td>
                        <td>${addressLine2}</td>
                        <td>${addressLine3}</td>
                        <td>${addressLine4}</td>
                        <td>${contact}</td>
                        <td>${email}</td>
                        <td>${emergencyPersonName}</td>
                        <td>${emergencyPersonContact}</td>
                    </tr>`;
                    $('#empTable').append(row);
                }
            }

        },
        error: function (xhr, exception){
            alert("Error!");
        }
    })
}

$(document).ready(function (){
    $(document).on('click','#empTable tr',function (){
        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();
        var col4 = $(this).find('td:eq(4)').text();
        var col5 = $(this).find('td:eq(5)').text();
        var col6 = $(this).find('td:eq(6)').text();
        var col7 = $(this).find('td:eq(7)').text();
        var col8 = $(this).find('td:eq(8)').text();
        var col9 = $(this).find('td:eq(9)').text();
        var col10 = $(this).find('td:eq(10)').text();
        var col11= $(this).find('td:eq(11)').text();
        var col12= $(this).find('td:eq(12)').text();
        var col13= $(this).find('td:eq(13)').text();
        var col14= $(this).find('td:eq(14)').text();
        var col15= $(this).find('td:eq(15)').text();
        var col16= $(this).find('td:eq(16)').text();
        var col17= $(this).find('td:eq(17)').text();
        var col18 = $(this).find('td:eq(18)').text();

        $('#input1').val(col0);
        $('#input2').val(col1);
        $('#input3').val(col2);
        $('#input4').val(col3);
        $('#input5').val(col4);
        $('#input6').val(col5);
        $('#input7').val(col6);
        $('#input8').val(col7);
        $('#input9').val(col8);
        $('#input10').val(col9);
        $('#input11').val(col10);
        $('#input12').val(col11);
        $('#input13').val(col12);
        $('#input14').val(col13);
        $('#input15').val(col14);
        $('#input16').val(col15);
        $('#input17').val(col16);
        $('#input18').val(col17);


    })
})






