const router = require('express').Router();
const { Books } = require('../../models');

router.post('/request', async (req, res) => {
  console.log("Post book",req.body)
  try {
    const newProject = await Books.create({
      ...req.body
      });
     console.log("Request book",newProject)
    res.status(200).json(newProject);
  } catch (err) {
    console.log("Err on request book",err)
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

