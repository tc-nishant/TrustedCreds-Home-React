import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import IconGroup from '../components/icon-group'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>TrustedCreds Home</title>
        <meta property="og:title" content="TrustedCreds Home" />
      </Helmet>
      <section className="home-hero">
        <div className="home-menu">
          <div className="home-desktop-navigation">
            <nav className="home-centered">
              <div className="home-left">
                <div className="home-links"></div>
                <span className="home-text">TrustedCreds</span>
              </div>
              <div className="home-left1">
                <div className="home-links1">
                  <span className="home-text001 Link">For Individuals</span>
                  <span className="home-text002 Link">For Organizations</span>
                  <span className="home-text003 Link">Contact Us</span>
                </div>
              </div>
              <div className="home-right">
                <span className="home-sign-in Link">Sign in</span>
                <div className="home-get-started">
                  <span className="home-text004">Get started</span>
                </div>
                <div id="open-mobile-menu" className="home-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/playground_assets/pastedimage-yxbd.svg"
                    className="home-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <DangerousHTML
              html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
            ></DangerousHTML>
          </div>
        </div>
        <header className="home-header">
          <h1 className="home-text005">
            Background Checks - Instant &amp; Trusted
          </h1>
          <p className="home-text006">
            Trusted Credentials - Private &amp; Verifiable.
          </p>
          <div className="home-get-started1">
            <span className="home-text007">Get started</span>
          </div>
        </header>
      </section>
      <section className="home-how-it-works-for-indivs">
        <div className="home-centered-container">
          <div className="home-heading">
            <span className="home-text008">
              How it works - for Individuals.
            </span>
            <span className="home-text009 title">
              <span className="home-text010"> Sharing Credentials is now </span>
              <span>Easier </span>
              <span>
                and
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Safer</span>
              <span>.</span>
              <br></br>
            </span>
          </div>
          <div className="home-container1"></div>
          <div className="home-category">
            <div className="home-headng">
              <span className="home-text016">1:  SignUp and Activate</span>
              <span className="home-text017">
                <span className="home-text018">Claim your </span>
                <span className="home-text019">
                  decentralised
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text020">Identity</span>
                <span className="home-text021">,</span>
                <span className="home-text022"> and </span>
                <span className="home-text023">Secure Wallet.</span>
                <br></br>
              </span>
              <div className="home-get-started2 template-button">
                <span className="home-text025">Get started</span>
              </div>
            </div>
            <div className="home-container2">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-k5xi.svg"
                className="home-pasted-image"
              />
            </div>
          </div>
          <div className="home-row">
            <div className="home-category1">
              <div className="home-headng1">
                <span className="home-text026">2:  Keep adding Creds</span>
                <span className="home-text027">
                  <span>
                    build an
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text029">Immutable</span>
                  <span> chain of your Credentials. </span>
                  <br></br>
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/playground_assets/identity-wallet-removebg-preview-1200w.png"
                className="home-pasted-image1"
              />
            </div>
            <div className="home-category2">
              <div className="home-headng2">
                <span className="home-text032">3:  Share Chain of Creds</span>
                <span className="home-text033">
                  <span className="home-text034">You</span>
                  <span> Control what you share.</span>
                  <br></br>
                </span>
              </div>
              <img
                alt="pastedImage"
                src="https://tcnetstorage.blob.core.windows.net/tcnetpublic/Decentralized_Identity_icon.svg"
                className="home-pasted-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-how-it-works-for-orgs">
        <div className="home-centered-container1">
          <div className="home-heading1">
            <span className="home-text037">
              How it works - For Organisations
            </span>
            <span className="home-text038 title">
              Background Verification - Trusted, Instant and Customisable.
            </span>
          </div>
          <div className="home-category3">
            <div className="home-headng3">
              <span className="home-text039">1:  Come Onboard</span>
              <span className="home-text040">
                we integrate with your SSO and HRMS. 
              </span>
              <div className="home-get-started3 template-button">
                <span className="home-text041">Get started</span>
              </div>
            </div>
            <div className="home-container3">
              <img
                alt="pastedImage"
                src="/playground_assets/hrms-sso-200w.png"
                className="home-pasted-image3"
              />
            </div>
          </div>
          <div className="home-row1">
            <div className="home-category4">
              <div className="home-headng4">
                <span className="home-text042">2: Contribute to Trust</span>
                <span className="home-text043">
                  <span>
                    Community of Organisations share Trusted Credentials.
                  </span>
                  <br></br>
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/playground_assets/ssl-certificate-chain-of-trust-feature-1200w.jpg"
                className="home-pasted-image4"
              />
            </div>
            <div className="home-category5">
              <div className="home-headng5">
                <span className="home-text046">3: Verify Instantly</span>
                <span className="home-text047">
                  <span>
                    Employees Instantly Share Credentials from Wallet.
                  </span>
                  <br></br>
                </span>
              </div>
              <img
                alt="pastedImage"
                src="https://images.unsplash.com/photo-1663789669038-ba180c8c155a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGNyZWRlbnRpYWx8ZW58MHx8fHwxNjcyMjQwODcy&amp;ixlib=rb-4.0.3&amp;w=1200"
                className="home-pasted-image5"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-quote-container">
        <div className="home-quote">
          <span className="home-message">
            “Be yourself; everyone else is already taken.”
          </span>
          <span className="home-quote1">— Oscal Wilde</span>
        </div>
      </section>
      <section className="home-banners">
        <div className="home-banner-manage">
          <div className="home-container4">
            <div className="home-left2">
              <span className="home-text050 sub-title">
                Individual&apos;s Registry of Trusted Credentials
              </span>
              <span className="home-text051 title">
                Individuals - Control your Identity
              </span>
              <span className="home-text052">
                <span>receive a Decentralised Identity.</span>
                <br></br>
                <br></br>
                <span>
                  Share Decentralised ID with Issuer (current Employer) or
                  Verifier (Future Employer).
                </span>
                <br></br>
                <br></br>
                <span>
                  Accept Credentials in your Secure Wallet, and control how much
                  to share with Verifying Org.
                </span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </span>
              <div className="home-get-started4 template-button">
                <span className="home-text064">Get started</span>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="pastedImage"
                src="/playground_assets/identity-wallet-removebg-preview-1200w.png"
                className="home-cards-image"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-advanced-analytics">
          <div className="home-centered-container2">
            <div className="home-image-container1">
              <img
                alt="pastedImage"
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fGNvbW11bml0eXxlbnwwfHx8fDE2NzIzOTU5Nzg&amp;ixlib=rb-4.0.3&amp;w=1200"
                className="home-cards-image1"
              />
            </div>
            <div className="home-right1">
              <span className="home-text065 sub-title">
                Evolution of Background Verification for Orgs.
              </span>
              <h2 className="home-text066 title">
                Enterprise  Verification Ecosystem
              </h2>
              <div className="home-category6">
                <span className="home-text067">Ecosystem</span>
                <span className="home-text068">
                  <span className="home-text069">
                    Credentials issued by one Org. are available for other Orgs.
                    - Online, Secure, and Distributed. 
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Unique Identifier of Employee links all Credentials -
                    Employment, Educational, among others.
                  </span>
                  <br></br>
                  <br></br>
                  <span>Transparent Lineage of Immutable Credentials.</span>
                  <br></br>
                  <br></br>
                  <span>Orgs. can design custom workflows.</span>
                  <br></br>
                </span>
                <span className="home-text080">Example -&gt;</span>
              </div>
              <div className="home-category7">
                <span className="home-text081">
                  Preserves Privacy, yet Instant
                </span>
                <span className="home-text082">
                  <span className="home-text083">
                    Employee shares the Unique Alphanumeric Identifier with
                    Org., to verify Credentials.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Verification Request can be Approved / Rejected Instantly by
                    Employee.
                  </span>
                  <br></br>
                  <br></br>
                  <span>Employee Controls What to Share. </span>
                  <br></br>
                  <br></br>
                  <span>
                    Lineage can be updated, but all modifications are
                    transparent.
                  </span>
                  <br></br>
                </span>
                <span className="home-text094">Example -&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-pricing">
        <div className="home-centered-container3">
          <div className="home-heading2">
            <span className="home-text095 title">
              <span>Priced for All</span>
              <br></br>
            </span>
          </div>
          <div className="home-cards">
            <div className="home-card">
              <span className="home-text098">Free</span>
              <span className="home-text099">Build Community</span>
              <div className="home-get-started5 template-button">
                <span className="home-text100">
                  <span>Start Free</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text103">What&apos;s included</span>
              <div className="home-bullet-points">
                <div className="home-point">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text104">Basic Checks</span>
                </div>
                <div className="home-point1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon2"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text105">Custom Workflows.</span>
                </div>
              </div>
            </div>
            <div className="home-card1">
              <span className="home-text106">Pay as you go</span>
              <span className="home-text107">Premium Features</span>
              <div className="home-get-started6 template-button">
                <span className="home-text108">
                  <span>Upgrade now</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text111">What&apos;s included</span>
              <div className="home-bullet-points1">
                <div className="home-point2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon4"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text112">Detailed Checks.</span>
                </div>
                <div className="home-point3">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon6"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text113">Custom Workflows.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <span className="home-text114">TrustedCreds</span>
        <span className="home-text115">
          © 2023 TrustedCreds, All Rights Reserved.
        </span>
        <IconGroup></IconGroup>
      </footer>
    </div>
  )
}

export default Home
