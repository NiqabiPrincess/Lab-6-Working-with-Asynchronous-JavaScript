

async function getUserProfile (){
    return new Promise((resolve, reject) => {
        let profile = true;
        console.log("User Profile Loading...");
    
        setTimeout(() => {
        if (profile) {
            resolve({ name: "Zainab Aamir", hobby: "Baking" }); 
        } 
        else {
            reject(`Error in Loading profile, profile = ${profile}`); 
        }}, 1000); 

    });
}
getUserProfile()
.then(profile => console.log("Profile loaded:", profile))  
.catch(error => console.error(error));  

function getPosts(){


}

function getComments(){


}


