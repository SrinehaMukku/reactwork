import React from 'react';
function StudentList(){
    const student =
    [
        {
            id : "A0",
            s_name : "Riya",
            fav_sub : "Maths"
        },
        {
            id : "A1",
            s_name : "Sri",
            fav_sub : "English"
        },
        {
            id : "A2",
            s_name : "Pavan",
            fav_sub : "Hindi"
        },
    ];
    // const student = student.map((element) => {
    return(
        <div>
             {element.id}
        </div>
       
    );
//     });
 }
export default StudentList;