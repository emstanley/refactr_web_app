require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "REFACTR.TECH"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-DPQL2M21DH",
          "AW-854600055"],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true
        },
      },
    },{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/styles/assets/img/`
      }
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://tech.us19.list-manage.com/subscribe/post?u=5ae8995a4bf065a3c7cd6ad50&amp;id=e8f624f474`
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_KEY,
            tableName: `Speakers`,
            queryName: `speakers`,
            tableLinks: ["Sessions"],
            mapping: { headshot: `fileNode` }
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_KEY,
            tableName: `Sessions`,
            queryName: `sessions`,
            tableLinks: ["Speakers"]
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_KEY,
            tableName: `Sponsors`,
            queryName: `sponsors`,
            mapping: { sponsor_logo: `fileNode` }
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_KEY,
            tableName: `Team`,
            queryName: `team`,
            mapping: { member_headshot: `fileNode` }          
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_KEY,
            tableName: `PastSponsors`,
            queryName: `pastSponsors`,
            mapping: { sponsor_logo: `fileNode` }          
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_KEY,
            tableName: `FullSchedule`,
            queryName: `fullSchedule`,
            tableLinks: ["Speakers"],
            mapping: { meta_image: `fileNode` }          
          }
        ]
      }
    },{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "REFACTR.TECH",
        short_name: "REFACTR.TECH",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`
  ]
};
