import React, { useState } from 'react'

import { Button, Container, Grid, TextareaAutosize, TextField } from '@mui/material'
import { border, } from '@mui/system'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import Stack from '@mui/material/Stack';
import FormComponent from './FormComponent';
import { useEffect } from 'react';
function FormField(props) {
    // const [text,settext]=useState("")

    const [data, setdata] = useState({ label: "", type: " ", name: "", values: "" })
    const [submit, setsubmit] = useState(false)
    const [arr, setarr] = useState([])
    // const [textfield, settextfield] = useState(false);
    //  const [textarea, settextarea] = useState(false);


    // const [formdata, setformdata] = useState([{ label: "" }])
    const handleSubmit = () => {
        // console.log(data);
        setarr([...arr, data]);
        setsubmit(true);

        setdata("")

    }
    const handleChange = (event) => {
        setdata({ ...data, type: event.target.value });
        console.log(data);



    };




    return (
        <div>

            <div className='container1' style={{ display: "flex", flexDirection: "row", marginBottom: "50px", }}>


                <div className='container1' style={{ border: "1px solid black", marginBottom: "50px", width: "50%" }}>
                    <label>Create Form</label>
                    {/* <div className='first' style={{marginBottom:"20px"}}  >  */}

                    <Stack direction="column" spacing={2}>
                        <TextField id="outlined-basic" label="label" variant="outlined"
                            sx={{ size: "small", marginTop: "20px", width: "300px   " }}
                            onChange={(e) => setdata({ ...data, label: e.target.value })}
                        />
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            //   value={age}
                            label="Age"
                            onChange={handleChange}
                            sx={{ size: "small", marginTop: "20px", marginLeft: "50px", width: "300px" }}
                        >
                            <MenuItem value="Text"> Text</MenuItem>
                            <MenuItem value="Textarea" >Textarea</MenuItem>
                            <MenuItem value="Select">Select</MenuItem>
                            <MenuItem value="Checkbox">Checkbox</MenuItem>
                            <MenuItem value="Radio">Radio</MenuItem>
                        </Select>

                        <TextField id="outlined-basic" label="name" variant="outlined"
                            sx={{ size: "small", marginTop: "20px", width: "300px   " }}
                            onChange={(e) => setdata({ ...data, name: e.target.value })}
                        />

                        <TextField id="outlined-basic" label="value" variant="outlined"
                            sx={{ size: "small", marginTop: "20px", width: "300px   " }}
                            onChange={(e) => setdata({ ...data, values: e.target.value })}
                        />


                        <Button variant="contained" style={{ marginBottom: "500px", marginRight: "50px", width: "300px" }}
                            onClick={() => handleSubmit()}
                        >Submit  </Button>
                    </Stack>
                </div>


                <div className='container1' style={{ border: "1px solid black", width: "50%" }}>

                    <FormComponent data={arr} submit={submit}></FormComponent>

                </div>

            </div>

        </div>
    )
}

export default FormField