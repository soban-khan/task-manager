const task = require('../models/task')
const getAllTasks = async (req, res) => {
    // res.send('all the tasks')
    try {
        const tasks = await task.find({})
        res.json(tasks)
    } catch (error) {
        res.status(501).json({ error })
    }
}

const getSpecificTask = async (req, res) => {
    // res.json({ "id": req.params })
    try {
        const tasks = await task.findOne({ _id: req.params.id })

        if (!tasks) {
            return res.status(401).json({ msg: `no such record with id ${req.params.id}` })
        }
        res.json({ tasks })
    } catch (error) {
        res.status(501).json({ error })
    }
}

const createTask = async (req, res) => {
    // res.send(req.body)
    try {
        const tasks = await task.create(req.body)
        res.status(201).json(tasks)
    } catch (error) {
        res.status(501).json({ error })
    }

}

const updateSpecificTask = (req, res) => {
    res.send('Update specific task')
}

const deleteTask = (req, res) => {
    res.send('Delete task')
}
module.exports = { getAllTasks, createTask, getSpecificTask, updateSpecificTask, deleteTask }
