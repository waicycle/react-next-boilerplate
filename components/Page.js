import DynamicComponent from "./DynamicComponent";

const Page = ({ blok, stories}) => (
  <main>
    {/* {JSON.stringify(blok)} */}
    {blok.body
      ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} stories={stories} />
        ))
      : null}
  </main>
);

export default Page;
