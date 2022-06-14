import React, {ReactElement} from 'react'

type CardProps = {
    title:string,
    action?:{name:string, handle:Function},
    children: ReactElement<any, any>,
}

const Card = (props:CardProps) => {
    return (<>
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <>
                    <h1 className="card-title heading1">
                        {props.title}
                    </h1>
                    {props.children}
                    {props.action&&<div className="card-actions justify-end">
                        <button onClick={props.action.handle()} className="btn btn-primary">{props.action.name}</button>
                    </div>}
                </>
            </div>
        </div></>)
};
export default Card;