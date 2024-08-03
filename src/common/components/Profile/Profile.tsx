import { profileTheme, type ProfileVariants } from "./Profile.theme";

export type ProfileProps = ProfileVariants & {
  icon: React.ReactNode;
  name: string;
};

export const Profile = ({ icon, name }: ProfileProps) => {
  const { wrapper, icon: iconClass, name: nameClass } = profileTheme();
  return (
    <div className={wrapper()}>
      <div className={iconClass()}>{icon}</div>
      <div className={nameClass()}>{name}</div>
    </div>
  );
};
