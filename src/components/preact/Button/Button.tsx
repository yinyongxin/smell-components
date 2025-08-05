import type { FC } from "preact/compat"
import type { Status } from "@src/typings"

type ButtonProps = {
	status?: Status
}

const Button: FC<ButtonProps> = (props) => {
	const {
		children,
		status = 'default'
	} = props
	return (
		<button class="text-red"><>{children}</></button>
	)
}

export default Button