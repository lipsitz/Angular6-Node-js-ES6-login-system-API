import UserModel from '../models/User';

const User = {

  /**
   * @param {object} req 
   * @param {object} res 
   * @returns {object} user array
   */

  login(req, res) {
    // console.log(req.body)
    if (!req.body.email || !req.body.password) {
      return res.status(400).send('please pass email and password');
    } else {
      const email = req.body.email;
      const password = req.body.password;
      const User = UserModel.login(email, password);
      return res.status(200).send(User);
    }

  }

}

export default User;