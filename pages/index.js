import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'
import { withRouter } from 'next/router'

const Home = ({ posts }) => {
  return <div>
    <Head>
      <title>Next test</title>
    </Head>
    {
      posts.map(post => (
        <div key={post.id}>
          <Link href={`/post?id=${post.id}`} as={`/posts/${post.id}`} passHref>
            <a>
              {post.title}
            </a>
          </Link>
        </div>
      ))
    }
  </div>;
}

Home.getInitialProps = async props => {
  const { data } = await axios.get('https://netlify-json-api.netlify.com/posts')

  return { posts: data }
}

export default withRouter(Home);
