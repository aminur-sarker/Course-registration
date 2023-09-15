/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Sidebar = ({ selectCourse, totalHour, remaining }) => {

    return (
        <div className="border py-6 px-6  border-gray-500  rounded-md">
            <h4 className="text-xl  font-medium text-cyan-500">Credit Hour Remaining: {remaining} hr</h4> <hr/>
            <h3 className="text-2xl ml-2 font-medium text-start pt-2">Course Name:</h3>
            {selectCourse.map((course) => (
            
                <li className="text-start py-1"> {course.course_name}</li>
            ))}
            <hr/>
    
            <h3 className="text-xl py-4">Total Credit Hour: {totalHour} hr</h3>
        </div>

    );
};

export default Sidebar;