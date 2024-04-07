import React, { useEffect, useRef, useState } from 'react'

//style
import { WrapInput } from './index.styled'
import IcInputEye from '@assets/images/IcInputEye'
import IcInputEyeOpen from '@assets/images/IcInputEyeOpen'

const TEXT = 'text'
const TEXT_ACTIVE = 'TEXT_ACTIVE'
const TEXT_ERROR = 'TEXT_ERROR'

const PWD = 'password'

const Input = ({
	inputType,
	handleValidation,
	className = '',
	heightInput,
	disabled,
	marginBottom,
	isErrorInput,
	...props
}) => {
	const [typeInput, setTypeInput] = useState(inputType)
	const [errorInput, setErrorInput] = useState('')
	const [errorBorder, setErrorBorder] = useState(false)
	const [isShowPwd, setIsShowPwd] = useState(true)

	const inputEl = useRef(null)

	// handle show click eye
	const _toggleEye = () => {
		setIsShowPwd((pre) => !pre)
		isShowPwd
			? (inputEl.current.type = 'text')
			: (inputEl.current.type = 'password')
	}

	useEffect(() => {
		if (!props.value) return
		setTypeInput(TEXT_ACTIVE)
	}, [props.value])

	useEffect(() => {
		if (!props.disabled) return
		setTypeInput(TEXT)
	}, [props.disabled])

	const _handleFocusInput = () => {
		setErrorInput('')
		setErrorBorder(false)
		switch (typeInput) {
			case TEXT:
				setTypeInput(TEXT_ACTIVE)
				break
			case TEXT_ERROR:
				setTypeInput(TEXT_ACTIVE)
				break
			default:
				return null
		}
	}
	const _handleBlurInput = (e) => {
		const valueText = e.target.value
		if (!valueText) {
			setTypeInput(TEXT)
		} else {
			setTypeInput(TEXT_ACTIVE)
		}
		const callback = (textErrorInput) => {
			setErrorInput(textErrorInput)
			setErrorBorder(true)
			setTypeInput(TEXT_ERROR)
		}
		handleValidation && handleValidation(props.value, callback)
	}

	useEffect(() => {
		if (disabled === undefined && inputType === TEXT) return
		inputEl.current?.focus()
	}, [disabled])

	return (
		<WrapInput
			heightInput={heightInput}
			marginBottom={marginBottom}
			className={className}
			errorInput={errorInput}
		>
			<div className="wrap-input">
				<input
					{...props}
					disabled={disabled}
					ref={inputEl}
					onFocus={_handleFocusInput}
					onBlur={_handleBlurInput}
					className={`${errorBorder ? 'error-input' : ''}`}
					type={inputType}
				/>
				{!disabled &&
					inputType === PWD &&
					(inputEl.current?.type === 'text' ? (
						<IcInputEyeOpen className="icon-left" onClick={_toggleEye} />
					) : (
						<IcInputEye className="icon-left" onClick={_toggleEye} />
					))}
			</div>
			{errorInput && <div className="error">{errorInput}</div>}
		</WrapInput>
	)
}

export default Input
