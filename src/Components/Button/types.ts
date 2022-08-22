

export enum ButtonType {
    Primary = 'primary', 
    Secondary = 'secondary',
    Error = 'error'
  }

export type ButtonPropsType = {
    title:string;
    type:ButtonType;
    onClick:() => void;
    className?:string;
    disabled?:boolean;
  }

export type ButtonClassnamesType = {
    [keys in ButtonType]: string;
  }


 
