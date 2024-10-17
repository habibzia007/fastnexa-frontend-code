import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import http from '../../http';
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import ContactUs from "../ContactUs.jsx";
import TechnologyStack from "../TechnologyStack.jsx";
import Banner from "../blog/Banner.jsx";

const BlogDetailPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        http.get(`/blog-api`)
            .then(response => {
                const blogItems = response.data.blogitems_api;
                const selectedBlog = blogItems.find((item) => item.id === parseInt(id));
                if (selectedBlog) {
                    setBlog(selectedBlog);
                } else {
                    setError("Blog not found");
                }
            })
            .catch(error => {
                console.error('Error fetching blog post:', error);
                setError("Failed to fetch blog data");
            });
    }, [id]);

    if (error) return <div className="text-red-500">{error}</div>;

    console.log(blog.blog_content);

    const customStyles = `
        .prose h1 strong,
        .prose h2 strong,
        .prose h3 strong,
        .prose h4 strong,
        .prose h5 strong,
        .prose h6 strong {
            line-height: 4rem;
        }
    `;

    console.log("this is all blog", blog)

    const { blog_title, blog_content, meta_title, meta_desc, meta_tags } = blog;

    return (
        <div>
            {/* Helmet for managing the head */}
            <Helmet>
                <title>{meta_title || blog_title || 'Blog Detail'}</title>
                <meta name="description" content={meta_desc || 'Read our latest blog post on various topics.'} />
                <meta name="keywords" content={meta_tags || 'blog, articles, technology'} />
            </Helmet>

            <Navbar />
            <Banner text={blog_title || "Blog Title"} />
            <div className="blog-detail-page max-w-[1150px] mx-auto px-3">
                <div className="prose prose-lg max-w-none text-justify mt-10"
                     dangerouslySetInnerHTML={{__html: blog_content}}/>
            </div>
            <TechnologyStack />
            <ContactUs />
            <Footer />
            <style>{customStyles}</style>
        </div>
    );
};

export default BlogDetailPage;
