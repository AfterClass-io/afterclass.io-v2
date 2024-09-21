import { searchResultTheme } from "../SearchResult.theme";

export const SearchResultEmpty = ({ show = false }: { show: boolean }) => {
  const { empty } = searchResultTheme({
    show,
    size: { initial: "sm", md: "md" },
  });
  return (
    <div className={empty()}>
      <div className="text-xl">No results found.</div>
      <hr />
      <div className="text-text-em-low">
        <strong className="text-text-em-mid">💡 Tip!</strong> You can search for
        a course's name, course code, or professor's name.
        <br />
        <br />
        (e.g.)
        <br />
        <em>Course - </em>
        <strong className="text-text-em-mid">Big Questions</strong>
        <br />
        <em>Course Code - </em>
        <strong className="text-text-em-mid">COR-COMM1202</strong>
        <br />
        <em>Professor - </em>
        <strong className="text-text-em-mid">
          Chiraphol New Chiyachantana
        </strong>
      </div>
    </div>
  );
};
