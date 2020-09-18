/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Contact(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const contactLinks = [
    {
      content: `Let's talk.  Send us an email and we will get back to you as soon as we can. We are here to help. <br> [**contact@enklu.com**](mailto:contact@enklu.com)
				<div style='display: flex; justify-content: space-evenly'>
					<a href="mailto:contact@enklu.com" target="_blank" style="margin: 0 8px;"><img src="/img/icon_mail.svg" style='height:50px'></a>
				</div>`,
      title: 'Send Us an Email',
    },
    {
      content: `Engage with the Enklu Team and other users in our [**Community Slack**](https://join.slack.com/t/enklucommunity/shared_invite/zt-ellfjrtd-mA3PiYeNjudv7KyOoNJllw)..
				<div style='display: flex; justify-content: space-evenly;'>
					<a href="https://join.slack.com/t/enklucommunity/shared_invite/zt-ellfjrtd-mA3PiYeNjudv7KyOoNJllw" target="_blank" style="margin: 0 8px;"><img src="/img/social_slack.svg" style='height:50px'></a>
				</div>`,
      title: 'Join Our Community',
    },
    {
      content: `Follow Enklu on social media to stay up to date with our current projects and Enklu Cloud's latest features.
				<div style='display: flex; justify-content: space-evenly'>
					<a href="https://www.facebook.com/Enklu" target="_blank" style="margin: 0 8px;"><img src="/img/social_facebook.svg" style='height:50px'></a>
					<a href="https://www.instagram.com/experience_enklu/" target="_blank"  style="margin: 0 8px;"><img src="/img/social_instagram.svg" style='height:50px'></a>
					<a href="https://www.linkedin.com/company/enklu" target="_blank" style="margin: 0 8px;"><img src="/img/social_linkedin.svg" style='height:50px'></a>
					<a href="https://twitter.com/experienceenklu" target="_blank" style="margin: 0 8px;"><img src="/img/social_twitter.svg" style='height:50px'></a>
				</div>`,
      title: 'Stay Connected',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Contact Us</h1>
          </header>
          <p>Don't be a stranger.  Whether you need help or just want to chat, Enklu is here to support you.</p>
          <GridBlock contents={contactLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Contact;
