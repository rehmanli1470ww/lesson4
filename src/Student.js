import React, { useState } from 'react';

export default function Student() {
    
    const [trueFalse,setTrueFalse]=useState("hidden");
    const [student, setStudent] = useState({
        name: "",
        surname: "",
        birthDate: new Date().toISOString().substr(0, 10),
        score: "",
        image: ""
    });

    const [student1, setStudentt] = useState({
        name: "",
        surname: "",
        birthDate: new Date().toISOString().substr(0, 10),
        score: "",
        image: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        setStudent({
            
        });
        
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setStudent({
            ...student,
            [name]: value
        });
        setStudentt({
            ...student1,
            [name]: value
        });
    }
    function Submit(e) {
       
        setStudent({
            ...student,
            name:"",
            surname:"",
            birthDate:new Date().toISOString().substr(0, 10),
            score:"",
            image:"",

        });
        setTrueFalse("visible");
        setTimeout(() => {
            setTrueFalse("hidden");
        }, 3000);
        
        
    }
    function Clear(e) {
        console.log(e);
         setStudentt({
             ...student1,
             name:"",
             surname:"",
             birthDate:new Date().toISOString().substr(0, 10),
             score:"",
             image:"",
         });
     }


    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <section className="sectionLeft">
                    <label>Name : <input type="text" name="name" value={student.name} onChange={handleChange} /></label>
                    <label>Surname : <input type="text" name="surname" value={student.surname} onChange={handleChange} /></label>
                    <label>BirthDate : <input type="date" name="birthDate" value={student.birthDate} onChange={handleChange} /></label>
                    <label>Score : <input type="text" name="score" value={student.score} onChange={handleChange} /></label>
                    <label>Image Url : <input type="text" name="image" value={student.image} onChange={handleChange} /></label>
                    <button type="submit" onClick={Submit}>Add</button>
                </section>
            </form>
            <div className="sectionReight">
                <section>
                <label>Name : <input value={student1.name}></input></label>
                <label>Surname : <input value={student1.surname}></input></label>
                <label>BirthDate : <input value={new Date(student1.birthDate).toLocaleDateString()}></input></label>
                <label>Score : <input value={student1.score}></input></label>
                <label>Image : <input value={student1.image}></input></label>
                <button onClick={Clear}>Clear</button>
                <label style={{"color":"green","margin-left":"50px","visibility":`${trueFalse}`}}>Successfully registered !</label>
                </section>
            </div>
        </div>
    )
}
