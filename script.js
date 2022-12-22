const getInfo = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then(data => {
        if(data.status!=="failed"){
            const table = document.getElementById("my-table");

            for(let i=0;i<10;i++){

            const row = table.insertRow();

            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            const cell7 = row.insertCell(6);
            const cell8 = row.insertCell(7);
            

             cell1.innerHTML = data[i].id;
             cell2.innerHTML = data[i].name;
             cell3.innerHTML = data[i].username;
             cell4.innerHTML = data[i].email;
             cell6.innerHTML = data[i].address.street+", "+data[i].address.suite+", "+data[i].address.city+", "+data[i].address.zipcode;
            cell5.innerHTML = data[i].phone;
            cell7.innerHTML = data[i].website;
            cell8.innerHTML = data[i].company.name; 
            }
        }
    }).catch(() => {
        alert('Something went wrong while fetching the users.');      
       
    })
}

getInfo();

const signUp = () =>{
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let userName = document.getElementById('user-name').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value
    let phone = document.getElementById('phone-number').value
    let website = document.getElementById('website').value
    let company = document.getElementById('company').value

    let error = false 

    if(firstName.length >=3 && firstName.match(/^[a-zA-Z]+$/)) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    } else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }

    if(lastName.length >=3 && lastName.match(/^[a-zA-Z]+$/)) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    } else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }

    if(userName.length >=1 && userName.match(/^[.a-zA-Z]+$/)) {
        document.getElementById('user-name-valid').style.display = 'block'
        document.getElementById('user-name-invalid').style.display = 'none'
    } else {
        document.getElementById('user-name-invalid').style.display = 'block'
        document.getElementById('user-name-valid').style.display = 'none'
        error = true
    }

    if (email &&
        email.includes("@") &&
        email.includes(".") &&
        email.lastIndexOf(".") <= email.length - 3 &&
        email.indexOf("@") !==0) {
        
            document.getElementById("email-valid").style.display = "block";
            document.getElementById("email-invalid").style.display = "none";
    } 
    else {
            document.getElementById("email-invalid").style.display = "block";
            document.getElementById("email-valid").style.display = "none";
            error = true;
    }

    if(address.length >=3) {
        document.getElementById('address-valid').style.display = 'block'
        document.getElementById('address-invalid').style.display = 'none'
    } else {
        document.getElementById('address-invalid').style.display = 'block'
        document.getElementById('address-valid').style.display = 'none'
        error = true
    }

    if(document.getElementById("phone-number").validity.valid === true) {
        document.getElementById("phone-valid").style.display = "block";
        document.getElementById("phone-invalid").style.display = "none";
    }

    else {
        document.getElementById("phone-invalid").style.display = "block";
        document.getElementById("phone-valid").style.display = "none";
        error = true;
    }

    if(website.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)) {
        document.getElementById("web-valid").style.display = "block";
        document.getElementById("web-invalid").style.display = "none";
    }

    else {
        document.getElementById("web-invalid").style.display = "block";
        document.getElementById("web-valid").style.display = "none";
        error = true;
    }

    if(!error) {
        var a = document.getElementById('my-table').rows.length;
        const table = document.getElementById("my-table");
        const row = table.insertRow();

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        const cell7 = row.insertCell(6);
        const cell8 = row.insertCell(7);

        cell1.innerHTML = a ;
        cell2.innerHTML = firstName +" "+lastName;
        cell3.innerHTML = userName ;
        cell4.innerHTML = email ;
        cell5.innerHTML = phone ;
        cell6.innerHTML = address ;
        cell7.innerHTML = website ;
        cell8.innerHTML = company ;
        


		//alert('Your details have been saved successfully!')
		document.getElementById('first-name').value = ''
		document.getElementById('last-name').value = ''
        document.getElementById('user-name').value = ''
		document.getElementById('email').value = ''
		document.getElementById('phone-number').value = ''
		document.getElementById('address').value = ''
        document.getElementById('website').value = ''
        document.getElementById('company').value = ''
       
        
		document.getElementById('first-name-valid').style.display = 'none'
		document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('user-name-valid').style.display = 'none'
		document.getElementById("email-valid").style.display = "none"
		document.getElementById("phone-valid").style.display = "none";
		document.getElementById('address-valid').style.display = "none";
        document.getElementById('web-valid').style.display = "none";
	}


} 

function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  };