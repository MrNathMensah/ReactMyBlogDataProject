import './App.css';
import logo from './logo.svg';
import About from './Components/About';
import Article from './Components/Article';
import ArticleList from './Components/ArticleList';
import Header from './Components/Header';
import People from './Components/People';
import Toggler from './Components/Toggler';
import FrontAndBack from './Components/FrontAndBack';
import FormPost from './Components/FormPost';

// const blogData = {
//   name: "Underreacted",
//   image: logo,
//   about: "A blog about learning React",
//   posts: [
//     {
//       id: 1,
//       title: "Components 101",
//       date: "December 15, 2020",
//       preview: "Setting up the building blocks of your site",
//       minutes: 5,
//     },
//     {
//       id: 2,
//       title: "React Data Flow",
//       date: "December 11, 2020",
//       preview: "Passing props is never passé",
//       minutes: 15,
//     },
//     {
//       id: 3,
//       title: "Function vs Class Components",
//       preview: "React, meet OOJS.",
//       minutes: 7,
//       minutes: 47,
//     },
//   ],
// };

function App() {
  return (
    <div>
      {/* <button >
        Click Me
      </button> */}
      {/* <Toggler/>
      <People/> */}
      {/* <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList listPost={blogData.posts}/> */}
      <FrontAndBack/>
      <FormPost/>
    </div>
  );
}

export default App;