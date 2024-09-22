import Github from '../assets/images/github.png';
import Gmail from '../assets/images/gmail.png';
import Linkedin from '../assets/images/linkedin.png';


const Contents: React.FC = () => (
<div className="p-contents">
    <div className="p-contents__namecard">
      <p>Java Developer</p>
      <p>Ryuta Yamamoto</p>
    </div>
    <div className="p-contents__item p-contents__item--gmail"><a href="mailto:xyzsince2014@gmai.com" target="_blank"><img src={Gmail} alt="Github"/></a></div>
    <div className="p-contents__item p-contents__item--github"><a href="https://github.com/xyzsince2014" target="_blank"><img src={Github} alt="Github"/></a></div>
    <div className="p-contents__item p-contents__item--linkedin"><a href="https://www.linkedin.com/in/ryuta-yamamoto-705b311a1/" target="_blank"><img src={Linkedin} alt="Github"/></a></div>
  </div>
);

export default Contents;
