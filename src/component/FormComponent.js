import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Stack, TextareaAutosize, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
const arr = [];
function FormComponent(props) {


    const [formdata, setformdata] = useState()

    const [temp1, settemp1] = useState("")
    const [check, setcheck] = useState([]);
    const [flag, setflag] = useState(false);
    useEffect(() => {

    }, [props.data])


    // console.log(props.data);
    // console.log(props.submit);
    // console.log("1", arr);


    const handlesubmit = () => {
        // console.log("arr", arr);
        // const array = Object.assign({}, ...arr);
        // console.log("values", array);

        if (flag) {
            console.log(arr);
        }
        else {
            console.log("arr", arr);
            const array = Object.assign({}, ...arr);
            console.log("values", array);
        }

        // console.log(arr);
    }

    const onChange = (e, item, index, name) => {
        setflag(true)
        let find = check.indexOf(item);
        if (find > -1) {
            check.splice(find, 1)
        }
        else {
            check.push(item)
        }

        console.log(check);
        const temp = name;
        arr[temp] = check;
        // arr[index] = check
        console.log(arr);
        // const array = Object.assign({}, ...arr);
        // console.log("values", array);
    }



    return (
        <div>
            {/* {console.log("1", formdata)} */}

            <div className='container1' style={{ display: "flex", flexDirection: "row", width: "100%" }}></div>

            <label>Form</label>
            {
                props.data.map((dat, index) => {

                    const myarr = dat.values?.split(",")

                    // console.log(myarr);
                    return (

                        <Stack direction="column" spacing={2} key={index} sx={{ alignItems: "center " }}>

                            {
                                dat.type === "Text" &&
                                < TextField id="outlined-basic" label={dat.label} variant="outlined"
                                    sx={{ size: "small", marginTop: "20px", marginBottom: "20px", width: "300px   " }}
                                    onChange={(e) => {
                                        const text = {}
                                        const temp = dat.name;
                                        text[temp] = e.target.value;
                                        arr[index] = text;
                                        // console.log(e.target.value);
                                        // console.log(arr);
                                    }}
                                />

                            }
                            {console.log("1", arr)}
                            {
                                dat.type == "Textarea" && props.submit ?
                                    <TextareaAutosize
                                        aria-label="empty textarea"
                                        placeholder={dat.label}
                                        style={{ width: "300px", height: "100px", marginBottom: "20px" }}
                                        onChange={(e) => {
                                            const text = {}
                                            const temp = dat.name;
                                            text[temp] = e.target.value;
                                            arr[index] = text;
                                            // console.log(e.target.value);
                                            // console.log(arr);
                                        }}
                                    />
                                    : " "
                            }

                            {
                                dat.type == "Radio" && props.submit ?
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label">{dat.name}</FormLabel>
                                        {
                                            myarr.map((item) => {
                                                return (
                                                    <RadioGroup
                                                        aria-labelledby="demo-radio-buttons-group-label"
                                                        value={temp1}
                                                        onChange={(e) => {
                                                            settemp1(item)
                                                            const text = {}
                                                            const temp = dat.name;
                                                            text[temp] = e.target.value;
                                                            arr[index] = text;

                                                        }}
                                                        name="radio-buttons-group"
                                                    >
                                                        <FormControlLabel value={item} control=
                                                            {<Radio />} label={item} />
                                                    </RadioGroup>
                                                )
                                            })
                                        }
                                    </FormControl>
                                    : " "
                            }


                            {
                                dat.type == "Checkbox" && props.submit ?

                                    < FormGroup >
                                        <FormLabel id="demo-radio-buttons-group-label">{dat.name}</FormLabel>
                                        {myarr.map((item) => {
                                            return (
                                                <FormControlLabel control={<Checkbox />}
                                                    value={item}
                                                    name={dat.name}
                                                    onChange={(e) => onChange(e, item, index, dat.name)}
                                                    selected={check.includes(item)}
                                                    label={item}

                                                />
                                            )
                                        })}
                                    </FormGroup>

                                    : ""
                            }


                            {
                                dat.type == "Select" && props.submit ?

                                    <FormControl >
                                        <InputLabel id="demo-simple-select-label">{dat.name}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="Age"
                                            sx={{ width: "200px", marginTop: "20px", marginBottom: "10px" }}
                                            onChange={(e) => {
                                                const text = {}
                                                const temp = dat.name;
                                                text[temp] = e.target.value;
                                                arr[index] = text;
                                                // console.log(e.target.value);
                                                // console.log(arr);
                                            }}
                                        >
                                            {myarr.map((item) => {
                                                return (
                                                    <MenuItem value={item}>{item}</MenuItem>
                                                )
                                            })}
                                        </Select>

                                    </FormControl>
                                    : ""
                            }
                        </Stack>)
                })
            }

            {
                props.submit ?
                    <Button variant="contained" style={{ marginBottom: "500px", width: "300px" }}
                        onClick={() => handlesubmit()}
                    >Submit  </Button>
                    : ""
            }
        </div >
    )
}

export default FormComponent