import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div className="bio"> 
        <div className="profile-pic">
          <img src="https://ca.slack-edge.com/E017D49VC3F-W018GAHP2A1-e6d2d7ad1680-512" alt="" className="image--cover" />
        </div>
        <div>
          <h1>
            Hi, I'm Yask<span className="fancy">.</span>
          </h1>
          <h2>Software Engineer @Shopify.</h2>
          <SocialList />
        </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        .bio { 
          display: flex;
          align-items: center;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }
        .image--cover {
          width: 175px;
          height: 175px;
          border-radius: 50%;
        
          object-fit: cover;
          object-position: center left;
        }
        .profile-pic { 
          position: relative;
          right: 30px;
          bottom: 10px;
        }
        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
