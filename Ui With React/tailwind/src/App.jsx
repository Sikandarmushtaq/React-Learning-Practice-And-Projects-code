import Section1 from "./components/section1/section1";
import section2 from "./components/section2/section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1722159475056-81b46e45f950?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661549882214-e629ae90227f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU2fHx8ZW58MHx8fHx8",
      intro: "",
      tag: "Underbanked",
    },
  ];
  return (
    <div>
      <Section1 users = {users} />
      {section2()}
    </div>
  );
};

export default App;
