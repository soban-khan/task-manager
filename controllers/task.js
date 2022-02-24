const task = require('../models/task')
const getAllTasks = async (req, res) => {
    // res.send('all the tasks')
    try {
        const tasks = await task.find({})
        res.json({ tasks })
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


const deleteTask = async (req, res) => {
    try {
        // const { id } = req.params
        // console.log(id)
        const tasks = await task.findOneAndDelete({ _id: req.params.id })
        if (!tasks) {
            return res.status(501).json({ msg: `${req.params.id} doesn't exist` })
        }
        res.json(tasks)
        // res.send('something')

    } catch (error) {
        res.status(501).json({ error })

    }
}

const updateSpecificTask = async (req, res) => {
    // res.send('Update specific task')
    // console.log(req.params.id)
    try {
        const tasks = await task.findOneAndUpdate({ id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
            overwrite: true
        })
        if (!tasks) {
            return res.status(401).json({ msg: `no such record with id ${req.params.id}` })
        }
        res.json({ tasks })
    } catch (error) {
        res.status(401).json({ error })
    }
}

module.exports = { getAllTasks, createTask, getSpecificTask, updateSpecificTask, deleteTask }
