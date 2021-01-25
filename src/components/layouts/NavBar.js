import * as React from "react"
import { AppBar, Toolbar } from "@material-ui/core"

const navLinks = [
    { title: `about us`, path: `/about-us` },
    { title: `product`, path: `/product` },
    { title: `blog`, path: `/blog` },
    { title: `contact`, path: `/contact` },
    { title: `faq`, path: `/faq` },
]

const NavBar = () => {
    return (
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
    )
}
export default NavBar;