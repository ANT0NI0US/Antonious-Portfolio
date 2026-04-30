import Icon from "@/ui/Icon";

export default function OutlineViewIcon(props) {
  return (
    <Icon {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </Icon>
  );
}
