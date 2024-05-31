getAllSuppliers();
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

function saveSupplier(){
    let name = $('#input2').val();
    let category = $('#input3').val();
    let addressLine1 = $('#input4').val();
    let addressLine2 = $('#input5').val();
    let addressLine3 = $('#input6').val();
    let addressLine4 = $('#input7').val();
    let contact1 = $('#input8').val();
    let contact2 = $('#input9').val();
    let email = $('#input10').val();

    console.log(name);
    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/supplier/saveSupplier",
        async:true,
        data:JSON.stringify({
            "supCode":"",
            "supName" :name,
            "supCategory" :category,
            "supAddressLine1" :addressLine1,
            "supAddressLine2" :addressLine2,
            "supAddressLine3" :addressLine3,
            "supAddressLine4" :addressLine4,
            "supContact1" :contact1,
            "supContact2" :contact2,
            "supEmail" :email
        }),
        success: function (data){
            alert("saved");
            getAllSuppliers();
        },
        error: function (xhr, exception){
            alert("Error!");
        }
    })

}

function updateSupplier(){
    let name = $('#input2').val();
    let category = $('#input3').val();
    let addressLine1 = $('#input4').val();
    let addressLine2 = $('#input5').val();
    let addressLine3 = $('#input6').val();
    let addressLine4 = $('#input7').val();
    let contact1 = $('#input8').val();
    let contact2 = $('#input9').val();
    let email = $('#input10').val();

    $.ajax({
        method: "PUT",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/supplier/updateSupplier",
        async:true,
        data:JSON.stringify({
            "supCode":"",
            "supName" :name,
            "supCategory" :category,
            "supAddressLine1" :addressLine1,
            "supAddressLine2" :addressLine2,
            "supAddressLine3" :addressLine3,
            "supAddressLine4" :addressLine4,
            "supContact1" :contact1,
            "supContact2" :contact2,
            "supEmail" :email
        }),
        success: function (data){
            alert("Updated");
            getAllSuppliers();
        },
        error: function (xhr, exception){
            alert("Error!");
        }
    })
}
function deleteSupplier(){
    let code = $('#input1').val();

    $.ajax({
        method: "DELETE",
        url: "http://localhost:8080/api/v1/supplier/deleteSupplier/" +code,
        async:true,
        success: function (data){
            alert("Deleted");
            getAllSuppliers();
        },
        error: function (xhr, exception){
            alert("Error!");
        }
    })
}

function getAllSuppliers(){

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/supplier/getAllSuppliers",
        async:true,
        success: function (data){
            if (data.code==="00"){
                $('supTable').empty();
                for (let sup of data.content){
                    let code = sup.supCode
                    let name =sup.supName
                    let category =sup.supCategory
                    let addressLine1 = sup.supAddressLine1
                    let addressLine2 = sup.supAddressLine2
                    let addressLine3 = sup.supAddressLine3
                    let addressLine4 =sup.supAddressLine4
                    let contact1 = sup.supContact1
                    let contact2 =sup.supContact2
                    let email =sup.supEmail


                    var row = `<tr>
                        <td>${code}</td>
                        <td>${name}</td>
                        <td>${category}</td>
                        <td>${addressLine1}</td>
                        <td>${addressLine2}</td>
                        <td>${addressLine3}</td>
                        <td>${addressLine4}</td>
                        <td>${contact1}</td>
                        <td>${contact2}</td>
                        <td>${email}</td>
  
                    </tr>`;
                    $('#supTable').append(row);
                }
            }

        },
        error: function (xhr, exception){
            alert("Error!");
        }
    })
}

$(document).ready(function (){
    $(document).on('click', '#supTable tr', function (){
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
    })
})