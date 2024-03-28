import type { MDXComponents } from 'mdx/types';
import { Noto_Sans, Space_Grotesk } from 'next/font/google';
import Image, { ImageProps } from 'next/image';
import * as React from 'react';

const notoSans = Noto_Sans({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1
        className="font-medium capitalize text-grey-gradient !text-[2rem]"
        style={{
          fontSize: '32px',
          marginTop: '40px',
          marginBottom: '40px',
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className="font-medium font-[#EEE]"
        style={{
          fontSize: '24px',
          marginTop: '12px',
          marginBottom: '12px',
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="font-medium font-[#EEE]"
        style={{
          fontSize: '18px',
          marginBottom: '12px',
        }}
      >
        {children}
      </h3>
    ),
    // h4: ({ children }) => <h4 className="text-[2rem]">{children}</h4>,
    // h5: ({ children }) => <h5 className="text-[2rem]">{children}</h5>,
    // h6: ({ children }) => <h6 className="text-[2rem]">{children}</h6>,
    p: ({ children }) => (
      <p
        className="text-base font-normal text-[#868991] leading-7"
        style={{
          letterSpacing: '-0.16px',
          fontFamily: notoSans.style.fontFamily,
          marginBottom: '24px',
        }}
      >
        {children}
      </p>
    ),
    table: ({ children }) => <table className="table">{children}</table>,
    thead: ({ children }) => (
      <thead
        className="text-[#5E6773] font-normal"
        style={{
          paddingBottom: '12px'
        }}
      >
        {children}
      </thead>
    ),
    tr: ({ children }) => (
      <tr style={{
        borderRadius: '8px',
        overflow: 'hidden',
        // borderBottom: '12px solid #101216',
      }}>
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th
        className="font-normal"
        style={{
          padding: '16px 12px',
          fontFamily: spaceGrotesk.style.fontFamily,
          letterSpacing: '-0.32px',
          backgroundColor: '#0d110f',
          minWidth: 180,
          textAlign: 'left',
        }}
      >
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td
        className="font-normal text-[#9FA2AC]"
        style={{
          padding: '16px 12px',
          fontFamily: notoSans.style.fontFamily,
          letterSpacing: '-0.16px',
          backgroundColor: '#0d110f',
          // borderBottom: '12px solid #101216',
          minWidth: 180,
        }}
      >
        {children}
      </td>
    ),
    li: ({ children }) => <li style={{ fontSize: '14px' }}>{children}</li>,
    a: (props) => (
      <a
        className=" text-base font-semibold leading-7"
        style={{
          color: '#25D695',
          fontFamily: notoSans.style.fontFamily,
        }}
        {...props}
      >
        {props.children}
      </a>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
        alt={props.alt || ''}
      />
    ),
    pre: ({ children }) => (
      <pre
        className=""
        style={{
          fontSize: '14px',
          marginTop: '12px',
          marginBottom: '12px',
        }}
      >
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code
        className="text-[#9FA2AC] text-sm font-normal"
        style={{
          fontSize: '14px',
          letterSpacing: '-0.14px',
        }}
      >
        {children}
      </code>
    ),
  }
}
