import { useEffect, useState } from "react";
import { FormGroup } from "../../utils/FormComponent";

const FormExperience = (props: any) => {
  const [data, setData] = useState({
    role: "",
    employeer: "",
    periodStart: "",
    desc: "",
    isNow: false,
    periodEnd: "",
  });

  const handleChange = (e: any) => {
    if (e.target.type == "checkbox") {
      setData({
        ...data,
        [e.target.name]: !data.isNow,
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = () => {
    props.func(data);
  };

  useEffect(() => {
    if (props.isEdit) {
      setData({
        role: props.role,
        employeer: props.employeer,
        periodStart: props.periodStart,
        desc: props.desc,
        isNow: props.periodEnd == null,
        periodEnd: props.periodEnd,
      });
    }
  }, []);

  return (
    <div>
      <div className="block mb-4">
        <input
          className="border mb-4 p-5 w-full border-black text-black"
          type="text"
          name="role"
          onChange={handleChange}
          value={data.role}
          placeholder="Insert Your Role"
        />
      </div>
      <FormGroup>
        <input
          className="border mb-4 p-5 w-full border-black text-black"
          type="text"
          name="employeer"
          onChange={handleChange}
          value={data.employeer}
          placeholder="Insert Your Employeer"
        />
      </FormGroup>
      <label htmlFor="">Period Start</label>
      <FormGroup>
        <input
          className="border mb-4 p-5 w-full border-black text-black"
          type="date"
          name="periodStart"
          onChange={handleChange}
          value={data.periodStart}
          placeholder="Insert Your Period Start"
        />
      </FormGroup>
      <div className="block mb-4">
        <label className="inline-flex items-center">
          <input
            className="text-indigo-500 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
            type="checkbox"
            name="isNow"
            checked={data.isNow}
            onChange={handleChange}
          />
          I am currently work here
        </label>
      </div>
      <div className="block mb-4" style={{ display: data.isNow ? "none" : "" }}>
        <label htmlFor="">Period End</label>
        <input
          className="border mb-4 p-5 w-full border-black text-black"
          type="date"
          name="periodEnd"
          onChange={handleChange}
          value={data.periodEnd}
          placeholder="Insert Your Period Start"
        />
      </div>
      <FormGroup>
        <textarea
          className="border mb-4 p-5 w-full border-black text-black"
          name="desc"
          rows={5}
          onChange={handleChange}
          value={data.desc}
          placeholder="Insert Your Desc Job"
        />
      </FormGroup>
      <div className="block mb-4">
        <button
          className="float-right border border-black py-4 px-10"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormExperience;
