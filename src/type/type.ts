export type stateSelect =  {
    option:string[],
    selectedValue:string,
} | null

export type DataForm = Record<string, StateSelect>

export type StateSelect = {
    city:string[],
    university:string[],
    housing:string[],
}
