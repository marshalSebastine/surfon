import coursesData from './Models/Courses.js';
import mongoose from 'mongoose';
import { relatedCourses } from './Models/Courses.js';



class DataBaseManager {
    static courseModel = DataBaseManager.defineCourseModel()
    static cachedConnection = null

    
    static async connect() {
        console.log('dburl is',process.env.DBURL)
        try{
            if(!DataBaseManager.cachedConnection){
                console.log(DataBaseManager.dbUrl)
                DataBaseManager.cachedConnection = await mongoose.connect(process.env.DBURL,
                                                    { useNewUrlParser: true, useUnifiedTopology: true })
            }else{
                console.log('db already connected')
            }
        }catch(er){
            console.log('connection error',er);
        }
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