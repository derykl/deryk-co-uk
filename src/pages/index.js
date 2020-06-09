import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Image
      fixed={data.photo.childImageSharp.fixed}
      alt="My photo"
      style={{float: "left", marginRight: "1rem", marginBottom: "1rem"}}
    />
    <p>
      I am Deryk Lister, an IT professional and enthusiast living in Ulverston,
      Cumbria, UK.
    </p>
    <p>
      I love everything computer and gadget related, and the area around which
      I'm currently typing is sprinkled with a few different smartphones,
      tablets and laptops.  I am also quite a keen photographer, mostly focusing
      (pun not intended) on whatever catches my eye on a walk.
    </p>
    <p>
      Fortunate enough to be born in the region of the Lake District, Cumbria, I
      am surrounded by stunning natural beauty from the small festival town of
      Ulverston through to the national park itself and its vast countryside,
      lakes and mountains, just a short drive away.  I like to make the most of
      this  privilege with walks and camping trips.  I am pleased to say that
      since 2018 I do not contribute to local pollution when driving there,
      having  switched to fully electric.
    </p>
    <p>
      It's not all serious, but I'm very serious about my real ales and take
      great enjoyment in visiting beer festivals!
    </p>
    <h1>The Professional Side</h1>
    <p>
      My current title is <em>Systems Analyst & Web Designer</em>,
      working in the IT department of local LED technology manufacturer
      {` `}<a href="https://www.leds.co.uk">Marl International Ltd</a>.
    </p>
    <p>
      Since first being let loose on a computer at age 5 (in 1987), I
      immediately wanted to know how everything works, and much of my youth was
      spent tinkering with operating systems (though I of course had a healthy
      interest in a few games as well!), pulling them apart, and later building
      my own.  This has  never changed and I remain passionate in every aspect
      of computing and the internet.
    </p>
    <p>
      I was recruited by Marl with the above title in 2007 and have remained
      there to this day, effectively doing "a bit of everything" IT related.
      With this comes constant new challenges and new things to learn which
      I very much enjoy.
    </p>
    <p>
      At the time of writing I am completely rebuilding the company website
      using <a href="https://gatsbyjs.org">GatsbyJS</a>, a static site building
      framework (typically these days known as a
      {` `}<a href="https://jamstack.org">JAMstack</a>) and which uses
      {` `}<a href="https://reactjs.org">React</a> as its underlying technology.
    </p>
    <p>
      I have found this resurgence of static site generation very interesting.
      Not long after first starting at Marl and using Dreamweaver to create
      static websites, things shifted to server-side generation.  I self-taught
      PHP and made a custom built server-side generated website from that,
      then as complexity increased and the focus rightly shifted to security
      it became more prudent to use existing frameworks and Content Management
      Systems (in the case of Marl at the time, Concrete5).
    </p>
    <p>
      Now we have come full circle - mini revolutions like the creation of
      NodeJS and frameworks like React and Angular have completely changed how
      websites can be built, often serving as apps at the same time.  The
      increasing importance of performance for user experience and Search Engine
      Optimisation along with the security and simplified hosting benefits of
      delivering a static website have made it a great move for sites that don't
      require much in the way of dynamic content.
    </p>
    <p>
      Even then, dynamic content is not impossible!  You can still make a
      Javascript web form and submit it to a NodeJS based server, for example,
      to forward submissions to email. Or you can communicate with a server
      (be it NodeJS, PHP, etc) using the Fetch API.  Or you can add comments
      to a static blog using a third party service like Disqus.
    </p>
    <p>
      The advantage will be one of the fastest possible websites in the world.
      This greatly enhances user experience (especially on mobile networks)
      and with Gatsby it's even very simple to make the site a Progressive Web
      App, allowing it to be added like an app on any smartphone or tablet and
      launch with a simplified browser UI and the ability to continue browsing
      the site while offline.  Increased speed and better user experience mean
      more engagement, a better ranking on Google, and this all translates to
      more enquiries and more sales.
    </p>
    <h1>About this site</h1>
    <p>
      As if I haven't written enough about web development with GatsbyJS - I
      enjoyed it so much I decided to write my own website with it.  This is
      quite something - my site has been blank for a while (I've had the domain
      since about 2000 thanks to the spelling of my name) as even the keenest
      of workers in a particular field usually wants to do something else by the
      time they finish work.  If you're here in Google Chrome, go to Developer
      Tools, Audits, and run the Lighthouse test.  Enjoy the 100/100 scores -
      you don't see them often!
    </p>
    <p>
      It's a bit simple at the moment and shall we say not really a showcase of
      design talent at this time (more a showcase of learning and being
      competent in the latest web technologies), I just wanted to get something
      up and running and tweak it when I have the spare time and energy.  Some
      photos will spruce it up a bit later!
    </p>
    <p>
      If you're browsing from Chrome on desktop or Android, it might have
      already offered to "install" my website as an app with a small hint
      built into the browser.  On desktop, there's a little + symbol in the
      address bar; on Android it tends to put a small message at the bottom of
      the screen.  On iOS there's no prompt, but you can go to the share menu
      and add it to the home screen, and see how it opens up like any other app.
      On Android, the header colour blends into the system's status bar.
      Once I separate all this waffle into pages, they will be navigable through
      the app even if you lose your signal while it's open.
    </p>
    <h1>Disclaimer</h1>
    <p>
      This is my personal website and is not affiliated in any way with my
      employer Marl International Ltd.  Any opinions expressed are my own and
      do not necessarily represent those of Marl International Ltd.
    </p>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    photo: file(relativePath: { eq: "photo.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
