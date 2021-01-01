
<div className="site-header">
    <nav className="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
        <div className="container">
            <Link className="navbar-brand mr-4" to="/">Django Blog</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggle">

                <div className="navbar-nav ml-auto">
                    {
                        profile != null && (
                            <>
                                <Link className="nav-item nav-link" to="/createpost">New Post</Link>
                                <Link className="nav-item nav-link" to="/profile">Profile</Link>
                                <Link className="nav-item nav-link" onClick={logoutFunction} >Logout</Link>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    </nav>
</div>

