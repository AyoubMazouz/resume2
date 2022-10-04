import React from "react"

const ProjectCard = ({
	name,
	lastUpdate,
	demoURL,
	repoURL,
	technologies,
	thumbnail,
	description,
}) => {
	return (
		<div className="relative border-[6px] border-dark-gray bg-light max-w-[616px]">
			<div className="absolute top-0 translate-y-[-50%] right-[50%] translate-x-[50%] bg-dark-gray text-light-gray p-4 md:px-8 font-lora font-bold text-base md:text-lg text-center z-10">
				{name}
			</div>
			<div className="overflow-hidden">
				<img
					src={thumbnail}
					className="aspect-video object-cover scale-[102%]"
				/>
			</div>
			<div className="px-6 pb-6 py-6">
				<div className="flex flex-wrap gap-3 mb-6">
					{technologies?.map((technologie) => (
						<div className="bg-light-gray text-dark-gray font-bold text-xs md:text-sm px-4 py-1">
							{technologie}
						</div>
					))}
				</div>
				<div className="indent-4 text-sm md:text-base">{description}</div>
				<div className="text-accent underline font-bold mt-6">
					<a href={demoURL} target="_blank">
						Live Demo
					</a>
				</div>
				<div className="text-accent underline font-bold">
					<a href={repoURL} target="_blank">
						See Repository
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
