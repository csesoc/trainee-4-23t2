import './css/Tag.css';

interface TagProps {
  tagName: string;
}

export default function Tag(props: TagProps) {
  let tagName = props.tagName;
  let colour;
  switch (tagName.toLowerCase()) {
    case "arrays": 
      colour = "#E9B6D5";
      break;
    case "linkedlists":
      colour = "#BFACDE";
      break;
    case "variables":
      colour = "#9ab7d3";
      break;
    case "loops":
      colour = "#f7e1d3";
      break;
    case "conditionals":
      colour = "#f5d2d3";
      break;
    case "structs":
      colour = "#ff7477";
      break;
    case "multifiles":
      colour = "#9cf6f6";
      break;
    case "other":
      colour = "#a5ffd6";
      break;
    default:
      colour = "#E87195";
      break;
  }

  return (
    <div className="tag" style={{backgroundColor:colour, translate: "0px 2px", borderRadius: "0.375rem"}}>{tagName}</div>
  );
}