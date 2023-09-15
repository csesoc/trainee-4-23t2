import Tag from "./Tag";

interface TagContainerProps {
  tagNames: string[];
}

export default function TagContainer(props: TagContainerProps) {
  let tags = [];

  let i = 0;

  for (const tagName of props.tagNames) {
    tags.push(<Tag tagName={tagName} key={`tag${i}`}/>);
    i++;
  }
  return (
    <div id="tags-container" style={{translate: "-150px"}}>
      {tags}
    </div>
  );
}