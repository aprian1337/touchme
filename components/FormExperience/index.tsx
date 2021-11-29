import { FormGroup } from "../../utils/FormComponent";
const FormExperience = () => {
  return (
    <div>
      <div className="block mb-4">
        <input
          className="border mb-4 p-5 w-full border-black text-black"
          type="text"
          placeholder="Insert Your Role"
        />
      </div>
      <FormGroup>
        <input
          className="border mb-4 p-5 w-full border-black text-black"
          type="text"
          placeholder="Insert Your Employeer"
        />
      </FormGroup>
      <label htmlFor="">Period Start</label>
      <FormGroup>
        <input
          className="border mb-4 p-5 w-full border-black text-black"
          type="date"
          placeholder="Insert Your Period Start"
        />
      </FormGroup>
      <div className="block mb-4">
        <label className="inline-flex items-center">
          <input
            className="text-indigo-500 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
            type="checkbox"
          />
          I am currently work here
        </label>
      </div>
      <div className="block mb-4">
        <label htmlFor="">Period End</label>
        <input
          className="border mb-4 p-5 w-full border-black text-black"
          type="date"
          placeholder="Insert Your Period Start"
        />
      </div>
      <div className="block mb-4">
        <button className="float-right border border-black py-4 px-10">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormExperience;
