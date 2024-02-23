const mongoose = require('mongoose');
const courseModel = require('./models/course');
const studentModel = require('./models/student');
const userModel = require('./models/users');

const searchDocuments = async ()=>{
    try {
        await mongoose.connect(`mongodb+srv://angelpablocuevas1989:EghP7p3eTEtgWPyu@codercluster.5ny2sqo.mongodb.net/indexes`)
        console.log('connected')  
        
        //executionTimeMillis: 2
        //let result = await userModel.find().explain('executionStats') 
        
        //executionTimeMillis: 3 <--- sin index
        //executionTimeMillis: 1 <---- con index 
        //let result = await userModel.find({first_name:'Celia'}).explain('executionStats')

        // let result = await studentModel.create({
        //     first_name: 'John',
        //     last_name: 'Doe',
        //     email: 'johnDoe@correo.com',
        //     gender: 'Male'
        // })

        // course id = 65d7f1a6049975c0e3f56332

        // let result = await courseModel.create({
        //     title: 'Programación Backend',
        //     description: 'Es un curso que nos permite desarrollar servicios',
        //     difficulty: 5,
        //     topics: ['Express', 'Plantillas', 'middlewares', 'databases'],
        //     profesor: 'Ángel'
        // })

        // const students = await studentModel.find({_id: '65d7f03d5bb2e6a9f54d248e'})
        // console.log(students)
        // students[0].courses.push({course:'65d7f1a6049975c0e3f56332'})
        
        // let result = await studentModel.updateOne({_id: '65d7f03d5bb2e6a9f54d248e' }, students[0])

        const result = await studentModel.find({_id: '65d7f03d5bb2e6a9f54d248e'})

        console.log(JSON.stringify(result, null, '\t'))
    } catch (error) {
        console.log(error)
    }
}


searchDocuments();