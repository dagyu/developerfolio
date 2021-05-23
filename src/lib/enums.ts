export enum KnowledgeLevel {
    learn,
    base,
    medium,
    advanced
} 


export function getEnumKeys(args:Object){
    return Object.keys(args)
              .filter((e) => !isNaN(Number(e)))
              .map((e) => Number(e))
}