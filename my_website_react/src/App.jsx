import MyButton from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="p-2">
      <Header />
      <h1>React Js basics app</h1>
      <p>This is app for learning react basics</p>
      <div className="flex flex-wrap">
        <Card
          cardTitle={"React Js Course"}
          cardDescription={`
          
          This is fresh react course for beginners.
          
          `}
        />
        <Card
          cardTitle={"Spring Boot Course"}
          cardDescription={`
          
            This is fresh spring boot course for beginners.
            
            `}
        />
        <Card
          cardTitle={"Microservices Course"}
          cardDescription={`
          
            This is fresh microservices course for beginners.
            
            `}
        />
        <Card
          cardTitle={"Python Django Course"}
          cardDescription={`
          
          This is fresh django course for beginners.
          
          `}
        />
        <Card
          cardTitle={"Data Science Course"}
          cardDescription={`
          
          This is fresh AI/ML course for beginners.
          
          `}
        />
      </div>
      <Profile />
      <MyButton title={"First Button"} descripton={""} />
      <MyButton title={"Second Button"} />
      <MyButton title={"Third Button"} />
      <MyButton title={"Fourth Button"} />
      <MyButton title={"Fifth Button"} />
      <MyButton title={"Sixth Button"} />
      <Footer />
    </div>
  );
}

export default App;
