
<div className="container">
    <div>
        <div class="content-section">
            <div class="media">
                <img class="rounded-circle account-img" src={`${domain}${profile?.image}`} />
                <div class="media-body">
                    <h2 class="account-heading">{profile?.user.username}</h2>
                    <small class="form-text text-muted">Username name is Fiexd</small>
                    <p class="text-secondary">{profile?.user.email}</p>
                    <p>{profile?.user.first_name} {profile?.user.last_name}</p>
                </div>
            </div>
            <form method="POST" enctype="multipart/form-data">

                <fieldset class="form-group">
                    <legend class="border-bottom mb-4">Profile Info</legend>
                    <div class="form-group">
                        <label>Uplode Profile Picture</label>
                        <div class="row">
                            <div class="col">
                                <input onChange={(e) => imageonchange(e)} type="file" class="form-control" />
                            </div>
                            <div class="col">
                                <p onClick={uploadimage} className="btn btn-info">Upload</p>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>First Name</label>
                        <input type="text" class="form-control" onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control" onChange={(e) => setLasename(e.target.value)} value={lasename} />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" onChange={(e) => setemail(e.target.value)} value={email} />
                    </div>
                </fieldset>
                <div class="form-group">
                    <p class="btn btn-outline-info" onClick={updatedata}>Update</p>
                </div>
            </form>
        </div>
    </div>
    <div className="">
        <h2>Time Line</h2>
        <div className="">
            {
                profile?.posts?.map((post, i) => (
                    <SingleArticle key={i} post={post} profile={profile} />
                ))
            }
        </div>
    </div>
</div>

