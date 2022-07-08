
const contact =()=>{
    return(
        <>
        <form>
            <label for="name"></label>
            <input type = "text" placeholder="What's your name?" required/>
            <label for="Email"></label>
            <input type = "text" placeholder="What's your email?" required/>
            <label for="message"></label>
            <textarea type = "text" placeholder="What can I do for you?" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        </>
    )
}