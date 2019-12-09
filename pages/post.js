import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'

const Post = ({ post }) => {
  const title = `${post.title} | Next test`
  const description = "test"
  return <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Link href="/">
      <a>HOME TEST</a>
    </Link>
    <h1>{post.title}</h1>
    <p>{post.description}</p>
  </div>;
}

Post.getInitialProps = async props => {
  const id = props.req ? props.req.query.id : props.query.id

  const { data } = await axios.get(`https://netlify-json-api.netlify.com/posts/${id}`)

  return { post: data }
}

export default Post;
