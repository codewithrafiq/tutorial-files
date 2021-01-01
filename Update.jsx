
<div className="container">
    <h1>Update</h1>
    <div className="p-3">
        <div class="form-group">
            <label>Title</label>
            <input onChange={(e) => { setTitle(e.target.value) }} type="text" class="form-control" value={title} />
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea onChange={(e) => setContent(e.target.value)} class="form-control" rows="3" value={content} ></textarea>
        </div>
        <div class="form-group">
            <img className="update__image" src={image} alt="" srcset="" />
            <label>Ulpode Image</label>
            <input
                onChange={(e) => fileSelectedHandler(e)}
                className="form-control"
                type="file" />
        </div>
    </div>
    <div>
        <p onClick={update_now} className="btn btn-info" >Update</p>
    </div>
</div>

