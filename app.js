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
        }}, 1300); 

    });
}
getUserProfile()
.then(profile => console.log("Profile loaded:", profile))  
.catch(error => console.error(error));  

async function getPosts(postID){
    return new Promise ((resolve, reject) => {
        let post = true;
        if (postID === 3) { //* faking an error 
            post = false; 
          }
        console.log(`User's Post ${postID} is Loading...`);

        setTimeout(() => {
            if (post){
                resolve(`Post ${postID}: content`);
            }
            else{
                reject(`Error in loading this user's post. Fail to upload post ${postID}. Post is ${post}. `);
            }
        }, 1400);
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

async function getComments(commentID){
    return new Promise ((resolve, reject) => {
        let comment = Math.random(); //for making random number to make random chances
        
        console.log(`User's comment ${commentID} is Loading...`);

        setTimeout(() => {
            if (comment > 1){ // makes random errors/successes
                resolve(`Comment ${commentID}: content`);
            }
            else{
                reject(`Error in loading this user's post. Fail to upload comment ${commentID}. `);
            }
        }, 1500);
    })
}

Promise.all([getComments(1), getComments(2), getComments(3)])
 .then(results => {
    results.forEach(comment => {
        console.log(comment);
    });
 })
 .catch(error => {
    console.error(error);
 });


