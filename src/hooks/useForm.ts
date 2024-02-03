import { useState } from 'react';
import {DataForm, stateSelect} from "../type/type";


export function useForm(data:DataForm) {

    const [country,setCountry] = useState<stateSelect>(initCountry(data))
    const [city,setCity] = useState<stateSelect>(null)
    const [university,setUniversity] = useState<stateSelect>(null)
    const [housing,setHousing] = useState<stateSelect>(null)

    function initCountry(data:DataForm){
        return {
            option:Object.keys(data),
            selectedValue:''
        }
    }

    function selectCountry(value:string){
        setCountry(prevState => ({...prevState,selectedValue:value} as stateSelect))
        setCity({option:data[value].city, selectedValue:''})
    }
    function selectCity(value:string){
        setCity(prevState => ({...prevState,selectedValue:value} as stateSelect))
        setUniversity({option:data[country?.selectedValue!]?.university,selectedValue:''})
    }
    function selectUniversity(value:string){
        setUniversity(prevState => ({...prevState,selectedValue:value} as stateSelect))
        setHousing({option:data[country?.selectedValue!]?.housing,selectedValue:''})
    }
    function selectHousing(value:string){
        setHousing(prevState => ({...prevState,selectedValue:value} as stateSelect))
    }
    function isCompletelyFrom(){
        return !(country?.selectedValue && housing?.selectedValue && university?.selectedValue && city?.selectedValue)
    }

    return {
        states:{
            country:{
                state:country,
                changedState:selectCountry
            },
            city:{
                state:city,
                changedState:selectCity
            },
            university:{
                state:university,
                changedState:selectUniversity
            },
            housing:{
                state:housing,
                changedState:selectHousing
            }
        },
        isCompletelyFrom,

    }
}

