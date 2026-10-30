import { notFound } from 'next/navigation'
import { clients } from '@/lib/content'
import { slugFor } from '@/lib/slug'
import CaseDetail from '@/components/CaseDetail'

export function generateStaticParams() {
  return clients.cases.map((c) => ({ slug: slugFor(c) }))
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string }
}) {
  const index = clients.cases.findIndex((c) => slugFor(c) === params.slug)
  if (index === -1) notFound()

  return <CaseDetail index={index} />
}
