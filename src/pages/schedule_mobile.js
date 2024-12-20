import React from "react";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { ScheduleSessionCardList } from "../components/ScheduleSessionCardList";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import "../../src/styles/assets/css/style.css";
import "../../src/styles/assets/css/style2.css";
import "../../src/styles/assets/css/style.css?23";
import "../../src/styles/assets/css/responsive.css";

export default ({ data }) => (

  <div>
  <Helmet>
  <title>Session Schedule | REFACTR.TECH 2024</title>
  <meta
    name="description"
    content="REFACTR.TECH features over 50 sessions and 4 keynotes, with topics from Gatsby.js to Machine Learning to Engineering Leadership."
  />

  {/* <!-- Open Graph data --> */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="REFACTR.TECH" />
  <meta property="og:url" content="https://www.refactr.tech/" />
  <meta
    property="og:title"
    content="Sessions | REFACTR.TECH 2024"
  />
  <meta
    property="og:description"
    content="REFACTR.TECH features 20+ sessions and 3 keynotes, with topics from Gatsby.js to Machine Learning to Engineering Leadership."
  />
  <meta 
      name="keywords" 
      content="Atlanta, technology, conference, diversity, inclusion, accessibility, software, frontend, fullstack, web development, leadership, career, javascript, react, angular, serverless, machine learning, product, ux, ui, design, social impact" 
  />

  <meta
    property="og:image"
    content="https://refactr.tech/img/conference/marketing_header.png"
  />
  <meta
    property="og:image:secure_url"
    content="https://refactr.tech/img/conference/marketing_header.png"
  />
  <meta property="og:image:width" content="500" />
  <meta property="og:image:height" content="260" />

  <meta name="msapplication-TileImage" content="https://refactr.tech/img/conference/2020-tile.png"/>

  {/* <!-- Social sharing meta --> */}
  <meta property="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@RefactrTech" />
  <meta
    name="twitter:title"
    content="Sessions | REFACTR.TECH 2024"
  />
  <meta
    name="twitter:description"
    content="REFACTR.TECH features 20+ sessions and 3 keynotes, with topics from Gatsby.js to Machine Learning to Engineering Leadership."
  />
  <meta name="twitter:domain" content="https://refactr.tech" />
  <meta
    name="twitter:image"
    content="https://refactr.tech/img/conference/marketing_header.png"
  />
  <meta name="twitter:label1" content="Date" />
  <meta name="twitter:data1" content="" />
  <meta name="twitter:label2" content="Location" />
  <meta name="twitter:data2" content="Atlanta, GA" />

  {/* <!-- Schema.org markup for Google+ --> */}
  <meta itemprop="name" content="Sessions | REFACTR.TECH 2024" />
  <meta
    itemprop="description"
    content="REFACTR.TECH features 20+ sessions and 3 keynotes, with topics from Gatsby.js to Machine Learning to Engineering Leadership."
  />
  <meta itemprop="image" content="/img/conference/marketing_header.png" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
</Helmet>
    {/*Main Container Start Here*/}
    <div className="main-container">
      {/*Header Start Here*/}
      <NavigationBar whiteText />
      {/*Header End Here*/}
      {/*About Us Area Start Here*/}
      <div className="about-us-area pad-head bg-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="section-title text-center">
                  <h2>Events</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>|</li>
                  <li><a href="/schedule">Schedule</a></li>
                  <li>|</li>
                  <li><a href="/workshops">Workshops</a></li>
                  <li>|</li>
                  <li><a href="/careerfair">Career Fair</a></li>
                  <li>|</li>
                  <li>Sessions</li>
                </ol>
              </div>
            </div>
            {/* /col*/}
          </div>
          {/* /row*/}
        </div>
        {/*/ container*/}
      </div>
      {/*About Us Area End Here*/}


      {/* Topics Section */}
      <section className="topics-section-two">
      {/* <span className="float-text">Session Topics</span> */}
      <div className="anim-icons">
        <span className="icon icon-circle-3" />
        <span className="icon icon-circle-5" />
      </div>
      <div className="auto-container">
        <div className="sec-title">
          <h2>Schedule</h2>
          <p>
            <span style={{ color: "#C41579", fontWeight: "bold" }}>
              New!
            </span>
            &nbsp;&nbsp;Check out our sessions in our mobile-friendly schedule.
          </p>

          <p><a href="/schedule">See desktop version</a></p>
        </div>

        {/*Event Topics*/}
        <div className="event-topics-tabs">
          <div className="tabs-box">
            {/*Tab Btns*/}
            <ul className="tab-btns tab-buttons clearfix">



              <Link
              id="test"
              to="/schedule_mobile/#Saturday"
              rel="noreferrer noopener"
              className="test"
              >
                <li data-tab="#tab1" className="tab-btn">
                <div>
                      August 14
                  </div>
                </li>
              </Link>

              {/*<Link
              id="test"
              to="/sessions/#Tuesday"
              rel="noreferrer noopener"
              className="test"
              >
                <li data-tab="#tab1" className="tab-btn">
                <div>
                        Tuesday
                  </div>
                </li>
              </Link>*/}

              <Link
                    to="/schedule_mobile/#Wednesday"
                    rel="noreferrer noopener"
                  >
                <li data-tab="#tab1" className="tab-btn">
                  <div>
                      August 18
                  </div>
                </li>
              </Link>


              <Link
                    to="/schedule_mobile/#Thursday"
                    rel="noreferrer noopener"
                  >
                <li data-tab="#tab1" className="tab-btn">
                  <div>
                  August 19
                  </div>
                </li>
              </Link>

              <Link
                    to="/schedule_mobile/#Friday"
                    rel="noreferrer noopener"
                  >
                <li data-tab="#tab1" className="tab-btn">
                  <div>
                   August 20
                  </div>
                </li>
              </Link>


            </ul>
          </div>
        </div>
        {/*End Product Info Tabs*/}
      </div>
    </section>






      <ScheduleSessionCardList items={data.allAirtable.edges} showBuyTickets={false}  soldOut={false}/>

      {/*Footer Area Start Here*/}
      <Footer />
      {/*Footer Area End Here*/}
    </div>
  </div>
);

export const all_sessions = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Sessions" } }
      sort: { fields: data___start_time }
      ) {
      edges {
        node {
          fields {
            slug
          }
          data {
            Abstract
            speaker_display_name
            url
            Track
            title
            speaker_url
            date_friendly
            Day
            Duration
            speaker_pic {
              thumbnails {
                large {
                  url
                }
              }
            }
            Speakers {
              data {
                speaker_name
                headshot {
                  localFiles {
                    childImageSharp {
                      fluid(maxWidth: 512, maxHeight:512) {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
                }
                role
                company
                speaker_anchor
              }
            }
          }
        }
      }
    }
  }
`;
