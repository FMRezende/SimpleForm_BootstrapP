import Swal from "sweetalert2";
import { useState } from "react";

const Formulario = ({addTodo}) => {

const [todo, setTodo] = useState({
        title: "todo 1",
        description: "descripcion 1",
        state: "pendiente",
        priority: true,
    });

const { title, priority, state, description} = todo;


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title.trim() || !description.trim()){

        return Swal.fire({
            title: "Éxito",
            text: "Oops...",
            icon: "Error",
        });
        }

        addTodo({
            id: Date.now(),
            ...todo,
            state: state === "completado"
        });

        Swal.fire({
            position:"center",
            icon: "success",
            title: "Tarea agregada",
            showConfirmButton: false,
            timer: 1500
        });
    };

        const handleChange = (e) => {
        const { name, type, checked, value } = e.target;

        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value,
        })
       };
    

       
    return (
        <>
            <h3>Agregar TODO</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-2"
                    name="title"
                    placeholder="ingrese todo nombre"
                    value={title}
                    onChange={handleChange}
                />
                <textarea
                    className="form-control mb-2"
                    placeholder="ingrese descripcion"
                    name="description"
                    value={description}
                    onChange={handleChange}
                />
                <select
                    className="form-control mb-2"
                    name="state"
                    value={state}
                    onChange={handleChange}
                >
                    <option value="pendiente">pendiente</option>
                    <option value="completado">completado</option>
                </select>
                <div className="form-check">
                    <input
                        id="flexCheckDefault"
                        className="form-check-input"
                        type="checkbox"
                        name="priority"
                        checked={priority}
                        onChange={handleChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Prioritario
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Agregar Todo
                </button>
            </form>
        </>
    );
};

export default Formulario;