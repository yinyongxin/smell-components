import type { FC } from "preact/compat"
import type { ButtonProps, ButtonStatus } from "../types"

const Button: FC<ButtonProps> = (props) => {
	const {
		children,
		status = 'default'
	} = props
	
	const textColor: Record<ButtonStatus, string> = {
		'danger': '',
		'warning': '',
		'success': '',
		'default': 'text-white'
	}
	return (
		<button class={`h-10 min-w-10 px-4 rounded-md ${textColor[status]}`}><>{children}</></button>
	)
}

export default Button