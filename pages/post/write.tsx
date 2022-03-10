import React from "react";
import dynamic from "next/dynamic";
import Layout from "../../components/Layout";
const Write = dynamic(() => import("../../components/Write"), { ssr: false });

const write = () => {
  return (
    <Layout>
      <Write />
    </Layout>
  );
};

export default write;
