import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanitizeHtml from 'sanitize-html';
import http from '../../http';
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import ContactUs from "../ContactUs.jsx";
import TechnologyStack from "../TechnologyStack.jsx";
import Banner from "../blog/Banner.jsx";  // Your HTTP client

const BlogDetailPage = () => {
    const { id } = useParams(); // Get the blog ID from the URL params
    const [blog, setBlog] = useState({}); // Initialize with an empty object
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        // Fetch the blog post by id from the blogitems_api array
        http.get(`/blog-api`)
            .then(response => {
                const blogItems = response.data.blogitems_api; // Access blogitems_api array
                const selectedBlog = blogItems.find((item) => item.id === parseInt(id)); // Find the blog by ID
                if (selectedBlog) {
                    setBlog(selectedBlog); // Set the selected blog
                } else {
                    setError("Blog not found"); // Set an error if no blog matches the id
                }
            })
            .catch(error => {
                console.error('Error fetching blog post:', error);
                setError("Failed to fetch blog data");
            });
    }, [id]);

    if (error) return <div className="text-red-500">{error}</div>; // Display error if blog is not found

    // Sanitize blog content
    const sanitizedContent = sanitizeHtml(blog.blog_content || "", {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['h1', 'h2', 'img', 'span', 'ol', 'ul', 'li', 'strong']),
        allowedAttributes: {
            '*': ['style'],
            'img': ['src', 'alt']
        }
    });

    // Add inline style for strong inside headings
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

    return (
        <div>
            <Navbar />
            <Banner text={blog.blog_title || "Blog Title"} />
            <div className="blog-detail-page max-w-[1150px] mx-auto">
                {/*<h1 className="text-3xl font-bold mb-4">{blog.blog_title || "Blog Title"}</h1> /!* Display blog title *!/*/}
                {/*<p className="text-gray-700 mb-4">By {blog.blog_author_name || "Author Name"}</p> /!* Display author name *!/*/}
                {/* Render sanitized blog content */}
                <div className="prose prose-lg max-w-none text-justify mt-10" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
            </div>
            <TechnologyStack />
            <ContactUs />
            <Footer />
            {/* Inline styles for custom strong tag inside headings */}
            <style>{customStyles}</style>
        </div>
    );
};

export default BlogDetailPage;
