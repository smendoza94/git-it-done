var getUserRepos = function(user) {
    // format the gitHub api url
    var apiURl = "https://api.github.com/users/" + user + "/repos";
    // make a request to the url
    fetch(apiURl).then(function(response) {
        response.json().then(function(data){
            console.log(data);
        })
    });
};

getUserRepos("microsoft");