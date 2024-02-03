import {act, renderHook} from "@testing-library/react-hooks";
import {useForm} from "./useForm";
import {data} from "../data/data";
import {DataForm} from "../type/type";
describe('Валидация значений',()=>{
    it('option города,при стране',()=>{
        const { result } = renderHook(() => useForm(data));
        act(()=>result.current.states.country.changedState('RF'))
        act(()=>result.current.states.city.changedState('Москва'))
        act(()=>result.current.states.university.changedState('Технический'))
        act(()=>result.current.states.housing.changedState('Общежития'))
        expect(result.current.states?.city?.state?.option).toStrictEqual(['Москва','Сочи'])
    })
    it('option города,при стране',()=>{
        const { result } = renderHook(() => useForm(data));
        act(()=>result.current.states.country.changedState('RB'))
        act(()=>result.current.states.city.changedState('Минск'))
        act(()=>result.current.states.university.changedState('Гуманитарный'))
        act(()=>result.current.states.housing.changedState('Общежития'))
        expect(result.current.states?.city?.state?.option).toStrictEqual(['Минск','Гомель'])
    })
    it('option жилья,при стране',()=>{
        const { result } = renderHook(() => useForm(data));
        act(()=>result.current.states.country.changedState('RB'))
        act(()=>result.current.states.city.changedState('Минск'))
        act(()=>result.current.states.university.changedState('Гуманитарный'))
        act(()=>result.current.states.housing.changedState('Общежития'))
        expect(result.current.states?.housing?.state?.option).toStrictEqual(['Общежития','Не интересует'])
    })
})
describe('Каскадность',()=>{
    it('не выбранный ни один select',()=>{
        const { result } = renderHook(() => useForm(data));
        expect(result.current.states?.city?.state).toStrictEqual(null)
    })
    it('выбранный первый селект',()=>{
        const { result } = renderHook(() => useForm(data));
        act(()=>result.current.states.country.changedState('RF'))
        expect(result.current.states?.city?.state?.selectedValue).toStrictEqual('')
    })
    it('выбранный второй селект',()=>{
        const { result } = renderHook(() => useForm(data));
        act(()=>result.current.states.country.changedState('RF'))
        act(()=>result.current.states.city.changedState('Москва'))
        expect(result.current.states?.university?.state?.selectedValue).toStrictEqual('')
    })
    it('выбранный третий селект',()=>{
        const { result } = renderHook(() => useForm(data));
        act(()=>result.current.states.country.changedState('RF'))
        act(()=>result.current.states.city.changedState('Москва'))
        act(()=>result.current.states.university.changedState('Технический'))
        expect(result.current.states?.housing?.state?.selectedValue).toStrictEqual('')
    })
})
