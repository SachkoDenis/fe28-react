export type InputPropsType = {
    value:string;
    onChange:(value:string)=>void;
    placeholder?:string;
    disabled?:boolean;
    error?:boolean
    onBlur?: () => void;
} 