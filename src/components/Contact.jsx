

const Contact = () => {


return(
    <div className="contact_container" id='contact'>

        <form>
        <h1>Contact</h1>
<label for="name">Name</label>
<input type="text"></input>
<label for="email">Email</label>
<input type='email'></input>
<label for="message">Message</label>
<input type='email' className="message_input"></input>



    <button class="button">
Contact Me        <div class="button__horizontal"></div>
        <div class="button__vertical"></div>
    </button>
    </form>
</div>

);

}

export default Contact