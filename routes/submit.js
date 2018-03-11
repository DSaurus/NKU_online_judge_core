const express = require('express');
const router = express.Router();
const jd = require('./judge')

router.get('/', (req, res) => {
  res.send('This is submit page')
})
router.post('/', (req, res) => {
  let problem_id = req.params.problem_id
  let solution_id = req.params.solution_id
  let code = req.body.solution_code
  console.log(code)
  jd(problem_id, code).then( (jdres) => {
    res.send({'status': jdres})  //返回评测结果
  })
});

module.exports = router;