import React from "react"
import { Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"

import Hashtag from "./hashtag"
import * as styles from "./post-teaser.module.css"

const PostTeaser = ({ post }) => {
  return (
    <Link to={`/post/${post.slug}`} className={styles.wrapper}>
      <figure className={styles.figure}>
        <GatsbyImage image={post.heroImage.gatsbyImageData} alt={post.title} />
        <figcaption className={styles.figcaption}>{post.title}</figcaption>
      </figure>
      <div className={styles.date}>Posted: {post.createdAt}</div>
      <div className={styles.excerpt}>
        {post.body.childMarkdownRemark.excerpt}
      </div>
      <div className={styles.hashtags}>
        {post.tags.map(hashtag => (
          <Hashtag key={hashtag} title={hashtag} />
        ))}
      </div>
    </Link>
  )
}

export default PostTeaser
