import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (    
    <div className='App'>
      <h1>Contact Form</h1>
      <form action=''>
        <div className="form-group">
          <label htmlFor='name'>
            Name
            </label>
            <input class="form-control" type='text' id='name' name='name' />
        </div>
        <div className="form-group">
          <label htmlFor='email'>
            Email
            </label>
            <input class="form-control" type='email' id='email' name='email' />
        </div>
        <div className="form-group">
          <label htmlFor='phone'>
            Phone
            </label>
            <input class="form-control" type='text' id='phone' name='phone' />
        </div>
        <div className="form-group">
          <label htmlFor='message'>
            Message
            </label>
            <textarea class="form-control" type='text' id='message' name='message' />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App;
