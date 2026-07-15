import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Sparkles, d as MessageCircle, f as Menu, n as X, p as Globe, s as Send, t as Youtube, u as Phone, w as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ContactSection-Bz7ZuAV1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Navbar() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [activeSection, setActiveSection] = (0, import_react.useState)("accueil");
	let pathname = "/";
	let navigate = null;
	try {
		pathname = useRouterState({ select: (s) => s.location.pathname });
		navigate = useNavigate();
	} catch {
		pathname = typeof window !== "undefined" ? window.location.pathname : "/";
	}
	const isHome = pathname === "/" || pathname === "";
	const navLinks = [
		{
			id: "accueil",
			name: "Accueil",
			kind: "anchor"
		},
		{
			id: "services",
			name: "Pour qui ?",
			kind: "anchor"
		},
		{
			id: "projets",
			name: "Réalisations",
			kind: "anchor"
		},
		{
			id: "mon-histoire",
			name: "Mon Histoire",
			kind: "route",
			to: "/mon-histoire"
		},
		{
			id: "audit",
			name: "Votre Stratégie",
			kind: "anchor"
		},
		{
			id: "contact",
			name: "Contact",
			kind: "anchor"
		}
	];
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
			if (isHome) {
				const scrollPosition = window.scrollY + 120;
				for (const link of navLinks) if (link.kind === "anchor") {
					const el = document.getElementById(link.id);
					if (el) {
						const top = el.offsetTop;
						const height = el.offsetHeight;
						if (scrollPosition >= top && scrollPosition < top + height) setActiveSection(link.id);
					}
				}
			}
		};
		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isHome]);
	(0, import_react.useEffect)(() => {
		if (isHome && typeof window !== "undefined" && window.location.hash) {
			const hashId = window.location.hash.replace("#", "");
			setTimeout(() => {
				const el = document.getElementById(hashId);
				if (el) {
					const offset = hashId === "accueil" ? 0 : 80;
					const bodyRect = document.body.getBoundingClientRect().top;
					const offsetPosition = el.getBoundingClientRect().top - bodyRect - offset;
					window.scrollTo({
						top: Math.max(0, offsetPosition),
						behavior: "smooth"
					});
					setActiveSection(hashId);
				}
			}, 150);
		}
	}, [isHome, pathname]);
	const handleScrollTo = (e, id) => {
		e.preventDefault();
		setIsOpen(false);
		if (!isHome) {
			if (navigate) if (id === "accueil") navigate({ to: "/" });
			else navigate({
				to: "/",
				hash: id
			});
			else window.location.assign(id === "accueil" ? "/" : `/#${id}`);
			return;
		}
		const element = document.getElementById(id);
		if (element) {
			const offset = id === "accueil" ? 0 : 80;
			const bodyRect = document.body.getBoundingClientRect().top;
			const offsetPosition = element.getBoundingClientRect().top - bodyRect - offset;
			window.scrollTo({
				top: Math.max(0, offsetPosition),
				behavior: "smooth"
			});
			setActiveSection(id);
		} else if (id === "accueil") {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			setActiveSection("accueil");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		id: "main-navbar",
		className: `fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out pointer-events-auto glassmorphism ${scrolled ? "py-3 shadow-2xl shadow-brand-emerald/10 border-b border-brand-emerald/40 backdrop-blur-2xl" : "py-5 shadow-lg shadow-black/60 border-b border-white/10"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						id: "nav-logo",
						href: "/",
						onClick: (e) => {
							e.preventDefault();
							setIsOpen(false);
							window.location.href = "/";
						},
						className: "flex items-center space-x-3 group shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-10 h-10 bg-brand-emerald rounded-none flex items-center justify-center font-black text-black text-base shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)] transition-all duration-300",
							children: "AIA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-bold tracking-tight uppercase text-white group-hover:text-brand-emerald transition-colors",
							children: "Agonan Isidore Abraham"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden lg:flex items-center space-x-3 xl:space-x-5",
						children: navLinks.map((link) => {
							const className = `text-xs font-mono uppercase tracking-widest transition-all duration-300 relative px-3 py-1.5 rounded-none ${(link.kind === "route" ? pathname === link.to : isHome && activeSection === link.id) ? "text-brand-emerald font-bold bg-brand-emerald/10 shadow-[inset_0_0_12px_rgba(16,185,129,0.2)] border border-brand-emerald/30" : "text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent"}`;
							if (link.kind === "route") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								id: `nav-link-${link.id}`,
								to: link.to,
								onClick: () => setIsOpen(false),
								className,
								children: link.name
							}, link.id);
							if (!isHome) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								id: `nav-link-${link.id}`,
								href: link.id === "accueil" ? "/" : `/#${link.id}`,
								onClick: (e) => {
									e.preventDefault();
									setIsOpen(false);
									window.location.href = link.id === "accueil" ? "/" : `/#${link.id}`;
								},
								className,
								children: link.name
							}, link.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								id: `nav-link-${link.id}`,
								href: `#${link.id}`,
								onClick: (e) => handleScrollTo(e, link.id),
								className,
								children: link.name
							}, link.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center space-x-4 shrink-0",
						children: [isHome ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							id: "nav-cta-btn",
							href: "#contact",
							onClick: (e) => handleScrollTo(e, "contact"),
							className: "hidden lg:flex items-center space-x-2 px-6 py-2.5 rounded-none text-xs font-mono uppercase tracking-widest bg-transparent border border-brand-emerald text-brand-emerald hover:bg-brand-emerald hover:text-black transition-all duration-300 group shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Collaborer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							id: "nav-cta-btn",
							to: "/",
							hash: "contact",
							onClick: () => setIsOpen(false),
							className: "hidden lg:flex items-center space-x-2 px-6 py-2.5 rounded-none text-xs font-mono uppercase tracking-widest bg-transparent border border-brand-emerald text-brand-emerald hover:bg-brand-emerald hover:text-black transition-all duration-300 group shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Collaborer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							id: "mobile-menu-toggle",
							onClick: () => setIsOpen(!isOpen),
							className: "lg:hidden p-2.5 rounded-none text-zinc-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center border border-white/10",
							"aria-label": "Toggle Menu",
							children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-6 h-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-6 h-6" })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "mobile-nav-drawer",
				className: `fixed inset-y-0 right-0 w-full max-w-sm glassmorphism border-l border-white/10 z-50 p-8 flex flex-col justify-between transform transition-transform duration-500 lg:hidden rounded-none ${isOpen ? "translate-x-0" : "translate-x-full"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center space-x-2 font-display font-bold text-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-8 h-8 rounded-none bg-brand-emerald flex items-center justify-center text-black font-bold text-xs",
							children: "AIA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white font-mono text-sm tracking-widest uppercase",
							children: "AGONAN I.A."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						id: "mobile-menu-close",
						onClick: () => setIsOpen(false),
						className: "p-2 rounded-none text-zinc-400 hover:text-white hover:bg-white/5 transition-colors border border-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-6 h-6" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col space-y-3",
					children: navLinks.map((link, index) => {
						const className = `text-sm font-mono uppercase tracking-widest transition-all duration-300 px-4 py-3 border flex items-center ${(link.kind === "route" ? pathname === link.to : isHome && activeSection === link.id) ? "text-brand-emerald font-bold bg-brand-emerald/10 border-brand-emerald/30 shadow-[inset_0_0_12px_rgba(16,185,129,0.2)]" : "text-zinc-300 hover:text-white hover:bg-white/5 border-transparent"}`;
						if (link.kind === "route") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							id: `mobile-nav-link-${link.id}`,
							to: link.to,
							onClick: () => setIsOpen(false),
							className,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-brand-emerald mr-4 opacity-50",
								children: ["0", index + 1]
							}), link.name]
						}, link.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							id: `mobile-nav-link-${link.id}`,
							href: link.id === "accueil" ? "/" : `/#${link.id}`,
							onClick: (e) => {
								e.preventDefault();
								setIsOpen(false);
								if (isHome) handleScrollTo(e, link.id);
								else window.location.href = link.id === "accueil" ? "/" : `/#${link.id}`;
							},
							className,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-brand-emerald mr-4 opacity-50",
								children: ["0", index + 1]
							}), link.name]
						}, link.id);
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-white/10 pt-6 mt-6",
					children: isHome ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						id: "mobile-nav-cta",
						href: "#contact",
						onClick: (e) => handleScrollTo(e, "contact"),
						className: "w-full py-4 rounded-none font-mono text-xs uppercase tracking-widest bg-brand-emerald text-black text-center flex items-center justify-center space-x-2 shadow-lg hover:bg-brand-emerald/90 transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Travailler ensemble" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-black animate-pulse" })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						id: "mobile-nav-cta",
						to: "/",
						hash: "contact",
						onClick: () => setIsOpen(false),
						className: "w-full py-4 rounded-none font-mono text-xs uppercase tracking-widest bg-brand-emerald text-black text-center flex items-center justify-center space-x-2 shadow-lg hover:bg-brand-emerald/90 transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Travailler ensemble" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-black animate-pulse" })]
					})
				})]
			}),
			isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "mobile-nav-backdrop",
				onClick: () => setIsOpen(false),
				className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
			})
		]
	});
}
function ContactSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "contact",
		className: "bg-neutral-950 border-t border-neutral-900 pt-24 pb-12 relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-emerald/5 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-pattern pointer-events-none opacity-5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto px-6 md:px-12 relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "contact-cta-banner",
						className: "rounded-none p-8 md:p-14 bg-neutral-900 border border-neutral-800 text-center mb-20 relative overflow-hidden group shadow-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_10px] pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl mx-auto relative z-10 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center space-x-1.5 px-3 py-1 rounded-none bg-brand-emerald/10 border border-brand-emerald/20 mx-auto",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-brand-emerald" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-mono tracking-widest text-brand-emerald uppercase",
										children: "// PROPULSEZ VOTRE PROJET"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									id: "contact-banner-title",
									className: "text-4xl sm:text-6xl font-black uppercase italic tracking-tighter text-white",
									children: "Prêt à scaler votre projet ?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-neutral-400 font-sans font-light text-sm sm:text-base leading-relaxed",
									children: "Ne laissez pas vos concurrents automatiser avant vous. Que vous soyez créateur de contenu ou dirigeant de marque, créons ensemble vos futurs leviers de croissance."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										id: "contact-banner-wa-btn",
										href: "https://wa.me/2290157385885?text=Bonjour%20Isidore,%20je%20viens%20depuis%20ton%20portfolio%20et%20je%20souhaite%20lancer%20un%20projet%20avec%20toi.",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center space-x-3 px-8 py-4.5 rounded-none text-xs font-mono uppercase tracking-widest bg-brand-emerald text-black hover:bg-emerald-400 transition-all group",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4 fill-black" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discuter sur WhatsApp" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1.5 transition-transform" })
										]
									})
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "contact-channels-grid",
						className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-20",
						children: [
							{
								name: "WhatsApp",
								value: "+229 01 57 38 58 85",
								href: "https://wa.me/2290157385885?text=Bonjour%20Isidore,%20j'aimerais%20collaborer%20avec%20vous.",
								desc: "Réponse instantanée sous quelques heures",
								icon: MessageCircle,
								color: "hover:text-emerald-400 hover:border-emerald-500/30"
							},
							{
								name: "Telegram Channel",
								value: "@isidore_automation",
								href: "https://t.me/isidore_automation",
								desc: "Canal d'analyses technologiques et d'astuces IA",
								icon: Send,
								color: "hover:text-cyan-400 hover:border-cyan-500/30"
							},
							{
								name: "Chaîne YouTube",
								value: "Isidore ABRAHAM - Tech & Business",
								href: "https://youtube.com",
								desc: "Vidéos d'automatisation & décryptages business",
								icon: Youtube,
								color: "hover:text-red-400 hover:border-red-500/30"
							}
						].map((channel, idx) => {
							const IconComponent = channel.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								id: `contact-channel-card-${channel.name.toLowerCase().replace(" ", "-")}`,
								href: channel.href,
								target: "_blank",
								rel: "noopener noreferrer",
								className: `p-6 rounded-none bg-neutral-900/40 border border-neutral-850 flex flex-col justify-between h-48 transition-all duration-300 group ${channel.color}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-start",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-3 rounded-none bg-white/5 text-zinc-400 group-hover:text-inherit transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, { className: "w-6 h-6" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono text-zinc-500 uppercase group-hover:text-zinc-400 transition-colors",
										children: "// Rejoindre"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs uppercase font-mono font-bold text-zinc-500 tracking-wider mb-1",
										children: channel.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-white font-display font-bold text-base sm:text-lg group-hover:text-brand-emerald transition-colors truncate",
										children: channel.value
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-zinc-400 mt-1 font-sans font-light truncate",
										children: channel.desc
									})
								] })]
							}, idx);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-neutral-900 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-mono",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center space-x-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-4 h-4 text-brand-emerald" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dolapo ECOM LLC — Société Offshore Enregistrée" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center md:text-right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Dolapo ECOM LLC. Tous droits réservés." })
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { Navbar as n, ContactSection as t };
