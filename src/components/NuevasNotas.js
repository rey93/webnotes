import React from 'react';
import './NuevasNotas.css'

function NuevasNotas({ editedasunto, editedNote, handleSaveEdit, handleCancelEdit, handleDelete, handleEdit,
    editing, arraynotas,setEditedAsunto,setEditedNote, arrayasunto, error2}) {
    return (

<section>
                 <h2>Tareas</h2> 
                     <div className="addtareas">
                         {
                             arraynotas.map((arraynota, index) => (
                             <div key={index} className="agregadas">
                                 {editing === index ? (
                                     <div>
                                         <input 
                                         type="text"
                                         value={editedasunto}
                                         onChange={(e) => setEditedAsunto(e.target.value)}
                                         />
                                         <textarea 
                                             value={editedNote}
                                             onChange={(e) => setEditedNote(e.target.value)}
                                             rows="5"
                                             cols="30"
                                         />
                                         {error2 && <p>{error2}</p>}
                                         <button onClick={handleSaveEdit}>Guardar</button>
                                         <button onClick={handleCancelEdit}>Cancelar</button>
                                     </div>
                                 ) : (
                                     <div>
                                         <h3>{arrayasunto[index]}</h3>
                                         <h2>{arraynota}</h2>
                                         <button onClick={() => handleDelete(index)}>Eliminar</button>
                                         <button onClick={() => handleEdit(index)}>Editar</button>
                                     </div>
                                 )}
                             </div>
                             ))
                         }
                     </div>
             </section>
        );
    }
    
    export default NuevasNotas;