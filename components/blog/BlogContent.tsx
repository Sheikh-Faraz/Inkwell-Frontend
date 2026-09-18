"use client";

import { useTheme } from "next-themes";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";

type BlogContentProps = {
  content: any[];
};

export default function BlogContent({
  content,
}: BlogContentProps) {
  const { resolvedTheme } = useTheme();

  const editor = useCreateBlockNote({
    initialContent: content,
  });

  return (
    // <div className="overflow-hidden rounded-xl border bg-background">
    <div className="overflow-hidden">
      <BlockNoteView
        editor={editor}
        editable={false}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
}

// "use client";

// import { BlockNoteView } from "@blocknote/shadcn";
// import { useCreateBlockNote } from "@blocknote/react";


// import "@blocknote/core/fonts/inter.css";
// import "@blocknote/shadcn/style.css";

// type BlogContentProps = {
//   content: any[];
// };

// export default function BlogContent({
//   content,
// }: BlogContentProps) {
//   const editor = useCreateBlockNote({
//     initialContent: content,
//   });

//   return (
//     <BlockNoteView
//       editor={editor}
//       editable={false}
//     />
//   );
// }