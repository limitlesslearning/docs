import type { EntryGenerator, PageLoad } from './$types'

/** Old Platform Bible slugs, kept so /bible/… can be prerendered as redirect pages. */
const slugs = [
	'',
	'appendices',
	'assessment',
	'content-system',
	'credentials',
	'front-matter',
	'glossary',
	'governance',
	'impact-kpis',
	'incentive-economy',
	'knowledge-graph',
	'learning-experience',
	'legal-ip',
	'problems',
	'project-structure',
	'risks',
	'roadmap-phases',
	'solution',
	'technology-stack',
	'verification',
	'vision-mission-principles',
] as const

export const entries: EntryGenerator = () => slugs.map((path) => ({ path }))

export const prerender = true
export const trailingSlash = 'always' as const

export const load: PageLoad = ({ params }) => {
	const path = params.path?.replace(/\/+$/, '') ?? ''
	const to = path ? `/handbook/${path}/` : '/handbook/vision-mission-principles/'
	return { to }
}
