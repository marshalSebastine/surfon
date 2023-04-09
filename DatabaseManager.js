import mongoose from 'mongoose';
import coursesData from './Models/Courses.js';
import { relatedCourses } from './Models/Courses.js';

const dbUrl = 'mongodb://127.0.0.1:27017/surfondb';

class DataBaseManager {
    static courseModel = DataBaseManager.defineCourseModel()

    static connect() {
        mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log('mongoose connected!') })
    }

    // Defines and returns a mongoose model for Courses
    static defineCourseModel() {
        const courseSchema = new mongoose.Schema({
            title: {
                type: String,
                requied: true,
                unique: true
            },
            startPrice: { type: Number, requied: true },
            endPrice: Number,
            popularity: Number,
            imgName: String,
            relatedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
        });

        return mongoose.model('Course', courseSchema);
    }

    static async addCourseData() {
        try{
            await DataBaseManager.courseModel.insertMany(coursesData)
            await DataBaseManager.addRelatedCourses()
        }catch(err){
            console.log('error thrown when inserting courses ',err)
        }
    }

    static async getAllCourses(){
        let results = await DataBaseManager.courseModel.find()
        return results
    }

    static async  addRelatedCourses(){
        for( const [key,value] of Object.entries(relatedCourses)){
            let course = await DataBaseManager.courseModel.findOne({title: key})
            for(let relatedtitle of value){
                let relatedcourse = await DataBaseManager.courseModel.findOne({title: relatedtitle})
                course.relatedCourses.push(relatedcourse._id)
            }
            course.save()
        }
    }

    static async dropAllCourses(){
       await  DataBaseManager.courseModel.deleteMany({})
    }

    static async getRelatedCourses(course){
        let relatedCourses = []
        for(const courseid of course.relatedCourses){
            let relatedCourse = await DataBaseManager.courseModel.findById(courseid)
            relatedCourses.push(relatedCourse)
        }
        return relatedCourses
    }

}


export default DataBaseManager