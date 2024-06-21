import React from "react";

const Projects = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: ''
  })

  function handleSubmit(e) {
    alert('Hello, world!')
    e.preventDefault();
  }

  function handleChange({target}) {
    const { id, value } = target
    console.log(id, value)
    setForm({ ...form, [id]: value })
  }

  return (
    <div style={{
      width: '100%',
      height: '40vh',
      cursor: 'not-allowed',
      display: 'grid',
      placeContent: 'center'
    }}>
      <h1 style={{
        fontSize: '36px',
        textAlign: 'center',
        opacity: '.4'
      }}>Nothing Here</h1>
    </div>
  );
};

export default Projects;
