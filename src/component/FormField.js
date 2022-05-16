import React, { useState } from 'react'

import { Button, TextField } from '@mui/material'

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import Stack from '@mui/material/Stack';
import FormComponent from './FormComponent';
import { useEffect } from 'react';
function FormField(props) {
    // const [text,settext]=useState("")

    const [data, setdata] = useState({ label: "", type: " ", name: "", values: "" })
    const [submit, setsubmit] = useState(false)
    const [arr, setarr] = useState([])
    const [count, setcount] = useState(0)


    const handleSubmit = () => {
        // console.log(data);

        if (data.name === "") {
            alert()
        }
        else {
            setarr([...arr, data]);
            setsubmit(true);
        }
        setcount(prev => prev + 1)

    }
    const handleChange = (event) => {
        setdata({ ...data, type: event.target.value });
        console.log(data);
    };


    useEffect(() => {
        setdata({ label: "", type: " ", name: "", values: "" })
    }, [count])


    return (
        <div>

            <div className='container1' style={{ display: "flex", flexDirection: "row" }}>

                <div className='container1' style={{ border: "1px solid black", marginBottom: "50px", width: "50%" }}>
                    <label>Create Form</label>
                    {/* <div className='first' style={{marginBottom:"20px"}}  >  */}


                    <Stack direction="column" spacing={2} sx={{ alignItems: "center " }}>
                        <TextField id="outlined-basic" label="label" variant="outlined"
                            sx={{ size: "small", marginTop: "20px", width: "300px   " }}
                            onChange={(e) => setdata({ ...data, label: e.target.value })}
                            value={data.label}
                        />
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={data.type}
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
                            value={data.name}
                        />

                        {
                            data.type === "Select" || data.type === "Checkbox" || data.type === "Radio" ?
                                <TextField id="outlined-basic" label="value" variant="outlined"
                                    sx={{ size: "small", marginTop: "20px", width: "300px   " }}
                                    onChange={(e) => setdata({ ...data, values: e.target.value })}
                                    value={data.values}
                                />
                                : ""
                        }

                        <Button variant="contained" style={{ marginBottom: "500px", width: "300px" }}
                            onClick={() => handleSubmit()}
                        >Submit  </Button>
                    </Stack>

                </div>


                <div className='container1' style={{ border: "1px solid black", width: "50%", marginBottom: "50px", }}>
                    <FormComponent data={arr} submit={submit}></FormComponent>
                </div>

            </div>

        </div>
    )
}

export default FormField