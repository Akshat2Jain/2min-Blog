import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../../config/data";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
import "./styles.css";
import { Link } from "react-router-dom";
import {
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      // console.log(blog.decription2)
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
          <p className="blog-desc2">{blog.description2}</p>
          <p className="blog-desc3">{blog.description3}</p>

          <h3 className="footer">{blog.footer}</h3>
          <div className="share-btn">
            <TwitterShareButton url={blog.url} title={blog.title}>
              <TwitterIcon size={50} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton url={blog.url} title={blog.title}>
              {" "}
              <WhatsappIcon size={50} round={true} />
            </WhatsappShareButton>

            <LinkedinShareButton url={blog.url} title={blog.title}>
              <LinkedinIcon size={50} round={true} />
            </LinkedinShareButton>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
