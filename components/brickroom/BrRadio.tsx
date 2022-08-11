import React, {ChangeEvent} from "react";
import {ExclamationIcon} from "@heroicons/react/solid";

type BrRadioProps = {
    array: Array<{ id: string, name: string, value: string, label: string}>;
    label: string,
    value?: string,
    onChange: (value:string) => void,
    hint?: string,
    error?: string,
    checked?: boolean
}

const BrRadio = (props: BrRadioProps) => {
    return (<>
        <div className="form-control">
            <label className="label">
                <span className="label-text">{props.label}</span>
            </label>
            {props.array.map((unit: { id: string, name: string, value: string, label: string}) =>
            <label key={unit?.id} className="label cursor-pointer">
                <span className="label-text">{unit.label}</span>
                <input type="radio" name={unit.name} value={unit.value} onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value)} checked={props.value === unit.value}/>
            </label>)}
            <label className="label">
                {props.error && <span className="flex flex-row items-center justify-between label-text-alt text-warning">
                    <ExclamationIcon className='w-5 h-5' />
                    {props.error}</span>}
                {props.hint && <span className="label-text-alt">{props.hint}</span>}
            </label>
        </div>
        </>)
}

export default BrRadio;