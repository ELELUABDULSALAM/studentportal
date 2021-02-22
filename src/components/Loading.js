import React from "react";
import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";

export default function Loader() {
  return (
    <div>
      <BounceLoader loading={loading} css={override} size={150} />
    </div>
  );
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
