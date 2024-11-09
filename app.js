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
/* getUserProfile()
.then(profile => console.log("Profile loaded:", profile))  
.catch(error => console.error(error));  */

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
/* getPosts(1)
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
  }); */

async function getComments(commentID){
    return new Promise ((resolve, reject) => {
        let comment = Math.random(); //for making random number to make random chances
        
        console.log(`User's comment ${commentID} is Loading...`);

        setTimeout(() => {
            if (comment > 0.30){ // makes random errors/successes
                resolve(`Comment ${commentID}: content`);
            }
            else{
                reject(`Error in loading this user's post. Fail to upload comment ${commentID}. `);
            }
        }, 1250);
    })
}

/* Promise.all([getComments(1), getComments(2), getComments(3)])
 .then(results => {
    results.forEach(comment => {
        console.log(comment);
    });
 })
 .catch(error => {
    console.error(error);
 }); */

async function getUserContent() {
    try {
        const profile = await getUserProfile();
        console.log("User Profile Loaded:1", profile);

       

        
    }
    catch(error){
        console.error("Error in Profile:", error);
    }

    try {
        const post1 = await getPosts(1);
        console.log("Post 1 Loaded:", post1);
        const post2 = await getPosts(2);
        console.log("Post 2 Loaded:", post2);
        const post3 = await getPosts(3);
        console.log("Post 3 Loaded:", post3);
    }
    catch(error){
        console.error("Error in Posts:", error);
    }

    try {
        const comment1 = await getComments(1);
        console.log("Comment 1 Loaded:", comment1);
        const comment2 = await getComments(2);
        console.log("Comment 2 Loaded:", comment2);
        const comment3 = await getComments(3);
        console.log("Comment 3 Loaded:", comment3);
    }
    catch(error){
        console.error("Error in Comments:", error);
    }
    
}
getUserContent();





