import "./Footer.scss";
function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer__holder">
          <div className="Footer__first">
            <div className="Footer__about">
              <a className="Footer__logo" href="/">
                Logo
              </a>
              <p className="Footer__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                risus vulputate.
              </p>
              <div className="Footer__social">
                <a href="/">
                  <img src="/footer_icons/fb.svg" alt="fb-icon" />
                </a>
                <a href="/">
                  <img src="/footer_icons/insta.svg" alt="instagram-icon" />
                </a>
                <a href="/">
                  <img src="/footer_icons/tw.svg" alt="tweeter-icon" />
                </a>
                <a href="/">
                  <img src="/footer_icons/in.svg" alt="in-icon" />
                </a>
              </div>
            </div>
            <div className="Footer__company">
              <h3>Company</h3>
              <a href="/">Crypto widgets</a>
              <a href="/">Crypto currency</a>
              <a href="/">Bitcoin guid </a>
              <a href="/">contact us</a>
              <a href="/">service</a>
            </div>
            <div className="Footer__navigate">
              <h3>Navigate</h3>
              <a href="/">Roadmap</a>
              <a href="/">video</a>
              <a href="/">Team</a>
              <a href="/">C oin disttibution</a>
              <a href="/">Media</a>
            </div>
            <div className="Footer__products">
              <h3>products</h3>
              <a href="/">Hardware</a>
              <a href="/">Mining</a>
              <a href="/">Terade calls</a>
              <a href="/">Software</a>
              <a href="/">media</a>
            </div>
            <div className="Footer__contacts">
              <h3>contact us</h3>
              <a href="/">Mailing address</a>
              <a href="/">Suite 1100</a>
              <a href="/">0197876236</a>
              <a href="/">gmail</a>
              <a href="/"></a>
            </div>
          </div>
          <div className="Footer__second">
            <p>Copyright © 2021 Brandoxide. All rights reserved.</p>
            <a href="/">Terms & Agreements</a>
            <a href="/">Privecy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
