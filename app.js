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
    return new Promise ((resolve, reject) => {
        let post = true;
        console.log("User's Posts Loading...");

        setTimeout(() => {
            if (post){
                resolve(`Post ${postId}: content`);
            }
            else{
                reject(`Error in loading this user's post. Post is ${post}. Fail to upload post ${postId}.`);
            }

        }, 1000);
    })

}

async function getComments(){


}


