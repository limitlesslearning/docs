import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'

const base = process.env.BASE_PATH ?? ''

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				navbar: [
					{ title: 'Platform Bible', to: '/bible/vision-mission-principles/' },
					{ title: 'Roadmap', to: '/roadmap/' },
					{ title: 'Status', to: '/status/' },
					{ title: 'Decisions', to: '/decisions/' },
					{
						title: 'GitHub',
						to: 'https://github.com/limitlesslearning/docs',
						external: true,
					},
				],
				sidebar: {
					'/bible/': [
						{
							title: 'Foundations',
							collapsible: true,
							items: [
								{ title: '1. Front Matter', to: '/bible/front-matter/' },
								{
									title: '2. Vision, Mission & Principles',
									to: '/bible/vision-mission-principles/',
								},
								{ title: '3. Problems', to: '/bible/problems/' },
								{ title: '4. Solution', to: '/bible/solution/' },
							],
						},
						{
							title: 'Core Systems',
							collapsible: true,
							items: [
								{ title: '5. Knowledge Graph', to: '/bible/knowledge-graph/' },
								{ title: '6. Content System', to: '/bible/content-system/' },
								{
									title: '7. Learning Experience',
									to: '/bible/learning-experience/',
								},
								{ title: '8. Assessment', to: '/bible/assessment/' },
								{ title: '9. Credentials', to: '/bible/credentials/' },
								{ title: '10. Verification & Integrity', to: '/bible/verification/' },
							],
						},
						{
							title: 'Implementation & Scale',
							collapsible: true,
							items: [
								{ title: '11. Incentive & Economy', to: '/bible/incentive-economy/' },
								{ title: '12. Technology Stack', to: '/bible/technology-stack/' },
								{ title: '13. Project Structure', to: '/bible/project-structure/' },
								{ title: '14. Phased Roadmap', to: '/bible/roadmap-phases/' },
								{ title: '15. Governance', to: '/bible/governance/' },
								{ title: '16. Risks & Mitigations', to: '/bible/risks/' },
								{ title: '17. Legal & IP', to: '/bible/legal-ip/' },
								{ title: '18. Impact & KPIs', to: '/bible/impact-kpis/' },
								{ title: '19. Glossary', to: '/bible/glossary/' },
								{ title: '20. Appendices', to: '/bible/appendices/' },
							],
						},
					],
					'/roadmap/': [
						{ title: 'Development Roadmap', to: '/roadmap/' },
					],
					'/status/': [
						{ title: 'Documentation Status', to: '/status/' },
					],
					'/decisions/': [
						{ title: 'Decision Log', to: '/decisions/' },
					],
				},
				github: 'https://github.com/limitlesslearning/docs',
				logo: '/sveltepress.svg',
				editLink: 'https://github.com/limitlesslearning/docs/edit/main/src/routes/',
				preBuildIconifyIcons: {
					'material-symbols': [
						'menu-book-outline',
						'account-tree-outline',
						'school-outline',
						'work-outline',
						'lock-open-outline',
						'groups-outline',
						'verified-outline',
						'route-outline',
					],
					ph: ['smiley'],
				},
			}),
			siteConfig: {
				title: 'Limitless Learning',
				description:
					'A free, open-source, and unlimited global knowledge graph that doesn\'t have any boundaries, replacing traditional degrees with verified mastery to directly connect every learner to real-world employment.',
			},
			svelteKitOptions: {
				preprocess: [vitePreprocess()],
				adapter: adapter({
					pages: 'dist',
					assets: 'dist',
					fallback: '404.html',
				}),
				prerender: {
					handleMissingId: 'warn',
					handleHttpError: 'warn',
				},
				paths: {
					base,
					relative: false,
				},
			},
		}),
	],
})

export default config
