import type { FC } from "preact/compat"
import type { ButtonProps, ButtonStatus } from "../types"

const Button: FC<ButtonProps> = (props) => {
	const {
		children,
		status = 'default'
	} = props

	const statusClass: Record<ButtonStatus, string>[] = [
		{
			'danger': 'text-white',
			'warning': 'text-white',
			'success': 'text-white',
			'default': 'text-white',
		},
		{
			'danger': 'bg-danger',
			'warning': 'bg-warning',
			'success': 'bg-success',
			'default': 'bg-primary',
		}
	]

	return (
		<button class={`h-10 min-w-10 px-4 rounded-md ${statusClass.map(item => item[status]).join(' ')}`}><>{children}</></button>
	)
}

export default Button