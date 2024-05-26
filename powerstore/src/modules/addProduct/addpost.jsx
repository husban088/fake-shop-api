import {useState} from 'react';
import './addproduct.css';

export default function AddPost(props) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addPost(image, title, price);
        setTitle('');
        setPrice('');
        setImage('');
    };    
    
    return (
        <form onSubmit={handleSubmit} className='form__add'>
            <h2 className='add__text'>Add new Product</h2>
            <div className="input-container">
                {/* <label htmlFor="title">Title</label> */}
                <input 
                    type="file" 
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <div className="input-container">
                {/* <label htmlFor="title">Title</label> */}
                <input 
                    name="title" 
                    type="text" 
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='add__inpt'
                />
            </div>
            <div className="input-container">
                {/* <label htmlFor="body">Body</label> */}
                <input 
                type='number'
                    name="body" 
                    placeholder='Price'
                    value={price} 
                    className='add__inpt'
                    onChange={(e) => setPrice(e.target.value)}>
                </input>
            </div>
            <button type="submit" className="btn-submit">Add Post</button>
        </form>
    )
}