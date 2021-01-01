
<div>
    {
        posts.results?.map((post, i) => (
            <SingleArticle key={i} post={post} profile={profile} />
        ))
    }
    <div className="paginationBtn">

        {
            posts.previous && (
                <div>
                    <Link className="btn btn-danger" onClick={postprevious} >Previous</Link>
                </div>
            )
        }
        {
            posts.next && (
                <div>

                    <Link className="btn btn-info" onClick={nextclick} >Next</Link>
                </div>
            )
        }
    </div>
</div>
