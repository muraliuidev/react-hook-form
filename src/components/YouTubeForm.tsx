function YouTubeForm() {
    return(
        <div>
            <form>
                <label htmlFor="username">User Name</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" />

                <button>Submit</button>
            </form>
        </div>
    )
}
export default YouTubeForm