import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import image from "./depency inversion prensibi.PNG";
function App() {
  return (
    <div className="App">
      <section class="hero is-link">
        <div class="hero-body">
          <p class="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={image}
                title="React"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </div>
            <div className="column">
              <Course
                image={image}
                title="Redis"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </div>
            <div className="column">
              {" "}
              <Course
                image={image}
                title="RabbitMQ"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </div>
            <div className="column">
              <Course
                image={image}
                title="ASP .NET CORE"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
//Props compenentlerdeki farklılıkları yapmamı sağlar. Propslar componentlerin yanına yazılan değişkenlerdir. Propslar title ve description
