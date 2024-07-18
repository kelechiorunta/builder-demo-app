import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function Page(props) {
  const builderModelName = "figma-imports-1";

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
      <div className="overflow-hidden">
        <RenderBuilderContent content={content} model={builderModelName} />
      </div>
      
    </>
  );
}


// import CustomBuilderComponent from "@/components/CustomComponent/CustomBuilderComponent";

// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

// const Figma1Page = () => {
//   return (
//     <div>
//       <h1>Figma Import 1</h1>
//       <CustomBuilderComponent model="figma-imports-1" />
//     </div>
//   );
// };

// export default Figma1Page;
