import SelectUnit from "./select_unit";
import SelectResourceType from "./select_resource_type";
import React, {useState} from "react";
import {useAuth} from "../lib/auth";
import {DocumentNode, TypedDocumentNode, useMutation} from "@apollo/client";

type ActionVariables = {
    receiver: string,
    outputOf: string,
    newInventoriedResource: { name:string, note: string},
    resourceConformsTo:string,
    resourceQuantity:{hasNumericalValue:number,hasUnit:string },
    hasPointInTime:string,
}

type ActionFormProps = {
    MUTATION: DocumentNode | TypedDocumentNode,
    processId: string,
    type: "produce" | "raise" | "transfer" | "use" | "consume" | "lower",
}


const ActionForm = (props:ActionFormProps) => {
    const [unitId, setUnitId] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [resourceType, setResourceType] = useState('')
    const [hasPointInTime, setHasPointInTime] = useState('')
    const [resourceName, setResourceName] = useState('')
    const [resourceNote, setResourceNote] = useState('')

    const {authId} = useAuth()

    const [result, { data, loading, error }] = useMutation(props.MUTATION)

    const variables:()=>ActionVariables = ()=> ({provider: authId,
                              receiver: authId,
                              outputOf: props.processId,
                              newInventoriedResource: { name:resourceName, note: resourceNote},
                              resourceConformsTo: resourceType,
                              resourceQuantity: {hasNumericalValue:quantity,hasUnit:unitId },
                              hasPointInTime: new Date(hasPointInTime).toISOString()})

    function onSubmit(e:any) {
      e.preventDefault()
      result({variables:variables()})
  }
   const handleUnit = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUnitId(e.target.value)
  }
   const handleResource = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setResourceType(e.target.value)
  }

return (<>
    <form onSubmit={onSubmit}>

          {(props.type==="produce" || props.type==="raise")&&<><SelectResourceType handleSelect={handleResource}/>
          <input type="number"
                 placeholder="Type here"
                 className="input input-bordered"
                 onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <SelectUnit handleSelect={handleUnit}/>
          <textarea onChange={(e)=>setResourceName!(e.target.value)} className="textarea textarea-bordered w-full" placeholder="Resource Descrption"/>
          <textarea onChange={(e)=>setResourceNote(e.target.value)} className="textarea textarea-bordered w-full" placeholder="Note"/></>}

        {(props.type==="transfer")&&<><input type="number"
                 placeholder="Type here"
                 className="input input-bordered"
                 onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <SelectUnit handleSelect={handleUnit}/>
          <SelectResourceType handleSelect={handleResource}/>
          <select className="select select-bordered w-full"/>
          <textarea onChange={(e)=>setResourceNote(e.target.value)} className="textarea textarea-bordered w-full" placeholder="Note"/>
          <textarea onChange={(e)=>setResourceNote(e.target.value)} className="textarea textarea-bordered w-full" placeholder="Note"/></>}

          <input onChange={(e)=>setHasPointInTime(e.target.value)} type="date" placeholder="Date 1" className="input input-bordered"/>
          <input type="date" placeholder="Date 2" className="input input-bordered"/>
          <button type="submit" className="btn btn-primary float-right">{props.type}</button>
      </form>
        </>
  )};

export default ActionForm