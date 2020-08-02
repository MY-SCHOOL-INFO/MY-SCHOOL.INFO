import React from "react";
import { Helmet } from "react-helmet";

const MetaHead = ({ title, desc, keywords }) => {
  return (
    <Helmet>
      <meta name="description" content={desc} data-react-helmet="true" />
      <meta name="keywords" content={keywords} data-react-helmet="true" />
      <title>{`MY-SCHOOL.INFO - ${title}`}</title>
      <meta
        property="og:title"
        content={`📅 MY-SCHOOL.INFO - ${title}`}
        data-react-helmet="true"
      />
      <meta
        property="og:site_name"
        content="📅 MY-SCHOOL.INFO"
        data-react-helmet="true"
      />
      <meta property="og:description" content={desc} data-react-helmet="true" />

      <meta
        name="twitter:title"
        content={`📅 MY-SCHOOL.INFO - ${title}`}
        data-react-helmet="true"
      />
      <meta
        name="twitter:description"
        content={desc}
        data-react-helmet="true"
      />
      <meta name="twitter:card" content="summary" data-react-helmet="true" />
    </Helmet>
  );
};

export default MetaHead;
