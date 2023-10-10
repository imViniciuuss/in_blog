import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CMSRichText>

export const RichText = ({ ...props }: RichTextProps) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="text-black font-bold">{children}</b>
        ),
        p: ({ children }) => <p>{children}</p>,
        h2: ({ children }) => (
          <h2 className="font-bold text-2xl">{children}</h2>
        ),
        a: ({ children, href }) => (
          <a
            href={href}
            className="text-black font-bold italic hover:text-[#5E79F2]"
          >
            {children}
          </a>
        ),
      }}
    />
  )
}
