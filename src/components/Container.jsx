import React from "react"

const Container = ({ title, children }) => {
	return (
		<div className="relative px-6 pt-6 pb-2 border-[3px] border-dark-gray">
			<div className="absolute -top-5 right-[50%] translate-x-[50%] bg-dark text-light-gray px-6 py-2 uppercase text-base font-['bodoni-moda']">
				{title}
			</div>
			{children}
		</div>
	)
}

export default Container
