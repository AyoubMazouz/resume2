import _image from "./assets/profile.jpg"

// full name must be separated with space
export const fullName = ["Mazouz", "Ayoub"]
export const title = "Software Developer"
export const image = _image
export const details = [
	"22 ans",
	"07 70 75 91 06",
	"ayoub2000mazouz@gmail.com",
	"Sidi-Maârouf Lot Anna 4, 14_6, Casablanca.",
]

export const description = <div></div>

export const educations = [
	[
		"2019 - 2020",
		"Baccalauréat branche Science de la Vie et la Terre (SVT) à lycée Qadi Ayad.",
	],
	[
		"2021 - 2023",
		"Technicien Spécialisé en Infrastructure Informatique à ISFO (OFPPT) à Sidi Maârouf, Casablanca.",
	],
]

export const experiences = [
	["Juil - Août 2022", "PHP/Laravel Backend Développeur à Sirecom.ma."],
]

export const competencies = [
	"Travailler efficacement dans les environnements Windows et Linux.",
	"Algorithmes et structures de données.",
	"Travaillez avec des APIs, des bases de données relationnelles et basées sur des documents.",
	"Automatisation et virtualisation.",
	"Tests unitaires et débogage.",
	"Apprenant vite, tant que la documentation est disponible.",
	"Résolution de problèmes et pensée critique.",
	"Auditeur actif, apprentissage continu.",
]

export const programmingLangues = {
	efficient: [
		"JavaScript",
		"Python",
		"Git",
		"ReactJs",
		"NodeJs",
		"TailwindCSS",
	],
	familiar: [
		"C#",
		"C",
		"Lua",
		"TypeScript",
		"Bash",
		"PowerShell",
		"SASS",
		"FireBase",
		"BootStrap",
		"Flask",
		"ReactNative",
		"Electron",
		"PHP",
		"Laravel",
	],
}

export const hobbies = [
	"écouter des histoires",
	"regarder des films",
	"Documentaires",
	"Podcasts",
	"Technologie",
	"Astronomie",
	"biologie",
	"Dessin",
	"Jeux vidéos",
	"cuisine",
]

export const languages = [
	["Français", "3/6", "bien"],
	["Anglais", "5/6", "très bien"],
	["Arabe", "full", "maternelle"],
]

export const projects = [
	{
		name: "Sudoku Solver Visualizer",
		lastUpdate: "May 31 2022",
		technologies: ["HTML/CSS", "Javascript", "Canvas API"],
		demoURL: "https://sudoku-solver-visualizer.netlify.app/",
		repoURL: "https://github.com/AyoubMazouz/sudoku-solver-visualizer.git",
		thumbnail: "/assets/sudoku.gif",
		description: (
			<div>
				Sudoku Solver Visualizer est une application Web réalisée avec Vanilla
				JavaScript.
				<br></br>
				Dans cette application, vous pouvez jouer au sudoku comme vous le feriez
				normalement, mais en un clic, vous pouvez résoudre n'importe quel
				tableau en utilisant <b>BackTrack </b>
				algorithme, ou encore mieux visualiser les étapes de l'algorithme au fur
				et à mesure résoudre le tableau.
			</div>
		),
	},
	{
		name: "Dental Website",
		lastUpdate: "jul 5 2022",
		demoURL: "https://dentalwebsite.netlify.app/",
		repoURL: "https://github.com/AyoubMazouz/dental-website.git",
		technologies: [
			"HTML/CSS",
			"Javascript",
			"TailwindCSS",
			"ReactJS",
			"FireBase",
		],
		thumbnail: "/assets/dental_website.jpeg",
		description: (
			<div>
				Projet indépendant réalisé avec ReactJS et Firebase pour un client sur
				Upwork.com
			</div>
		),
	},
	{
		name: "Tic Tac Toe AI",
		lastUpdate: "jun 1 2022",
		technologies: ["HTML/CSS", "Javascript", "Canvas API"],
		demoURL: "https://tic-tac-toe-33.netlify.app/",
		repoURL: "https://github.com/AyoubMazouz/tic-tac-toe-ai.git",
		thumbnail: "/assets/tic_tac_toe.gif",
		description: (
			<div>
				C'était un petit projet amusant pour pratiquer les algorithmes. L'Ai
				utilise l'algorithme <b>Minimax</b> pour décider du coup suivant.
			</div>
		),
	},
	{
		name: "Tetris",
		lastUpdate: "May 31 2022",
		technologies: ["HTML/CSS", "Javascript", "Canvas API"],
		demoURL: "https://tetris3.netlify.app/",
		repoURL: "https://github.com/AyoubMazouz/tetris-js.git",
		thumbnail: "/assets/tetris.gif",
		description: (
			<ul className="list-disc indent-0 pl-4">
				<li>
					Progression de niveau (29 niveaux) La vitesse et le score augmentent à
					chaque niveau.
				</li>
				<li>Suivre le nombre de lignes qui ont été effacées.</li>
				<li>
					Suivi du <b>Tetris Rate</b>.
				</li>
				<li>Enregistrer le meilleur score (stocké dans le stockage local).</li>
				<li>
					Aperçu des prochains <b>Tetrominos</b>.
				</li>
				<li>Mettez en pause ou réinitialisez le jeu.</li>
			</ul>
		),
	},
	{
		name: "Powershell Cheat Sheet",
		lastUpdate: "jun 1 2022",
		technologies: ["HTML/CSS", "Javascript", "TailwindCSS", "ReactJS"],
		demoURL: "https://pscheatsheet.netlify.app/",
		repoURL: "https://github.com/AyoubMazouz/powershell-cheat-sheet.git",
		thumbnail: "/assets/pscheatsheet.jpeg",
		description: (
			<div>
				<b>PSCheatSheet</b> est une application Web réalisée avec React, elle
				comporte une liste de <b>400+ commandes PowerShell</b> ainsi qu'une
				courte description, <b>cmdlet</b> et également le type de la commande,
				vous pouvez rechercher par nom de commande ou <b>cmdlet</b> lors de la
				recherche, vous pouvez filtrer le résultat à l'aide des options sur le
				en haut à droite, en cliquant sur n'importe quel nom de commande vers
				lequel vous serez redirigé une autre page à voir dans la description
				détaillée avec des exemples pour différents paramètres.
				<br></br>
				Le projet a été conçu pour aider les étudiants à apprendre les commandes
				PowerShell tout en un place.
			</div>
		),
	},
	{
		name: "Units Converter",
		lastUpdate: "May 29 2022",
		technologies: ["HTML/CSS", "Javascript", "TailwindCSS", "ReactJS"],
		demoURL: "https://converteunits.netlify.app/",
		repoURL: "https://github.com/AyoubMazouz/unit-converter.git",
		thumbnail: "/assets/unit_converter.jpeg",
		description: (
			<div>
				Convertisseur d'unités réalisé avec React, convertissez plus de 100
				unités : longueur, poids, volume, énergie, température, stockage de
				données.
			</div>
		),
	},
	{
		name: "Snake",
		lastUpdate: "May 31 2022",
		technologies: ["HTML/CSS", "Javascript", "Canvas API"],
		demoURL: "https://snake3.netlify.app/",
		repoURL: "https://github.com/AyoubMazouz/snake-js.git",
		thumbnail: "/assets/snake.gif",
		description: (
			<div>
				Fabriqué avec Vanilla JavaScript à l'aide de l'API Canvas, vous pouvez
				régler la vitesse, mettre en pause ou réinitialiser. HighScore est
				stocké dans le stockage local.
			</div>
		),
	},
]
