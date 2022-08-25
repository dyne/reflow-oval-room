import React from "react";
import Link from "next/link";

type IfSideBarButtonProps = {
    text: string,
    link: string,
    active?: boolean,
    svg?: React.ReactNode;
    disabled?: boolean;
}

const IfSideBarButton = ({text, link, active, svg, disabled}: IfSideBarButtonProps) => {
    const css = `ml-4 w-64 gap-2 pl-0 btn btn-ghost font-medium normal-case text-primary
     border-0 hover:bg-amber-200 ${active && `bg-amber-200`}`
    return (<>{disabled ? <a className={`ml-4 w-64 gap-2 pl-0 btn btn-ghost font-medium normal-case text-white btn-disabled
     border-0`}>
            <button className={`flex flex-row items-center w-full pl-3 text-left`}
                    disabled={disabled}>
                <>
                    {svg}
                    {text}
                </>
            </button>

        </a> :
        <Link href={link} passHref>
            <a className={css}>
                <button className={`flex flex-row items-center w-full pl-3 text-left ${disabled ? 'btn-disabled' : ''}`}
                        disabled={disabled}>
                    <>
                        {svg}
                        {text}
                    </>
                </button>
            </a>
        </Link>}</>)
}
export default IfSideBarButton