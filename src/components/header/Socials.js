import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiFillMediumCircle,
} from "react-icons/ai";

const Socials = () => {
  return (
    <>
      <div className="socials-link">
        <a href="https://www.linkedin.com/in/bisrat-menberu/">
          <AiOutlineLinkedin />
        </a>
        <a href="https://github.com/BISrat3/">
          <AiFillGithub />
        </a>
        <a href="https://mail.google.com//bisrat.menberu@gmail.com">
          <AiFillMediumCircle />
        </a>
      </div>
    </>
  );
};

export default Socials;
