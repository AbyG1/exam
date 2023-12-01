let registerName = document.querySelector('#r-username')
let registerPassword = document.querySelector('#r-password')


function registerUser() {
    let userName = registerName.value
    let userPassword = registerPassword.value

    const user = {
        userName,
        userPassword
    }
 

    if(userName.trim() == ''|| userPassword == ''){
        alert("Enter all details properly")
    } else {
        if(userName in localStorage){
            alert("Username already exist change userName")
            registerName.value = ''
           
            registerPassword.value = ''
        } else {

            localStorage.setItem(userName,JSON.stringify(user))
            registerName.value = ''
    
            registerPassword.value = ''
        alert("Account created successfully")
        window.location = 'index.html'
             
        
            
        }
        
    }
    
}

//login



let loginName = document.querySelector('#l-username')
let loginPassword = document.querySelector('#l-password')


function login(){
    let username = loginName.value;
    let password = loginPassword.value;
    if(username.trim() == '' || password == ''){
        alert("Enter all details properly")
    } else {
            if(username in localStorage){
                let user = JSON.parse(localStorage.getItem(username))
                console.log(user)
                if(password === user.userPassword){
                    alert("login successful")
                    localStorage.setItem('dname',user.userName)
                    window.location="product.html"
                } else {
                    alert("incorrect password")
                    loginPassword.value = '';
                }

            } else {
                alert("Account does not exist")
                loginName.value = ''
                loginPassword.value = ''
                
            }
        

    }
}


//Add product

function addProduct() {
    let pid = document.querySelector('#pid')
    let pname = document.querySelector('#pname')
    let pcategory = document.querySelector('#pcat')
    let pdescription = document.querySelector('#pdes')
    let prate = document.querySelector('#prate')
    let preview = document.querySelector('#rev')



    // const user = {
    //     userName,
    //     userPassword
    // }
 

    // if(userName.trim() == ''|| userPassword == ''){
    //     alert("Enter all details properly")
    // } else {
    //     if(userName in localStorage){
    //         alert("Username already exist change userName")
    //         registerName.value = ''
           
    //         registerPassword.value = ''
    //     } else {

    //         localStorage.setItem(userName,JSON.stringify(user))
    //         registerName.value = ''
    
    //         registerPassword.value = ''
    //     alert("Account created successfully")
    //     window.location = 'product.html'
             
        
            
    //     }
        
    // }
    
}

