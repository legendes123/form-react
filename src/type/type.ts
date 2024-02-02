export type stateSelect =  {
    option:string[],
    selectedValue:string
} | null

export type stateFormSelect = {
    changedState(value: string): void,
    state:stateSelect
}

export type DataForm = Record<string, StateSelect>

export type StateSelect = {
    city:string[],
    university:string[],
    housing:string[],
}
