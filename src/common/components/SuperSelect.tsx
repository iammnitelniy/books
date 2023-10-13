import React, {ChangeEvent} from 'react';
import {CustomSelect} from "../styles/StyledComponents.tsx";
type OptionType = {
    value: string
    label: string
}
type SuperSelectPropsType = {
    value: string
    options: OptionType[]
    callBack: (value: string) => void
}
export const SuperSelect: React.FC<SuperSelectPropsType> = ({options, callBack, value}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            callBack(e.currentTarget.value)
    }
    return (
        <CustomSelect value={value} onChange={onChangeHandler}>
            {options.map((el, index) => (
                <option key={index} value={el.value}>
                    {el.label}
                </option>
            ))}
        </CustomSelect>

    );
};

