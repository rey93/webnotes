import React from 'react';

function Formulario({ asunto, newnote, handleChangeAsunto, handleChangeNota, handleAddTask, handleDeleteTask, error }) {
    return (
        <div className="formulario">
            <form className="texto">
                <label>
                    Asunto:
                    <input 
                        type="text"
                        value={asunto}
                        placeholder="Write something"
                        onChange={handleChangeAsunto}
                    />
                    Nota:
                    <textarea 
                        
                        value={newnote}
                        onChange={handleChangeNota}
                        rows="5"
                        cols="40"
                        placeholder="Escriba su nota aqui"
                        
                    />

                    
                </label>
            </form>
            
            <div className="button">
                <button onClick={handleAddTask}>Add Task</button>
                <button onClick={handleDeleteTask}>Delete All</button>
            </div>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Formulario;
