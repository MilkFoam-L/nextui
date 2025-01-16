import * as React from "react";
import Script from "next/script";


export function ScriptProviders() {
  return (
    <>
      <Script
        defer
        data-modal-disclaimer="This is a custom LLM for NextUI with access to all developer docs (heroui.com/docs) and GitHub Issues and PRs (github.com/frontio-ai/heroui)."
        data-modal-example-questions="How do I install for Next.js?,How do I customize primary color?"
        data-project-color="#000000"
        data-project-logo="https://avatars.githubusercontent.com/u/86160567?s=280&v=4"
        data-project-name="NextUI"
        data-website-id="e733a73f-980e-4f7d-9e8b-91867453f899"
        src="https://widget.kapa.ai/kapa-widget.bundle.js"
        strategy="afterInteractive"
      />
    </>
  );
}
