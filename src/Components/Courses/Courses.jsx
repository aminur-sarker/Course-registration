
import { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Courses = () => {
    // useState hold data of a function
    const [courses, setCourses] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);
    const [remaining, setRemaining] = useState(0)
    const [totalHour, setTotalHour] = useState(0)

    useEffect(() => {
        fetch('./Course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

const handleSelectBtn = (course) => {
    const isExist = selectCourse.find((item)=>item.course_name == course.course_name);
    let count = course.credit_hour;
    if(isExist){

       
           toast('Already exists, Please select another Course.')
        
       
    }
    else{
        //  to get every element from json file.
        selectCourse.forEach((item)=>{
        count = count+ item.credit_hour});
        const totalRemaining = 20 - count;
        
        if(count>20){
         toast("Total Credit reached. You can't select any course.")
        }
        else{
            setTotalHour(count);
            setRemaining(totalRemaining);
            setSelectCourse([...selectCourse, course]);
        }
    }
};
    return (
        <div>
            <div className=" grid lg:flex">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
                    {
                        // card section
                        // using map, get every element like an array 
                        courses.map(course => (
                            <div key={course.course_name} className="border border-gray-500 rounded-md h-auto w-64 bg-slate-200">
                                <img className="w-56 h-56 ml-4 pt-2" src={course.cover_img} alt="" />
                                <h3 className="py-4 font-bold">{course.course_name} </h3>
                                <p>{course.details} </p>
                                <div className="flex justify-between mx-12 py-2 font-semibold">
                                    <p>Price: {course.price}</p>
                                    <p>Credit: {course.credit_hour} hr</p>
                                </div>
                                <button className="bg-sky-500 text-center font-bold text-lg rounded-xl px-10 pb-2" onClick={()=>handleSelectBtn(course)}>Select</button><ToastContainer />
                                {/*when click on select button, data pass from Courses.jsx to Sidebar.jsx */}
                            </div>
                            
                        ))
                        
                    }
                    
                </div>
               
               {/* import sidebar here. so I easily handle to pass props */}
                <div className="ml-4">
                    <Sidebar selectCourse = {selectCourse} remaining={remaining} totalHour={totalHour} ></Sidebar>
                </div>
            </div>

        </div>
    );
};

export default Courses;