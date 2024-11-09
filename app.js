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

async function getPosts(postId){
    return new Promise ((resolve, reject) => {
        let post = true;
        if (postId === 3) { //* faking an error 
            post = false; 
          }
        console.log(`User's Post ${postId} is Loading...`);

        setTimeout(() => {
            if (post){
                resolve(`Post ${postId}: content`);
            }
            else{
                reject(`Error in loading this user's post. Fail to upload post ${postId}. Post is ${post}. `);
            }
        }, 1000);
    })
}
getPosts(1)
  .then(post1 => {
    console.log(post1);  
    return getPosts(2);  
  })
  .then(post2 => {
    console.log(post2);  
    return getPosts(3);
    
  })
  .then(post3 => {
    console.log(post3);  //* should show the error message
  })
  .catch(error => {
    console.error(error);  
  });

async function getComments(){


}


