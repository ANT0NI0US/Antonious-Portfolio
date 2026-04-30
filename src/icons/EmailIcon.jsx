import Icon from "@/ui/Icon";

export default function EmailIcon(props) {
  const isFilled = props.fill && props.fill !== "none";

  return (
    <Icon
      {...props}
      {...(isFilled && {
        stroke: "none",
        fill: "currentColor",
        viewBox: "0 0 1920 1920",
      })}
    >
      {isFilled ? (
        <path
          d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
          fillRule="evenodd"
        />
      ) : (
        <>
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </>
      )}
    </Icon>
  );
}
