import moment from 'moment';
import uuid from 'uuid';

class User {
  /**
   * class constructor
   * @param {object} data
   * @returns {object} user object
   */


  login(email, password) {
    // console.log(email , password)
    const user = {
      "email": "codeoasis@gmail.com",
      "password": "123123123",
      "role": "admin"
    };


    if (email == user.email) {
      if (password == user.password) {
        // return res.status(200).send('successfull login',User);
        const response = ('successfull login', user)
        // console.log(response)
        return response;
      } else {
        const response = ('password not match')
        // console.log(response)
        return response;
      }
    } else {
      const response = ('user not found')
      // console.log(response)
      return response;
    }

  }

}


export default new User();