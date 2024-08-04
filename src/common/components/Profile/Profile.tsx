import { profileTheme, type ProfileVariants } from "./Profile.theme";

export type ProfileProps = ProfileVariants & {
  icon: React.ReactNode;
  name: string;
};

export const Profile = ({ icon, name }: ProfileProps) => {
  const { wrapper, name: nameClass } = profileTheme();
  return (
    <div className={wrapper()}>
      {icon}
      <div className={nameClass()}>{name}</div>
    </div>
  );
};
