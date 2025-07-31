import Link from 'next/link'
import Image from 'next/image'
import { highlight } from 'sugar-high'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}


export function CustomMarkdown({ source, components: customComponents = {} }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        ...customComponents,
        // Override specific components for react-markdown
        a: ({ href, children, ...props }) => {
          if (!href) return <a {...props}>{children}</a>
          if (href.startsWith('/')) {
            return <Link href={href}>{children}</Link>
          }
          if (href.startsWith('#')) {
            return <a href={href} {...props}>{children}</a>
          }
          return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
        },
        img: ({ src, alt, ...props }) => {
          if (!src) return null
          return (
            <Image
              src={src}
              alt={alt || ''}
              className="rounded-lg"
              width={800}
              height={400}
              style={{ width: '100%', height: 'auto' }}
            />
          )
        },
        code: ({ children, className, ...props }) => {
          const match = /language-(\w+)/.exec(className || '')
          if (match) {
            const codeHTML = highlight(String(children).replace(/\n$/, ''))
            return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
          }
          return <code className={className} {...props}>{children}</code>
        },
      }}
    >
      {source}
    </ReactMarkdown>
  )
}
