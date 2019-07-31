/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

const FooterLinks = props => (
  <ul
    sx={{
      background: props => (props.bg ? props.bg : `0`),
      borderColor: `ui.border`,
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      fontSize: 1,
      listStyle: `none`,
      m: 0,
      mb: props => (props.bottomMargin ? props.bottomMargin : 0),
      mt: 9,
      px: 6,
      py: 9,
      textAlign: `center`,
      width: `100%`,
      "& li": {
        display: `inline-block`,
        "&:after": {
          color: `text.secondary`,
          content: `"•"`,
          padding: 3,
        },
        "&:last-of-type:after": {
          content: `none`,
        },
        "& a": {
          color: `navigation.linkDefault`,
          borderColor: `transparent`,
          "&:hover": {
            color: `navigation.linkHover`,
            borderColor: `link.hoverBorder`,
          },
        },
      },
    }}
  >
    <li>
      <Link to="/accessibility-statement">Accessibility Statement</Link>
    </li>
    <li>
      <a href="/guidelines/logo/">Logo &amp; Assets</a>
    </li>
    <li>
      <a href="https://www.gatsbyjs.com">Gatsbyjs.com</a>
    </li>
  </ul>
)

export default FooterLinks
