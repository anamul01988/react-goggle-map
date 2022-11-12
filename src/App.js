import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
          title="This is a unique title" 
            width="100%"
            height="600px"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=square%20hospital,%20dhanmondi,%20dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
    
        </div>
      </div>
    </div>
  );
}

export default App;
