import { SOCIAL_LINKS } from "@/data/allSocialMediaLinks";

export default function SocialLinks({
  Size = "size-5 sm:size-10",
  Style = "justify-center",
  className = "border-secondary hover:bg-secondary hover:border-primary",
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3.5 ${Style}`}>
      {SOCIAL_LINKS.map(({ href, label, icon: Icon, title, iconProps }) => (
        <a
          key={href}
          href={href}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`group relative flex cursor-pointer items-center justify-center rounded-md border-4 p-2 transition-all duration-300 ${className}`}
        >
          <Icon
            className={`${Size} transition-colors duration-300`}
            {...iconProps}
          />
        </a>
      ))}
    </div>
  );
}
