import VideoModel from '../models/Video';

const Omdb = {
   /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object 
   */
 
  getAlldata(req, res) {
   
    // console.log("controller"+ req.query)
    let Omdb = null;
    VideoModel.getAll(req.query).then(
      data => {res.status(200).json(data.data)},
      error => {res.status(404).send('not found')}
       );
   
  }
}

export default Omdb;