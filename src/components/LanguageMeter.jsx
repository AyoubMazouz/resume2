import React from "react"

const LanguageMeter = ({ language }) => {
	return (
		<div className="-my-1.5">
			<span>{language[0]}</span>
			<div className="relative bg-light-gray h-2 w-full">
				<div
					className={`bg-dark-gray h-full w-${language[1]} absolute top-0 left-0`}
				></div>
			</div>
			<div className="text-dark-gray text-right uppercase text-[.60rem]">
				{language[2]}
			</div>
		</div>
	)
}

export default LanguageMeter
