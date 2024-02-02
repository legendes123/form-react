import React from 'react';
import '../Form/Form.css';
import {useForm} from "../../hooks/useForm";
import {data} from "../../data/data";
import {stateFormSelect} from "../../type/type";

const Form = () => {
    const form = useForm(data)
    const formSelected = Object.values(form.states)
    return (
        <form className="form" >
            {
                formSelected.map((elem:stateFormSelect,index)=>{
                    return <select key={index} onChange={(e)=>{elem.changedState(e.target.value)}} name='options' disabled={!elem.state}>
                                <option disabled selected> select </option>
                                {
                                    elem.state && (
                                        elem.state.option.map((el)=>{
                                            return <option key={el} value={el} >{el}</option>
                                        })
                                    )
                                }
                            </select>
                })
            }
            <button disabled={form.isCompletelyFrom()} type="submit">submit</button>
        </form>
    );
};

export default Form;
