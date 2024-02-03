import {  createEvent, createStore, sample } from 'effector';
import { DataForm, stateSelect} from "../../type/type";
import {data} from "../../data/data";


const $defultData = createStore<DataForm | null>(null);
const $stateСountry = createStore<stateSelect | null>(null);
const $stateСity = createStore<stateSelect | null>(null);
const $stateUniversity= createStore<stateSelect | null>(null);
const $stateHousing = createStore<stateSelect | null>(null);

const loadDataFx = createEvent<DataForm>();
const selectionCountry = createEvent<string>();
const selectionCity = createEvent<string>();
const selectionUniversity = createEvent<string>();
const selectionHousing = createEvent<string>();

sample({
    clock: loadDataFx,
    fn: (clock):DataForm  => (clock),
    target: $defultData,
});
sample({
    clock: loadDataFx,
    fn: (clock) => ({option:Object.keys(clock),selectedValue:'',}),
    target: $stateСountry,
})
sample({
    clock: selectionCountry,
    source:$stateСountry,
    fn: (source,clock):stateSelect => ({...source!,selectedValue:clock}),
    target: $stateСountry,
});
sample({
    clock: selectionCountry,
    source:$defultData,
    fn: (source,clock) => ({option:data[clock].city, selectedValue:''}),
    target: $stateСity,
});
sample({
    clock: selectionUniversity,
    source:{defultData:$defultData,stateСountry:$stateСountry},
    fn: ({defultData,stateСountry},clock):stateSelect => ({option:defultData![stateСountry?.selectedValue!].housing,selectedValue:''}),
    target: $stateHousing,
});
sample({
    clock: selectionCity,
    source:$stateСity,
    fn: (source,clock):stateSelect => ({...source!,selectedValue:clock}),
    target: $stateСity,
});
sample({
    clock: selectionCity,
    source:{defultData:$defultData,stateСountry:$stateСountry},
    fn: ({defultData,stateСountry},clock):stateSelect => ({option:defultData![stateСountry?.selectedValue!].university,selectedValue:''}),
    target: $stateUniversity,
});
sample({
    clock: selectionUniversity,
    source:$stateUniversity,
    fn: (source,clock):stateSelect => ({...source!,selectedValue:clock}),
    target: $stateUniversity,
});
sample({
    clock: selectionHousing,
    source:$stateHousing,
    fn: (source,clock):stateSelect => ({...source!,selectedValue:clock}),
    target: $stateHousing,
});

export {
    $stateHousing,
    $stateUniversity,
    $stateСity,
    $stateСountry,
    loadDataFx,
    selectionCountry,
    selectionCity,
    selectionUniversity,
    selectionHousing
};
