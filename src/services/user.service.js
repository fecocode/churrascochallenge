import reqresService from './reqres.service'

const userService = {}

userService.login = function (email,password) {
    return reqresService.post('/api/login', {email, password})
    .then(function(response){
        var data = response.data;
        if (data.token) {
            data.email = email; 
            sessionStorage.setItem('user', JSON.stringify(response));
        }

        return data;
    })
    .catch((err) => {
      console.error(err);
      return err
    });
}

userService.logout = function () {
    sessionStorage.removeItem('user');
}


export default userService

