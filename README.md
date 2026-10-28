# Certificates folder

Drop certificate images (.png/.jpg) or PDFs here, then register them in
`src/data/portfolio.js` under `certificates`:

    {
      title: "My Certificate",
      issuer: "Issuer name",
      date: "Oct 2026",            // optional
      file: "/certificates/my-certificate.png",   // image or .pdf in this folder (optional)
      link: "https://verify-link",                // online verification link (optional)
    }

Use `file`, `link`, or both. Images show as a thumbnail; PDFs get a "View PDF" button.
