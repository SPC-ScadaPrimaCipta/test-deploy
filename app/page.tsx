import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen bg-neutral-950 font-sans text-neutral-50 overflow-hidden relative">
			{/* Background Gradients */}
			<div className="absolute top-0 left-1/2 min-w-[200vw] -translate-x-1/2 h-[50rem] w-[50rem] opacity-30 blur-[100px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pointer-events-none rounded-full mix-blend-screen" />
			<div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
			<div className="absolute top-1/2 right-0 w-96 h-96 bg-fuchsia-500/20 blur-[120px] rounded-full pointer-events-none" />

			{/* Navigation */}
			<nav className="relative z-10 border-b border-white/10 backdrop-blur-md bg-black/20">
				<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
							N
						</div>
						<span className="text-xl font-bold tracking-tight text-white">
							NextGen
						</span>
					</div>
					<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
						<Link
							href="#features"
							className="hover:text-white transition-colors"
						>
							Features
						</Link>
						<Link
							href="#testimonials"
							className="hover:text-white transition-colors"
						>
							Testimonials
						</Link>
						<Link
							href="#pricing"
							className="hover:text-white transition-colors"
						>
							Pricing
						</Link>
					</div>
					<div className="flex flex-row items-center gap-4">
						<button className="text-sm font-medium text-neutral-300 hover:text-white transition-colors hidden sm:block">
							Log In
						</button>
						<button className="px-4 py-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
							Get Started
						</button>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<main className="relative z-10 flex flex-col items-center justify-center pt-32 pb-24 px-6 sm:pt-40 sm:pb-32 lg:pb-40 text-center max-w-5xl mx-auto">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 text-sm text-indigo-200">
					<span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)] animate-pulse"></span>
					Announcing our new AI features
				</div>

				<h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 drop-shadow-sm">
					Build faster with <br className="hidden sm:block" />
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
						NextGen Technologies
					</span>
				</h1>

				<p className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-400 mb-10 leading-relaxed">
					The most powerful toolset to accelerate your development
					workflow. Everything you need to ship world-class
					applications in record time.
				</p>

				<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center sm:w-auto">
					<button className="w-full sm:w-auto px-8 py-4 bg-white text-black text-lg font-semibold rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-1 active:translate-y-0 relative overflow-hidden group">
						<span className="relative z-10 flex items-center gap-2">
							Start Building For Free
							<svg
								className="w-5 h-5 group-hover:translate-x-1 transition-transform"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</svg>
						</span>
						<div className="absolute inset-0 bg-gradient-to-r from-white via-neutral-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
					</button>

					<button className="w-full sm:w-auto px-8 py-4 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-lg font-semibold rounded-full transition-all text-white flex items-center justify-center gap-2 group">
						<svg
							className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						Watch Demo
					</button>
				</div>

				{/* Feature grid */}
				<div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
					{[
						{
							title: "Lightning Fast",
							desc: "Optimized for speed out of the box with zero configuration required.",
							icon: (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							),
						},
						{
							title: "Modern Stack",
							desc: "Built on top of Next.js 16, React 19, and Tailwind CSS v4.",
							icon: (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
								/>
							),
						},
						{
							title: "Beautiful UI",
							desc: "Carefully crafted components that look stunning by default.",
							icon: (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							),
						},
					].map((feature, i) => (
						<div
							key={i}
							className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer backdrop-blur-sm relative overflow-hidden"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
							<div className="w-12 h-12 rounded-xl bg-white/10 border border-white/5 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform shadow-inner shadow-white/10">
								<svg
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									{feature.icon}
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-2 relative z-10">
								{feature.title}
							</h3>
							<p className="text-neutral-400 relative z-10 leading-relaxed">
								{feature.desc}
							</p>
						</div>
					))}
				</div>
			</main>

			{/* Footer minimal */}
			<footer className="relative z-10 border-t border-white/10 py-10 mt-20 bg-black/40 backdrop-blur-md">
				<div className="max-w-7xl mx-auto px-6 text-center text-sm text-neutral-500">
					<p>
						© {new Date().getFullYear()} NextGen Technologies. All
						rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}

