import React, {ChangeEvent, useEffect} from 'react';
import BrTextField from "./BrTextField";

type TagSelectorProps = {
    tags?: Array<string>,
    selectedTags?: Array<string>,
    onSelect?: (tags: string[]) => void,
    onSubmit?: () => void,
    onCancel?: () => void,
    className?: string,
    hint?: string,
    error?: string,
    label?: string,
    placeholder?: string,

}

const TagSelelector = (props: TagSelectorProps) => {
    const [tags, setTags] = React.useState(props.tags &&[...props.tags]);

    const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
        setTags(Array.from(new Set(e.target.value.split(' '))))
    }
    const cancelTag = (tag:string) => {
        const arr = tags?.filter(t => t !== tag);
        setTags([...tags!.filter(t => t !== tag)])
    }

    useEffect(() => {
        props.onSelect && props.onSelect(tags!);
    }, [tags]);
    return (<>
        <div className={`form-control ${props.className}`}>
            {tags && tags.length > 0 && <>{
                tags?.map((tag: string) => {
                    return <span key={tag} className="badge left mb-1"><button  className={'btn btn-ghost btn-xs'} onClick={()=>cancelTag(tag)}>x</button> {tag}</span>
                })
            }</>}
            <BrTextField placeholder={props.placeholder} label={props.label} hint={props.hint} error={props.error} onBlur={onBlur}/>
        </div>
        </>)
}

export default TagSelelector;