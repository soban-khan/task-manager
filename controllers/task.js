
const getAllTasks = (req, res) => {
    res.send('all the tasks')
}

const getSpecificTask = (req, res) => {
    res.json({ "id": req.params })
}

const createTask = (req, res) => {
    res.send(req.body)
}

const updateSpecificTask = (req, res) => {
    res.send('Update specific task')
}

const deleteTask = (req, res) => {
    res.send('Delete task')
}
module.exports = { getAllTasks, createTask, getSpecificTask, updateSpecificTask, deleteTask }
