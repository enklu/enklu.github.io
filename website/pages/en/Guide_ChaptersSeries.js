const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function ChaptersSeries(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const chaptersSeriesLinks = [
    {
			content:`[Learn how to use basic hierarchy and transform tools](${siteConfig.baseUrl}docs/doc1.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc1.html`,
			title: `[Chapter 1](${siteConfig.baseUrl}docs/doc1.html)`
    },
    {
			content:`[Build a small scene using transform tools](${siteConfig.baseUrl}docs/doc1.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc1.html`,
			title: `[Chapter 2](${siteConfig.baseUrl}docs/doc1.html)`
    },
    {
			content:`[Add lighting and effects into a scene.](${siteConfig.baseUrl}docs/doc1.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc1.html`,
			title: `[Chapter 3](${siteConfig.baseUrl}docs/doc1.html)`
    },
		{
			content:`[Learn how to add user interactions to a scene.](${siteConfig.baseUrl}docs/doc1.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc1.html`,
			title: `[Chapter 4](${siteConfig.baseUrl}docs/doc1.html)`
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <div className="postFlex">
            <div className="postLogo">
              <img src={`${baseUrl}img/undraw_setup.svg`}/>
            </div>
            <div>
              <header className="postHeader">
                <h1>Chapters Series</h1>
              </header>
              <p>Tutorial guides for example scenes.</p>
            </div>
          </div>  
          <GridBlock contents={chaptersSeriesLinks} layout="fourColumn" align="center"/>
        </div>
      </Container>
    </div>
  );
}

module.exports = ChaptersSeries;