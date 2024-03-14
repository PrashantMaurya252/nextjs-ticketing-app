"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const TicketForm = () => {
  const router=useRouter()
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not Started",
    category: "Hardware Problem",
  };

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    const res = await fetch('/api/Tickets',{
      method:'POST',
      body:JSON.stringify({formData}),
      'Content-Type':'application/json'
    })

    if(!res.ok){
      throw new Error("Failed To create Ticket")
    }
    router.refresh();
    router.push('/')
  };
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>
        <label>Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            checked={formData.priority == 1}
            value={1}
            onChange={handleChange}
          />
          <label>1</label>

          <input
            type="radio"
            id="priority-2"
            name="priority"
            checked={formData.priority == 2}
            value={2}
            onChange={handleChange}
          />

          <label>2</label>

          <input
            type="radio"
            id="priority-3"
            name="priority"
            checked={formData.priority == 3}
            value={3}
            onChange={handleChange}
          />

          <label>3</label>

          <input
            type="radio"
            id="priority-4"
            name="priority"
            checked={formData.priority == 4}
            value={4}
            onChange={handleChange}
          />

          <label>4</label>

          <input
            type="radio"
            id="priority-5"
            name="priority"
            checked={formData.priority == 5}
            value={5}
            onChange={handleChange}
          />

          <label>5</label>
        </div>
        <label>Progress Bar</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />

        <label>Status</label>
        <select
          name="status"
          id="status"
          onChange={handleChange}
          value={formData.status}
        >
          <option value="Not Started">Not Started</option>
          <option value="Started">Started</option>
          <option value="Done">Done</option>
        </select>
        <input type="submit" className="btn max-w-xs" value="Create Ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
