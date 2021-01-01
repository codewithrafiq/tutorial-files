
<div className="container">
    <div class="form-group">
        <label >Title</label>
        <input onChange={(e) => setTitle(e.target.value)} type="text" class="form-control" placeholder="Post title" />
    </div>
    <div class="form-group">
        <label >Description</label>
        <textarea onChange={(e) => setContent(e.target.value)} placeholder="Description" class="form-control" rows="3"></textarea>
    </div>
    <div class="form-group">
        <label >Image</label>
        <input onChange={(e) => imageinputhandeler(e)} type="file" class="form-control" />
    </div>
    <p onClick={createnewpost} className="btn btn-info">New Post</p>
</div>
