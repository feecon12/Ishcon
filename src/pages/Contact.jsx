import { useState } from "react"
import fillForm from "../assets/images/herocontactpage.png"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function clearForm() {
    setFormData({
      name: "",
      email: "",
      message: ""
    })
  }
  function handleSubmit(e) {
    e.preventDefault();

    console.log("form submitted", formData)

    clearForm();
  }
  return (
    <>
      <main className="px-32 grid py-4 mt-6 grid-cols-12 gap-8 min-h-screen">

        <div className="col-span-6 px-6">
          <img src={fillForm} alt="fill contact form" width={600} />
        </div>

        <div className="col-span-6 px-6 flex flex-col">
          <h1 className="text-7xl font-bold">Contact me</h1>
          <form
            onSubmit={handleSubmit}
            className="mt-4 text-xl font-semibold capitalize"
          >
            <fieldset>
              <div>
                <label
                  htmlFor="name"
                >name</label>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}

                  className="border font-thin px-2 py-1 rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                >email</label>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}

                  className="border font-thin px-2 py-1 rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                >message</label>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}

                  rows={7}
                  cols={30}

                  className="border font-thin px-2 py-1 rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-primary text-light mt-2 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-primary border-2 border-solid hover:border-primary"
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </main>
    </>
  )
}

export default Contact