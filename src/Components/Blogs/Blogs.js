import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            

            <div className='QnA'>
                <h2>What is Context API and how does it work?</h2>
                <h4>- Context API is a way for React app to effectively produce global variables that can be passed around. It can be used to share data with multiple components, without having to pass data through props manually.  This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.  It works by returning a consumer and a provider. Provider is a component that as its name suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</h4>

                <h2>What are semantic tags?</h2>
                <h4>- Semantic tags are descriptive elements that convey its meaning to both the browser and the developer i.e. nav, section, footer etc. The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.The pages made with semantic elements are much easier to read. For sighted users, when a page is well designed visually, it is easy to identify the various parts of a web page at a glance. Headers, menus, and (hopefully) the main content are all immediately visually apparent. It has greater accessibility. For users who are blind or visually impaired and rely on screen readers to verbally describe what is on a page, proper use of HTML5 semantic elements will allow screen readers to more accurately communicate the content by making the visual audible. Overall it offers a better user experience.</h4>

                <h2>What are the differences between Inline, Block and Inline-Block?</h2>
                <h4>- Inline elements don't start on a new line and only occupy just the width it requires. We can’t set the width or height in it but line-height can be used to change the height. It also ignores the vertical padding of other inline elements.
                In inline-block format is just like the inline element, where it doesn’t start on a new line. BUT, we can set width and height values. Top and bottom margins and padding are respected.
                In block the element will start on a new line and occupy the full width available. And we can set width and height values. If width is not defined, then full-width is acquired.</h4>
            </div>
        </div>
    );
};

export default Blogs;