import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
	FaChevronDown,
	FaChevronLeft,
	FaChevronRight,
	FaClipboard,
	FaLinkedin,
	FaSquareGithub,
	FaSwift,
} from 'react-icons/fa6';
import './App.css';
import { BookshelfModel } from './assets/models/BookshelfModel';
import { ReactModel } from './assets/models/ReactModel';
import cambridge from '/cambridge.png';
import nyuX from '/nyux.png';
import selfie from '/placeholder.png';
import sfOnline from '/sfOnline.png';
import utn from '/utn.png';

function App() {
	const [selected, setSelected] = useState(null);

	return (
		<main className="px-4 w-screen flex justify-center text-[#0C1A27]">
			<body className="w-full max-w-[900px] flex flex-col items-start">
				{/* Hero Section */}
				<div className="w-full min-h-screen flex flex-col items-center py-4">
					<div className="flex flex-col md:flex-row flex-1 md:gap-6 md:items-center">
						<img
							src={selfie}
							className="bg-gray-500 w-[345px] h-[405px] object-cover rounded-xl mb-3 shadow-md shadow-slate-400"
						/>

						<div className="flex-1 flex flex-col md:h-[405px]">
							<h1 className=" font-medium text-4xl mb-1 md:text-5xl">
								Lucas Pennice 🇦🇷
							</h1>
							<h2 className="text-[#0B1A28] font-medium text-2xl md:text-3xl opacity-60">
								Software Engineer
							</h2>

							<div className="flex-1" />

							<h2 className="font-normal text-2xl md:text-3xl mb-1 w-[345px]">
								Nice to meet you 👋
							</h2>
						</div>
					</div>

					<FaChevronDown
						color="#0C1A27"
						opacity={0.3}
						className="animate-bounce"
					/>
				</div>

				<div className="py-6" />

				{/* Experience Section */}
				<h1 className=" font-normal text-xl mb-7 md:text-3xl">Experience</h1>

				<motion.div
					layoutId={`card-container-${'skillTrees'}`}
					className="w-full flex items-center anchor rounded-lg py-4 px-2 bg-[#f8fafc]"
					onClick={() => setSelected('asd')}
				>
					<motion.div
						className="flex-1 flex flex-col items-start"
						layoutId={`title-container-${'skillTrees'}`}
					>
						<div className="flex items-baseline gap-1">
							<h1 className="font-medium text-2xl md:text-3xl">Skill Trees</h1>
							<h3 className="text-[#0B1A28] font-medium text-sm md:text-lg opacity-60">
								(2023)
							</h3>
						</div>
						<h3 className="text-[#0B1A28] font-medium text-sm md:text-lg opacity-60">
							Solo Founder & Engineer
						</h3>

						{/* Badges */}
						<div className="mt-1 h-6 bg-opacity-10 bg-[#FF3D00] items-center flex gap-1 rounded-md px-3 py-1 w-fit">
							<FaSwift opacity={0.4} color="#FF3D00" />
							<span className="text-[#FF3D00] font-medium text-sm opacity-60">
								Swift
							</span>
						</div>
					</motion.div>
					<FaChevronRight color="#0C1A27" opacity={0.5} />
				</motion.div>

				<div className="py-12" />

				{/* Formal Education */}
				<h1 className=" font-normal text-xl mb-7 md:text-3xl">
					Formal Education
				</h1>

				{/* UTN */}
				<a className="w-full flex items-center mb-12 rounded-lg py-4 px-2">
					<img src={utn} className="w-[42px] h-[42px] rounded-sm mr-4" />
					<div className="flex-1 flex flex-col items-start">
						<h1 className="font-medium text-lg leading-5">
							Bachelor of Engineering in Information Systems
						</h1>

						<h3 className="text-[#0B1A28] font-medium text-sm opacity-60">
							(2021 - 2026)
						</h3>
					</div>
				</a>

				{/* Machine learning Spec. */}
				<a
					className="w-full flex items-center mb-12 rounded-lg py-4 px-2"
					href="https://www.coursera.org/account/accomplishments/specialization/G42NIG1TGXI8"
					target="_blank"
				>
					<img src={sfOnline} className="w-[42px] h-[42px] rounded-sm mr-4" />
					<div className="flex-1 flex flex-col items-start">
						<h1 className="font-medium text-lg leading-5">
							Machine Learning Specialization
						</h1>

						<h3 className="text-[#0B1A28] font-medium text-sm opacity-60">
							(2024) Stanford Online
						</h3>
					</div>
					<FaChevronRight color="#0C1A27" opacity={0.5} />
				</a>

				{/* NYU. */}
				<a
					href="https://credentials.edx.org/credentials/2f22b253e7b34eeab6d2c6f207484e0f/"
					target="_blank"
					className="w-full flex items-center mb-12 rounded-lg py-4 px-2"
				>
					<img src={nyuX} className="w-[42px] h-[42px] rounded-sm mr-4" />
					<div className="flex-1 flex flex-col items-start">
						<h1 className="font-medium text-lg leading-5">
							Programming & Data Structures
						</h1>

						<h3 className="text-[#0B1A28] font-medium text-sm opacity-60">
							(2022) NYUx
						</h3>
					</div>
					<FaChevronRight color="#0C1A27" opacity={0.5} />
				</a>

				{/* Cambridge. */}

				<a className="w-full flex items-center rounded-lg py-4 px-2">
					<img src={cambridge} className="w-[42px] h-[42px] rounded-sm mr-4" />
					<div className="flex-1 flex flex-col items-start">
						<h1 className="font-medium text-lg leading-5">
							Expert English Level
						</h1>

						<h3 className="text-[#0B1A28] font-medium text-sm opacity-60">
							(2019) Cambridge University Press
						</h3>
					</div>
				</a>

				<div className="py-12" />

				{/* About Me */}
				<h1 className=" font-normal text-xl mb-7 md:text-3xl">About Me</h1>

				<p className="text-base md:text-lg leading-7 mb-4">
					Hi, I'm Lucas Pennice, a Software Developer with a strong background
					in React, React Native, and SwiftUI. I love finding problems and
					coming up with software solutions to fix them. This passion has led me
					to create a bunch of mobile apps to tackle issues people talk about in
					forums. Lately, I've been focusing on solving everyday problems that
					small businesses face.
				</p>

				<p className="text-base md:text-lg leading-7 mb-4">
					I started coding back in high school when I took a class on C. After
					that, I decided to go all in and pursue a degree in Systems
					Engineering, which I'm set to finish by 2026.
				</p>

				<p className="text-base md:text-lg leading-7 mb-4">
					When I'm not coding, I'm probably reading about business, philosophy,
					or fantasy. I also love knifemaking, mechanical keyboards, cars, and
					hitting the gym. These hobbies keep me curious, creative, and, most
					importantly, clear-minded, which helps a lot in my work.
				</p>

				<div className="py-12" />

				{/* Supplementary Education */}
				<h1 className=" font-normal text-xl mb-8 md:text-3xl">
					Supplementary Education
				</h1>

				<h1 className="font-medium text-2xl md:text-3xl mb-2">Books</h1>

				<div className="cursor-grab bg-[#F3F5F7] rounded-lg h-[115px] md:h-[160px] w-full mb-4">
					<Canvas camera={{ position: [-25, 5, -25], fov: 15, zoom: 1.5 }}>
						<OrbitControls
							autoRotate={true}
							enablePan={false}
							enableZoom={false}
						/>
						<ambientLight intensity={1.5} />
						<pointLight position={[0, 20, 10]} intensity={2.5} />
						<BookshelfModel />
					</Canvas>
				</div>

				<div className="mb-4">
					<h1 className="font-light text-lg md:text-2xl">Clean Code</h1>

					<h3 className="text-[#0B1A28] font-normal text-sm md:text-lg opacity-60">
						Robert C. Martin
					</h3>
				</div>

				<div className="mb-4">
					<h1 className="font-light text-lg md:text-2xl">The Clean Coder</h1>

					<h3 className="text-[#0B1A28] font-normal text-sm md:text-lg opacity-60">
						Robert C. Martin
					</h3>
				</div>

				<div className="mb-4">
					<h1 className="font-light text-lg md:text-2xl">
						Test-Driven Development
					</h1>

					<h3 className="text-[#0B1A28] font-normal text-sm md:text-lg opacity-60">
						Kent Beck
					</h3>
				</div>

				<div className="mb-4">
					<h1 className="font-light text-lg md:text-2xl">
						The Philosophy of Software Design
					</h1>

					<h3 className="text-[#0B1A28] font-normal text-sm md:text-lg opacity-60">
						John Ousterhout
					</h3>
				</div>

				<div className="mb-4">
					<h1 className="font-light text-lg md:text-2xl">
						The Pragmatic Programmer
					</h1>

					<h3 className="text-[#0B1A28] font-normal text-sm md:text-lg opacity-60">
						Andy Hunt & Dave Thomas
					</h3>
				</div>

				<div className="mb-4">
					<h1 className="font-light text-lg md:text-2xl">
						Eloquent JavaScript
					</h1>

					<h3 className="text-[#0B1A28] font-normal text-sm md:text-lg opacity-60">
						Marijn Haverbeke
					</h3>
				</div>

				<div className="mb-4">
					<h1 className="font-light text-lg md:text-2xl">RefactoringUI</h1>

					<h3 className="text-[#0B1A28] font-normal text-sm md:text-lg opacity-60">
						Adam Wathan & Steve Schoger
					</h3>
				</div>

				<div className="py-6" />

				<h1 className="font-medium text-2xl md:text-3xl mb-2">Courses</h1>

				<div className="cursor-grab bg-[#F3F5F7] rounded-lg h-[115px] md:h-[160px] w-full mb-4">
					<Canvas camera={{ position: [-25, 5, -25], fov: 15, zoom: 1 }}>
						<OrbitControls
							autoRotate={true}
							enablePan={false}
							enableZoom={false}
						/>
						<ambientLight intensity={1.5} />
						<pointLight position={[0, 20, 10]} intensity={2.5} />
						<ReactModel />
					</Canvas>
				</div>

				<div>
					<h1 className="font-light text-lg md:text-2xl mb-4">
						Advanced CSS and Sass Link
					</h1>
					<h1 className="font-light text-lg md:text-2xl mb-4">
						Typescript: The Complete Developer's Guide
					</h1>
					<h1 className="font-light text-lg md:text-2xl mb-4">
						Object-oriented Programming in JavaScript
					</h1>
					<h1 className="font-light text-lg md:text-2xl mb-4">
						Building Web Applications with React
					</h1>
					<h1 className="font-light text-lg md:text-2xl mb-4">
						Working with REST APIs in JavaScript
					</h1>
				</div>

				<div className="py-12" />

				{/* Contact */}
				<h1 className=" font-normal text-xl mb-7 md:text-3xl">
					Let's get in touch
				</h1>

				<button
					className="flex gap-2 items-center bg-[#F3F5F7] rounded-xl w-full px-4 py-2 transition-all active:bg-[#4CAF501A] mb-4"
					onClick={() => {
						navigator.clipboard.writeText('lucaspennice@gmail.com');
					}}
				>
					<FaClipboard opacity={0.5} color="#0C1A27" />
					<span className="font-medium text-2xl ">lucaspennice@gmail.com</span>
				</button>

				<a
					href="https://www.linkedin.com/in/lucas-pennice/"
					target="_blank"
					className="w-full mt-1 h-12 bg-opacity-10 bg-[#03A9F4] items-center flex rounded-lg px-3 py-1 mb-4"
				>
					<FaLinkedin opacity={0.4} color="#03A9F4" size={32} />
					<span className="text-[#03A9F4] font-medium text-xl opacity-80 ml-2">
						My LinkedIn
					</span>

					<div className="flex-1" />

					<FaChevronRight color="#03A9F4" opacity={0.6} />
				</a>

				<a
					href="https://github.com/LucasPennice"
					target="_blank"
					className="w-full mt-1 h-12 bg-opacity-10 bg-[#333333] items-center flex rounded-lg px-3 py-1"
				>
					<FaSquareGithub opacity={0.4} color="#333333" size={32} />
					<span className="text-[#333333] font-medium text-xl opacity-80 ml-2">
						My GitHub
					</span>

					<div className="flex-1" />

					<FaChevronRight color="#333333" opacity={0.6} />
				</a>

				<div className="py-12" />

				<AnimatePresence>
					{selected && (
						<Item
							key="item"
							close={() => {
								setSelected(null);
							}}
						/>
					)}
				</AnimatePresence>
			</body>
		</main>
	);
}

export default App;

export function Item({ close }: { close: () => void }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2, delay: 0.1 }}
			style={{ pointerEvents: 'auto' }}
			className="overlay flex justify-center items-center p-4"
			onClick={close}
		>
			<motion.div
				className="pointer-events-auto relative bg-[#f8fafc] overflow-hidden open w-full max-w-[900px] z-10 h-full md:h-fit md:p-4 md:rounded-lg md:shadow-md md:shadow-[#0B1A281A]"
				layoutId={`card-container-${'skillTrees'}`}
			>
				<button className="text-[#649ACB] flex gap-2 items-center mb-4">
					<FaChevronLeft color="#649ACB" size={14} />
					<p className="text-md">Home</p>
				</button>
				<motion.div
					className="flex-1 flex flex-col items-start mb-4"
					layoutId={`title-container-${'skillTrees'}`}
				>
					<div className="flex items-baseline gap-1">
						<h1 className="font-medium text-2xl md:text-3xl">Skill Trees</h1>
						<h3 className="text-[#0B1A28] font-medium text-sm md:text-lg opacity-60">
							(2023)
						</h3>
					</div>
					<h3 className="text-[#0B1A28] font-medium text-sm md:text-lg opacity-60">
						Solo Founder & Engineer
					</h3>

					{/* Badges */}
					<div className="mt-1 h-6 bg-opacity-10 bg-[#FF3D00] items-center flex gap-1 rounded-md px-3 py-1 w-fit">
						<FaSwift opacity={0.4} color="#FF3D00" />
						<span className="text-[#FF3D00] font-medium text-sm opacity-60">
							Swift
						</span>
					</div>
				</motion.div>

				<motion.div animate>
					<p className="text-base md:text-lg leading-7 mb-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
						doloremque quia repellat labore, mollitia ducimus distinctio quod
						aut neque expedita perspiciatis modi accusamus quasi voluptatem
						fugit! Expedita dolorem enim nemo.
					</p>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
