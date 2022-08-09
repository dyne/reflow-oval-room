import React, {ChangeEventHandler} from "react";

type BrTextFieldProps = {
    placeholder?: string,
    label?: string,
    onChange?: ChangeEventHandler,
    hint?: string,
    error?: string,
    value?: string
    onBlur?: ChangeEventHandler,
}
import {ExclamationIcon} from '@heroicons/react/solid'


const BrTextField = (props: BrTextFieldProps) => {

    return (<>

        <div className="w-full form-control">
            <label className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <textarea
                placeholder={props.placeholder}
                onChange={props.onChange}
                className="w-full textarea textarea-bordered focus:textarea-primary"
                value={props.value}
                onBlur={props.onBlur}
            />
            <label className="label">
                {props.error &&
                <span className="flex flex-row items-center justify-between label-text-alt text-warning">
                    <ExclamationIcon className='w-5 h-5'/>
                    {props.error}</span>}
                {props.hint && <span className="label-text-alt">{props.hint}</span>}

            </label>
        </div>
    </>)
}

export default BrTextField