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
    <div style={{ marginTop: "50px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          className="div"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <label htmlFor="name">Nome: </label>
          <input
            placeholder="Your name"
            required
            type="text"
            value={form.name}
            name="name"
            onChange={handleChange}
          />
          {form.name}
          <label htmlFor="email">Email: </label>
          <input
            required
            placeholder="Your email"
            type="email"
            value={form.email}
            name="email"
            onChange={handleChange}
          />
          {form.email}
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Projects;
