import {act, renderHook} from "@testing-library/react-hooks";
import {useForm} from "./useForm";
import {data} from "../data/data";

describe('form',()=>{
    it('form select city when RF',()=>{
        const { states } = renderHook(useForm(data))
        act(()=>{
            states.country.changedState('RF')
        })
        expect(states.city.state.option).toBe(['Москва','Сочи'])
    })
    it('form select city when RB',()=>{
        const { states } = renderHook(useForm(data))
        act(()=>{
            states.country.changedState('RF')
        })
        expect(states.city.state.option).toBe(['Минск','Гомель'])
    })
    it('form select housing when RF',()=>{
        const { states } = renderHook(useForm(data))
        act(()=>{
            states.country.changedState('RF')
            states.city.changedState('Москва')
            states.university.changedState('Технический')
        })
        expect(states.housing.state.option).toBe(['Общежития','Аренда','Не интересует','Общежития + Аренда'])
    })
    it('form select housing when RB',()=>{
        const { states } = renderHook(useForm(data))
        act(()=>{
            states.country.changedState('RB')
            states.city.changedState('Минск')
            states.university.changedState('Технический')
        })
        expect(states.housing.state.option).toBe(['Общежития','Не интересует'])
    })
})
