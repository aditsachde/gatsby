/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { Fragment } from "react"
import { keyframes } from "@emotion/core"
import { Link, StaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import { colors, mediaQueries } from "../utils/presets"
import logo from "../monogram.svg"
import { GraphQLIcon, ReactJSIcon } from "../assets/logos"
import FuturaParagraph from "../components/futura-paragraph"
import TechWithIcon from "../components/tech-with-icon"

const stripeColor = colors.purple[70]
const stripeSize = 15
const stripeBg = {
  backgroundColor: colors.purple[80],
  backgroundSize: `${rhythm(stripeSize)} ${rhythm(stripeSize)}`,
  backgroundImage: `linear-gradient(45deg, ${stripeColor} 25%, transparent 25%, transparent 50%, ${stripeColor} 50%, ${stripeColor} 75%, transparent 75%, transparent)`,
}
const lineAnimation = keyframes({
  to: { strokeDashoffset: 10 },
})

const Segment = ({ className, children }) => (
  <div
    className={`Segment ${className}`}
    css={{
      margin: `0 auto`,
      maxWidth: rhythm(32),
      textAlign: `center`,
    }}
  >
    {children}
  </div>
)

const SegmentTitle = ({ children }) => (
  <h2
    className="Segment-title"
    sx={{
      bg: `accent`,
      borderRadius: 1,
      bottom: t => `-${t.space[2]}`,
      color: `black`,
      display: `inline`,
      fontSize: 1,
      fontWeight: `normal`,
      letterSpacing: `tracked`,
      lineHeight: `solid`,
      margin: `0 auto`,
      position: `relative`,
      px: 3,
      py: 2,
      textTransform: `uppercase`,
      transform: `translateZ(0)`,
    }}
  >
    {children}
  </h2>
)

const VerticalLine = () => (
  <svg
    width="20"
    height="30"
    viewBox="0 0 20 30"
    css={{ margin: `0 auto`, display: `block` }}
  >
    <path
      d="M10 40 L10 -10"
      css={{
        stroke: colors.lilac,
        strokeWidth: `3`,
        strokeLinecap: `round`,
        strokeDasharray: `0.5 10`,
        animation: `${lineAnimation} 400ms linear infinite`,
      }}
    />
  </svg>
)

const box = {
  borderColor: `ui.border.subtle`,
  borderRadius: 2,
  borderStyle: `solid`,
  borderWidth: `1px`,
  px: 7,
  py: 5,
}

const borderAndBoxShadow = {
  bg: `white`,
  border: 0,
  borderRadius: 1,
  boxShadow: `raised`,
  transform: `translateZ(0)`,
  width: `100%`,
}

const SourceItems = ({ children }) => (
  <div
    sx={{
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `center`,
      ...box,
    }}
  >
    {children}
  </div>
)

const boxPadding = { py: 3, px: 4 }

const SourceItem = ({ children }) => (
  <div
    sx={{
      boxSizing: `border-box`,
      py: 4,
      px: 5,
      display: `flex`,
      [mediaQueries.xs]: {
        flex: `1 1 50%`,
      },
      [mediaQueries.sm]: {
        flex: `1 1 33%`,
        maxWidth: `33%`,
      },
    }}
  >
    <div
      sx={{
        ...borderAndBoxShadow,
        ...boxPadding,
        lineHeight: `dense`,
        textAlign: `left`,
      }}
    >
      {children}
    </div>
  </div>
)

const ItemTitle = ({ children }) => (
  <h3
    sx={{
      fontSize: 2,
      margin: 0,
      color: `card.color`,
    }}
  >
    {children}
  </h3>
)

const ItemDescription = ({ children }) => (
  <small
    sx={{
      color: `text.secondary`,
      display: `block`,
      fontFamily: `system`,
      fontSize: 1,
      lineHeight: `dense`,
    }}
  >
    {children}
  </small>
)

const ItemDescriptionLink = ({ to, children }) => (
  <Link css={{ "&&": { color: `purple.80` } }} to={to}>
    {children}
  </Link>
)

const Gatsby = () => (
  <div
    sx={{
      ...borderAndBoxShadow,
      p: 5,
      margin: `0 auto`,
      width: rhythm(5.5),
      height: rhythm(5.5),
      [mediaQueries.lg]: {
        width: rhythm(6),
        height: rhythm(6),
      },
    }}
  >
    <img
      src={logo}
      sx={{
        display: `inline-block`,
        height: t => t.space[8],
        margin: 0,
        verticalAlign: `middle`,
        width: `auto`,
        [mediaQueries.lg]: {
          height: t => t.space[9],
        },
      }}
      alt="Gatsby"
    />
    <ItemDescription>
      <small
        sx={{
          display: `block`,
          mt: 1,
        }}
      >
        powered by
      </small>
      <span sx={{ color: `gatsby` }}>
        <TechWithIcon icon={GraphQLIcon}>GraphQL</TechWithIcon>
      </span>
    </ItemDescription>
  </div>
)

const Diagram = () => (
  <StaticQuery
    query={graphql`
      query StaticHostsQuery {
        allStaticHostsYaml {
          edges {
            node {
              title
              url
            }
          }
        }
      }
    `}
    render={({ allStaticHostsYaml: { edges: staticHosts } }) => (
      <section
        className="Diagram"
        sx={{
          flex: `1 1 100%`,
          fontFamily: `header`,
          p: 6,
          textAlign: `center`,
        }}
      >
        <h1
          sx={{
            fontWeight: 1,
            mb: 6,
            mt: 0,
            [mediaQueries.md]: {
              mt: 6,
            },
          }}
        >
          How Gatsby works
        </h1>
        <div sx={{ maxWidth: rhythm(20), mt: 0, mx: `auto`, mb: 9 }}>
          <FuturaParagraph>
            Pull data from <em>anywhere</em>
          </FuturaParagraph>
        </div>

        <Segment className="Source">
          <SegmentTitle>Data Sources</SegmentTitle>
          <SourceItems>
            <SourceItem>
              <ItemTitle>CMSs</ItemTitle>
              <ItemDescription>
                Contentful, Drupal, WordPress, etc.
              </ItemDescription>
            </SourceItem>
            <SourceItem>
              <ItemTitle>Markdown</ItemTitle>
              <ItemDescription>Documentation, Posts, etc.</ItemDescription>
            </SourceItem>
            <SourceItem>
              <ItemTitle>Data</ItemTitle>
              <ItemDescription>
                APIs, Databases, YAML, JSON, CSV, etc.
              </ItemDescription>
            </SourceItem>
          </SourceItems>
        </Segment>

        <Segment className="Build">
          <VerticalLine />
          <SegmentTitle>Build</SegmentTitle>
          <div
            sx={{
              ...box,
              ...stripeBg,
              py: 0,
            }}
          >
            <VerticalLine />
            <Gatsby />
            <VerticalLine />
            <div
              sx={{
                ...borderAndBoxShadow,
                ...boxPadding,
                display: `inline-block`,
                py: 3,
                width: `auto`,
              }}
            >
              <ItemDescription>
                HTML &middot; CSS &middot;
                {` `}
                <TechWithIcon icon={ReactJSIcon} height="1.1em">
                  React
                </TechWithIcon>
              </ItemDescription>
            </div>
            <VerticalLine />
          </div>
        </Segment>

        <Segment className="Deploy">
          <VerticalLine />
          <SegmentTitle>Deploy</SegmentTitle>
          <div
            sx={{
              ...box,
              pb: 5,
            }}
          >
            <ItemTitle>Static Web Host</ItemTitle>
            <ItemDescription>
              {staticHosts.map(({ node: staticHost }, index) => (
                <Fragment key={staticHost.url}>
                  {index > 0 && `, `}
                  <ItemDescriptionLink to={staticHost.url}>
                    {staticHost.title}
                  </ItemDescriptionLink>
                </Fragment>
              ))}
              {` `}& many more
            </ItemDescription>
          </div>
        </Segment>
      </section>
    )}
  />
)

export default Diagram
