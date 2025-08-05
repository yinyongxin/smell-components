export type ButtonStatus  = 'default' | 'danger' | 'warning' | 'success' 

export type ButtonVariant = 'primary' | 'secondary'  | 'outline' | 'text'

export type ButtonProps = {
	status?: ButtonStatus
	variant?: ButtonVariant
}