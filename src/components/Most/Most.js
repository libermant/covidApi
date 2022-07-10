import "./Most.css";
import { useNavigate } from "react-router-dom";

const Most = ({ title, sorty, setIsClick }) => {
  const navigate = useNavigate();

  return (
    <>
      <ol className="deaths">
        <h2>{title}</h2>

        {sorty.map((el) => (
          <li
            onClick={() => {
              navigate(`../country/${el.country}`);
              setIsClick(false);
            }}
          >
            {el.country}
          </li>
        ))}
      </ol>
    </>
  );
};

export default Most;
