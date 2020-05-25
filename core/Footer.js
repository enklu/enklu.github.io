/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('doc1.html', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('doc1.html', this.props.language)}>
              Guides
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              API Reference
            </a>
          </div>
          <div>
            <h5>Social</h5>
            <a
              href="https://www.facebook.com/Enklu"
              target="_blank"
              rel="noreferrer noopener">
              Facebook
            </a>
						<a
              href="https://www.instagram.com/experience_enklu/"
              target="_blank"
              rel="noreferrer noopener">
              Instagram
            </a>
						<a
              href="https://www.linkedin.com/company/enklu"
              target="_blank"
              rel="noreferrer noopener">
              LinkedIn
            </a>
            <a
              href="https://twitter.com/experienceenklu"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div style={{marginRight: '9em'}}>
            <h5>Community</h5>
            <a href="https://github.com/enklu">GitHub</a>
						<a href="https://join.slack.com/t/enklucommunity/shared_invite/zt-ellfjrtd-mA3PiYeNjudv7KyOoNJllw"
							target="_blank">
							Slack
						</a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;