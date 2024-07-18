import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import MainHeader from "@/components/MainHeader/MainHeader";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);//PLACE API KEY FROM THE BUILDERIO BY PRESSING CMD< CTRL AND K TO OPEN THE SEARCH TAB AND SELECT YOUR API KEY.

export default async function Page(props) {
  const builderModelName = "page" || "announcement-bar";

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <MainHeader/>
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
