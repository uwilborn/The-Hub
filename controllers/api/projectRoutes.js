const router = require('express').Router();
const { Books } = require('../../models');

router.post('/donate', async (req, res) => {
  console.log("Post book",req.body)
  try {
    const newProject = await Books.create({
      ...req.body
      });
     console.log("Donate book",newProject)
    res.status(200).json(newProject);
  } catch (err) {
    console.log("Err on donate book",err)
    res.status(400).json(err);
  }
});
router.get('/allbooks', async (req, res) => {
  console.log("Get all books",req.body)
  try {
    let allBooks = await Books.findAll({raw:true});
    
     console.log("Get all books",allBooks)
    res.status(200).render("request",{allBooks:allBooks});
  } catch (err) {
    console.log("Err on donate book",err)
    res.status(400).json(err);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
