type NoneToVoidFunction = () => void

type Case = {
    id : string,
    title : string,
    isDir : boolean,
    childs ?: Case[]
}
