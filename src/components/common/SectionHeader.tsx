import React from "react";
import hbdr from "../../assets/images/hbdr.png";

interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="row">
      <header className="col-12 mainHeader mb-4 text-center">
        <h1 className="headingIV playfair fwEblod mb-4">{title}</h1>
        <span className="headerBorder d-block mb-5">
          <img src={hbdr} alt="Header Border" className="img-fluid img-bdr" />
        </span>
        {description && <p>{description}</p>}
      </header>
    </div>
  );
};

export default SectionHeader;
