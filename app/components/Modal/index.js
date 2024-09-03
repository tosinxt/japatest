import Heading from "@/app/(auth)/component/heading";
import { useJapaStore } from "@/app/store/store";
import Link from "next/link";
import { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose }) => {
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [resume, setResume] = useState("");
  const [fullName, setFullName] = useState("");
  const [course, setCourse] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const bookASession = useJapaStore((state) => state.bookASession);


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault(); // Prevent form submission
      // Add the skill to the list if it's not empty and doesn't exceed 5 skills
      if (skills.length < 5 && !skills.includes(inputValue.trim())) {
        setSkills([...skills, inputValue.trim()]);
        setInputValue(""); // Clear the input
      }
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting
    try {
      await bookASession({full_name: fullName, current_skills: skills, course_of_choice: course, resume_link: resume } )
      window.location.href("https://paystack.com/buy/test-for-career-coaching-qujnwh")
    } catch (err) {

    }
    onClose();
  };

  useEffect(() => {
    // Check if the form is valid
    const isFormFilled =
      fullName.trim() !== "" &&
      skills.length > 0 &&
      course.trim() !== "" &&
      resume !== "";
    setIsFormValid(isFormFilled);
  }, [fullName, skills, course, resume]);

  if (!isOpen) return null;

  return (
    <section className="py-10 px-[15px] h-full fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col gap-2 max-w-[400px] w-full bg-white rounded-2xl px-3 py-3 text-textDefault">
        <Heading
          title="Before we Begin, Tell us More"
          cancel={true}
          onclick={onClose}
        />
        <form className="flex flex-col gap-3 mt-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="name"
              className="text-textDefault text-base font-[500]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="border-[1.5px] border-[#ccc] h-[35px] tablet:h-[52px] pl-2 rounded-lg text-[15px]"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-[3px]">
            <label
              htmlFor="skills"
              className="text-textDefault text-base font-[500]"
            >
              Current Skills
            </label>
            <div className="flex flex-wrap gap-1">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="border px-1 py-[2px] cursor-pointer text-sm"
                  onClick={() => handleRemoveSkill(skill)}
                >
                  {skill} &times;
                </span>
              ))}
            </div>
            <div className="border-[1.5px] border-[#ccc] h-[35px] tablet:h-[52px] pl-2 rounded-lg text-[15px] gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="border-0 outline-none focus:outline-0 focus:border-0 flex-1 h-full"
                placeholder="Type a skill and press Enter"
                required
              />
            </div>
            <p className="text-sm text-textNeutral mt-[3px]">Up to 5 skills</p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="LName"
              className="text-textDefault text-base font-[500]"
            >
              Course of Choice
            </label>
            <select
              className="border-[1.5px] border-[#ccc] h-[35px] tablet:h-[52px] pl-2 rounded-lg text-[15px] bg-transparent"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            >
              <option className="text-textNeutral" value="" disabled>
                Select a course
              </option>
              <option>Data Analysis</option>
              <option>Product Management</option>
            </select>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="resume"
              className="text-textDefault text-base font-[500]"
            >
              Resume Link
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="border-[1.5px] border-[#ccc] h-[35px] tablet:h-[52px] pl-2 rounded-lg text-[15px]"
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              required
            />
            <p className="text-sm text-textNeutral">Paste link to your resume on google drive or google docs</p>
          </div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`text-white w-full bg-primary text-sm tablet:text-base py-2 px-5 flex justify-center items-center hover:opacity-90 gap-1 rounded-[30px] border border-primary text-center ${
                !isFormValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Book a session
            </button>
        </form>
      </div>
    </section>
  );
};

export default Modal;
