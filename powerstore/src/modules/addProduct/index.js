import { useState, useEffect } from 'react';
import AddPost from './addpost';
import Post from './post';
import axios from "axios";
import './addproduct.css';

function AddProduct() {
    const [posts, setPosts] = useState([]);

    const client = axios.create({
        baseURL: "https://fakestoreapi.com/products"
    });

    const fetchPosts = async () => {
        const response = await client.get('?limit=4');
        setPosts(response.data);
        localStorage.setItem("addProduct", response.data);
    }

    useEffect(() => {
        fetchPosts()
    }, []);

    const addPost = async (image, title, price) => {
        const response = await client.post('', {
            image,
            title,
            price
        });
        setPosts((prevPosts) => [response.data, ...prevPosts]);
    };

    const deletePost = async (id) => {
        const response = await client.delete(`${id}`);
        setPosts(posts.filter((post) => {
            return post.id !== id;
        }))
    };

    return (
        <main>
            {/* <h1>Consuming REST api tutorial</h1> */}
            <AddPost addPost={addPost} />
            <section className="posts-container">
                <h2 className='post__text'>Products</h2>
                {posts.map((post) =>
                    <Post
                        key={post.key}
                        id={post.id}
                        image={post.image}
                        title={post.title}
                        price={post.price}
                        deletePost={deletePost}
                    />
                )}
            </section>
        </main>
    )
}

export default AddProduct;