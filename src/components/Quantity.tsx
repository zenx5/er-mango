export default function Quantity({ value, max, onChange }:{value:number, max:number, onChange?:Function}) {

    const handlerChange = (step:number) => () => {
        if( onChange ) onChange(value+step, max)
    }

    return <span className="flex flex-row gap-2 my-1">
        <button type="button" onClick={handlerChange(-1)} className="flex items-center justify-center bg-blue-200 text-white rounded-full px-5 py-0">-</button>
        <span>{ value } / { max }</span>
        <button type="button" onClick={handlerChange(1)} className="flex items-center justify-center bg-blue-200 text-white rounded-full px-5 py-0">+</button>
    </span>

}