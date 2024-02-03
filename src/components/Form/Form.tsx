import React, {useEffect, useState} from 'react';
import '../Form/Form.css';
import {data} from "../../data/data";
import { useUnit } from "effector-react";
import {$stateHousing,$stateUniversity,$stateСity,$stateСountry,loadDataFx,selectionCountry,selectionCity,selectionUniversity,selectionHousing} from "./model";


const Form = () => {
    const [stateHousing,stateUniversity,stateСity,stateСountry,onLoadDataFx,onSelectionCountry,onSelectionCity,onSelectionUniversity,onSelectionHousing] = useUnit([$stateHousing,$stateUniversity,$stateСity,$stateСountry,loadDataFx,selectionCountry,selectionCity,selectionUniversity,selectionHousing])
    const [buttonIsDisabled,setButtonIsDisabled] = useState(false)
    useEffect(()=>{
        onLoadDataFx(data)
    },[])
    useEffect(()=>{
        if(Boolean(stateHousing?.selectedValue && stateUniversity?.selectedValue && stateСity?.selectedValue && stateСountry?.selectedValue))setButtonIsDisabled(true)
    },[stateHousing,stateUniversity,stateСity,stateСountry])

    return (
        <form className="form" >
            <select onChange={(e)=>{onSelectionCountry(e.target.value)}} name='options' disabled={!Boolean(stateСountry)}>
                <option disabled selected> select </option>
                {
                    stateСountry?.option && (
                        stateСountry?.option.map((el)=>{
                            return <option key={el} value={el} >{el}</option>
                        })
                    )
                }
            </select>
            <select onChange={(e)=>{onSelectionCity(e.target.value)}} name='options' disabled={!Boolean(stateСity)}>
                <option disabled selected> select </option>
                {
                    stateСity?.option && (
                        stateСity?.option.map((el)=>{
                            return <option key={el} value={el} >{el}</option>
                        })
                    )
                }
            </select>
            <select onChange={(e)=>{onSelectionUniversity(e.target.value)}} name='options' disabled={!Boolean(stateUniversity)}>
                <option disabled selected> select </option>
                {
                    stateUniversity?.option && (
                        stateUniversity?.option.map((el)=>{
                            return <option key={el} value={el} >{el}</option>
                        })
                    )
                }
            </select>
            <select onChange={(e)=>{onSelectionHousing(e.target.value)}} name='options' disabled={!Boolean(stateHousing)}>
                <option disabled selected> select </option>
                {
                    stateHousing?.option && (
                        stateHousing?.option.map((el)=>{
                            return <option key={el} value={el} >{el}</option>
                        })
                    )
                }
            </select>
            <button disabled={!buttonIsDisabled} type="submit">submit</button>
        </form>
    );
};

export default Form;
