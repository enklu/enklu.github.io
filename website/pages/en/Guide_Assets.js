const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Assets(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const assetLinks = [
    {
			content:`[Upload 3D models, image assets, and audio files.](${siteConfig.baseUrl}docs/doc1.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc1.html`,
			title: `[Import Your Own Assets](${siteConfig.baseUrl}docs/doc1.html)`
    },
    {
			content:`[Using Enklu Cloud's public asset library.](${siteConfig.baseUrl}docs/doc1.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc1.html`,
			title: `[Public Assets](${siteConfig.baseUrl}docs/doc1.html)`
    },
    {
			content:`[Using assets with animations in Enklu Cloud.](${siteConfig.baseUrl}docs/doc1.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc1.html`,
			title: `[Adding Animations from Unity](${siteConfig.baseUrl}docs/doc1.html)`
    },
		{
			content:`["What are the recommended number of polygons for assets?"](${siteConfig.baseUrl}docs/doc1.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc1.html`,
			title: `[Scene Complexity Recommendations](${siteConfig.baseUrl}docs/doc1.html)`
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <div className="postFlex">
            <div className="postLogo">
              <img src={`${baseUrl}img/undraw_3d_modeling_h60h.svg`}/>
            </div>
            <div>
              <header className="postHeader">
                <h1>Assets</h1>
              </header>
              <p>Asset creation, management, and placement.</p>
            </div>
          </div>  
          <GridBlock contents={assetLinks} layout="fourColumn" align="center"/>
        </div>
      </Container>
    </div>
  );
}

module.exports = Assets;