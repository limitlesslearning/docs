import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'
import { SITE_DESCRIPTION, SITE_NAME } from './src/lib/site.ts'

const base = process.env.BASE_PATH ?? ''

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				navbar: [
					{ title: 'Klados Handbook', to: '/handbook/vision-mission-principles/' },
					{ title: 'Roadmap', to: '/roadmap/' },
					{ title: 'Status', to: '/status/' },
					{ title: 'Decisions', to: '/decisions/' },
					{ title: 'Brand', to: '/brand/' },
					{
						title: 'GitHub',
						to: 'https://github.com/limitlesslearning/docs',
						external: true,
					},
				],
				sidebar: {
					'/handbook/': [
						{
							title: 'Foundations',
							collapsible: true,
							items: [
								{ title: '1. Front Matter', to: '/handbook/front-matter/' },
								{
									title: '2. Vision, Mission & Principles',
									to: '/handbook/vision-mission-principles/',
								},
								{ title: '3. Problems', to: '/handbook/problems/' },
								{ title: '4. Solution', to: '/handbook/solution/' },
							],
						},
						{
							title: 'Core Systems',
							collapsible: true,
							items: [
								{ title: '5. Knowledge Graph', to: '/handbook/knowledge-graph/' },
								{ title: '6. Content System', to: '/handbook/content-system/' },
								{
									title: '7. Learning Experience',
									to: '/handbook/learning-experience/',
								},
								{ title: '8. Assessment', to: '/handbook/assessment/' },
								{ title: '9. Credentials', to: '/handbook/credentials/' },
								{ title: '10. Verification & Integrity', to: '/handbook/verification/' },
							],
						},
						{
							title: 'Implementation & Scale',
							collapsible: true,
							items: [
								{ title: '11. Incentive & Economy', to: '/handbook/incentive-economy/' },
								{ title: '12. Technology Stack', to: '/handbook/technology-stack/' },
								{ title: '13. Project Structure', to: '/handbook/project-structure/' },
								{ title: '14. Phased Roadmap', to: '/handbook/roadmap-phases/' },
								{ title: '15. Governance', to: '/handbook/governance/' },
								{ title: '16. Risks & Mitigations', to: '/handbook/risks/' },
								{ title: '17. Legal & IP', to: '/handbook/legal-ip/' },
								{ title: '18. Impact & KPIs', to: '/handbook/impact-kpis/' },
								{ title: '19. Glossary', to: '/handbook/glossary/' },
								{ title: '20. Appendices', to: '/handbook/appendices/' },
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
						{ title: 'Decision log', to: '/decisions/' },
					],
					'/brand/': [
						{ title: 'Brand guide', to: '/brand/' },
						{ title: 'Using the logo', to: '/brand/usage/' },
						{ title: 'License note', to: '/brand/license/' },
					],
				},
				github: 'https://github.com/limitlesslearning/docs',
				logo: '/brand/mark-ink.svg',
				editLink: 'https://github.com/limitlesslearning/docs/edit/main/src/routes/',
				themeColor: {
					light: '#F4F6FB',
					dark: '#1F2A44',
				},
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
				title: SITE_NAME,
				description: SITE_DESCRIPTION,
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
