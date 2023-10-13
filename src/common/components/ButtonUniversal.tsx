import {CustomButton} from "../styles/StyledComponents.tsx";

type SuperButtonPropsType = {
	callBack: () => void
	name: string
	disabled: any
}
export const ButtonUniversal = (props: SuperButtonPropsType) => {
	const {callBack, name, disabled} = props
	const onClickHandler = () => {
		callBack()
	}
	return (
		<CustomButton disabled={disabled} onClick={onClickHandler}>{name}</CustomButton>
	);
};

