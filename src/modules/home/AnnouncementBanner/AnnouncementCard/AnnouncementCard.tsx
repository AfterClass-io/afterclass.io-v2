export const AnnouncementCard = ({
  announcement,
}: {
  announcement: string;
}) => {
  return (
    <div className="relative h-48 shrink-0 grow basis-0 overflow-hidden rounded-lg bg-purple-400">
      <div className="h-48 w-96 flex-shrink-0 bg-red-400" />
      <p className="absolute bottom-3 left-6 text-lg font-semibold text-text-em-high">
        {announcement}
      </p>
    </div>
  );
};
