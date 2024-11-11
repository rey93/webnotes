import { useState } from "react";
import './Notes.css'
import Formulario from "./Formulario";
import NuevasNotas from "./NuevasNotas";

function Notes(){

    const[asunto, setAsunto] = useState('')
    const[newnote, setNewnote] = useState('')

    const[arrayasunto, setArrayAsunto] = useState([])
    const[arraynotas, setArrayNotas] = useState([])

    const[error, setError] = useState(null)
    const[error2, setError2] = useState(null)

    const [editing, setEditing] = useState(null);

    const [editedNote, setEditedNote] = useState('');
    const [editedasunto, setEditedAsunto] = useState('');

    const handleChangeNota =(e) =>{
        e.preventDefault()
        setNewnote(e.target.value)
    }
    const handleChangeAsunto =(e) =>{
        e.preventDefault()
        setAsunto(e.target.value)
    }

    const handleAddTask =(e) =>{
        e.preventDefault();
        if (newnote == '' && asunto == ''){
            setError('No se pueden agregar asuntos y notas vacias')
        } else if (asunto == ''){
            setError('No se pueden agregar asuntos vacios')
        }else if (newnote == '') {
            setError('No se pueden agregar notas vacias')
        }else{
            setArrayNotas([...arraynotas, newnote]);
            setArrayAsunto([...arrayasunto, asunto]);
            setNewnote('')
            setAsunto('')
            setError(null)
        }
    }
    const handleDeleteTask = (e) =>{
        e.preventDefault();
        setArrayNotas([])
        setArrayAsunto([])
        setNewnote('')
        setAsunto('')
        setError(null)
     }
    
    const handleDelete = (index) =>{
       const firstnote = [...arraynotas];
       firstnote.splice(index, 1);
       setArrayNotas(firstnote);

       const firsasunto = [...arrayasunto];
       firsasunto.splice(index, 1);
       setArrayAsunto(firsasunto);
    }

    const handleEdit = (index) =>{
        setEditing(index);
        setEditedNote(arraynotas[index]);

        setEditedAsunto(arrayasunto[index]);
     }

     const handleSaveEdit = () =>{

        if (editedNote == '' && editedasunto == ''){
            setError2('No se pueden agregar asuntos y notas vacias')
        } else if (editedasunto == ''){
            setError2('No se pueden agregar asuntos vacios')
        }else if (editedNote == '') {
            setError2('No se pueden agregar notas vacias')
        }else if(editedNote !== '' && editedasunto !== ''){
            const firstnote = [...arraynotas];
            const firsasunto = [...arrayasunto];

            firstnote[editing] = editedNote;
            firsasunto[editing] = editedasunto;

            setArrayNotas(firstnote);
            setArrayAsunto(firsasunto);
            setEditing(null);
            setEditedNote('');
            setEditedAsunto('');
        }
    }
    
    const handleCancelEdit = () =>{
        setEditing(null);
        setEditedNote('');
        setEditedAsunto('');
    }
    return(

        <div className="container">

            <Formulario 
                asunto={asunto}
                newnote={newnote}
                handleChangeAsunto={handleChangeAsunto}
                handleChangeNota={handleChangeNota}
                handleAddTask={handleAddTask}
                handleDeleteTask={handleDeleteTask}
                error={error}
            />
            
                 <NuevasNotas 
                 editedasunto={editedasunto}
                 editedNote={editedNote}
                 handleSaveEdit={handleSaveEdit}
                 handleCancelEdit={handleCancelEdit}
                 handleDelete={handleDelete}
                 handleEdit={handleEdit}
                 editing={editing}
                 arraynotas={arraynotas}
                 setEditedAsunto={setEditedAsunto}
                 setEditedNote={setEditedNote}
                 arrayasunto = {arrayasunto}
                 error2={error2}
             />
        </div>
    )
}

export default Notes;