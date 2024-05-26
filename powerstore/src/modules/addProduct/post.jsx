

export default function Post(props,product) {

    return (
        <div className="post-card">
              <img
                src={props.image}
                alt={props.title}
              ></img>
            <h2 className="post-title">{props.title}</h2>
            <p className="post-body">$ {props.price}</p>
            <button className="btn-delete" onClick={() => props.deletePost(props.id)}>Delete</button>
        </div>
    )
}