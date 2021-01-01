
<div className="container">
    <div class="content-section">
        <div class="media">
            <img class="rounded-circle account-img" src={`${domain}${profile?.image}`} />
            <div class="media-body">
                <h2 class="account-heading">{profile?.user?.username}</h2>
                <p class="text-secondary">{profile?.user?.email}</p>
                <p>{profile?.user?.first_name} {profile?.user?.last_name}</p>
            </div>
        </div>
    </div>
    <div className="">
        <h2>Time Line</h2>
        <div className="">
            {
                profile?.posts?.map((post, i) => (
                    <div key={i} class="media content-section">
                        <img class="rounded-circle article-img" src={`${domain}${post.user.image}`} />
                        <div class="media-body">
                            <div class="article-metadata">

                                <a class="mr-2" href="#">{post.user.user.username}</a>
                                <small class="text-muted">{post.date}</small>
                            </div>
                            <h2><Link class="article-title" to={`/${post.id}/`} >{post.title}</Link></h2>
                            {
                                (post?.description).length > 200 ? (
                                    <p class="article-content">{(post?.description).substring(0, 200)}...<Link to={`/${post.id}/`}  >more</Link></p>
                                ) :
                                    (
                                        <p class="article-content">{post?.description}</p>
                                    )
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
</div>

