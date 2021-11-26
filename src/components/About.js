import React, { useState, useEffect } from 'react';

function About() {
  let [listItems, setListItems] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchPosts = async () => {
      const response = await fetch('http://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      if (mounted) {
        setListItems(posts);
      }
    };
    fetchPosts();
    return () => {
      mounted = false;
    };
  }, []);
  const postsList = (
    <ul>
      {listItems.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );

  if (listItems) {
    return <div>{listItems && postsList}</div>;
  } else {
    return <div>No posts fetched</div>;
  }
}
export default About;
