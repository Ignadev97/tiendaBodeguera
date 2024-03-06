import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import MensajeExitoso from '../../components/MensajeExitoso/MensajeExitoso'

//firestore

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const initialState = {
  name: "",
  number: "",
  email: "",
};

export default function FormPropsTextFields(data) {
  const [values, setValues] = useState(initialState);

  const [idVenta, setIdVenta] = useState(null);

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const docRef = await addDoc(collection(db, "ventas_realizadas"), {
      values,
    });
    console.log("Document written with ID: ", docRef.id);
    setIdVenta(docRef.id);
    setValues(initialState);
  };

  return (
    <div className="flex justify-center flex-row">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
        onSubmit={onSubmit}
        className="flex flex-col justify-center"
      >
        <div className="flex justify-center flex-row">
          <TextField
            required
            id="outlined-required"
            label="Nombre y apellido"
            defaultValue={values.nombre_y_apellido}
            name="name"
            onChange={onChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Teléfono"
            defaultValue={values.telefono}
            name="number"
            onChange={onChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue={values.email}
            name="email"
            onChange={onChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Enviar datos
        </button>
        <div>
          {idVenta ? <MensajeExitoso idVenta={idVenta} /> : null}
        </div>
      </Box>
    </div>
  );
}
