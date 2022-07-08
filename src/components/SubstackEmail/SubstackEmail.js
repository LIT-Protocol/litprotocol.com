import { useState } from 'react'

const SubstackEmail = () => {

  return (
    <div id="entry">
      <div id="main" className="main typography">
        <div className="embed-page ">
          <div className="embed-page-inner">
            <a href="https://litproject.substack.com/" target="_blank" rel="noreferrer"><img
              src="https://substackcdn.com/image/fetch/w_170,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fb39820b7-9a5b-42ac-ae1b-31b91990914f_250x250.png"
              alt="Logo" className="publication-logo"/></a>
            <h1 className="publication-name">
              <a href="https://litproject.substack.com/" target="_blank" rel="noreferrer">
                <span style={{ display: "inline-block"}} className="balance-text visible">Lit Newsletter </span>
              </a>
            </h1>
            <p className="publication-tagline">
              <span style={{display: "inline-block"}}  className="balance-text visible">Building the decentralized web</span>
            </p>
            <div className="subscribe-widget ">
              <form action="/api/v1/free?nojs=true" method="post" className="form " noValidate="">
                <input type="hidden" name="first_url" value="https://litproject.substack.com/publish?utm_source=user-menu"/>
                <input type="hidden" name="first_referrer" value="https://substack.com/"/>
                <input type="hidden" name="current_url" value="https://litproject.substack.com/embed"/><input
                type="hidden" name="current_referrer" value="http://localhost:3000/"/>
                <input type="hidden" name="referral_code"/>
                <input type="hidden" name="source" value="embed"/>
                <input type="hidden" name="referring_pub_id"/>
                <input type="hidden" name="additional_referring_pub_ids"/>
                <div className="sideBySideWrap">
                  <input type="email" name="email" placeholder="Type your email…"/>
                  <button className="button rightButton  primary subscribe-btn" type="submit" tabIndex="0">
                    <b className="button-text ">Subscribe</b>
                  </button>
                </div>
                <div id="error-container"></div>
                <div className="subtle-help-text below-input"></div>
              </form>
            </div>
          </div>
          <a href="https://substack.com/?utm_source=embed&amp;utm_content=litproject" target="_blank" rel="noreferrer">
            <img src="https://substackcdn.com/image/fetch/w_200,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Fsubstack_wordmark.black.png"
              alt="Substack" className="substack-watermark"/>
          </a>
        </div>
      </div>
      <div style={{transform: "translateY(0px)"}}
           className="tw-fixed tw-bottom-2.5 tw-right-2.5 tw-left-2.5 md:tw-left-auto md:tw-bottom-4 md:tw-right-4 md:tw-pl-4 tw-z-10"></div>
      <div></div>
    </div>
  )
}

export default SubstackEmail;