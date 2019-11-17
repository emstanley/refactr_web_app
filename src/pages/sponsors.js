import React from "react";
import { graphql } from "gatsby";

import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { Helmet } from "react-helmet";
import {SponsorCardList} from "../components/SponsorCardList";

export default ({ data }) => {
    return (
        <div>
            <Helmet>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>Sponsors | REFACTR.TECH</title>
                <meta name="author" content="iThemesLab" />
                <meta name="description" content="" />
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

                {/*Sponsors Area Start Here*/}
                <div className="about-us-area pad-head bg-about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about-content">
                                    <div className="section-title text-center">
                                        <h2>Sponsors</h2>
                                    </div>
                                    <ol className="breadcrumb">
                                        <li>
                                            <a href="/">Home</a>
                                        </li>
                                        <li>|</li>
                                        <li>Sponsors</li>
                                    </ol>
                                </div>
                            </div>
                            {/* /col*/}
                        </div>
                        {/* /row*/}
                    </div>
                    {/*/ container*/}
                </div>
                {/*Sponsors Area End Here*/}

                {/*Whos Speaking Area Start Here*/}
                <div className="whos-speaking-area pad100">
                    <div className="container">
                        <div className="row mb50">
                            <SponsorCardList items={data.allAirtable.edges} />
                        </div>
                    </div>
                </div>
                {/*Whos Speaking Area End Here*/}

                {/*Footer Area Start Here*/}
                <Footer />
                {/*Footer Area End Here*/}
            </div>
        </div>
    )
}

export const sponsorPageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Sponsors" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          data {
            company_name
            url
            tier
            logo {
                filename
            }
          }
        }
      }
    }
  }
`;