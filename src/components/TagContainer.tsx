import Tag from "./Tag";

interface TagContainerProps {
  tagNames: string[];
}

export default function TagContainer(props: TagContainerProps) {
  let tags = [];

  for (const tagName of props.tagNames) {
    tags.push(<Tag tagName={tagName}/>)
  }
  return (
    <div id="tags-container">
      {tags}
    </div>
  );
}