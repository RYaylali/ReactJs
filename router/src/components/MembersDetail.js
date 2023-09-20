import React from "react";
import { useParams } from "react-router-dom";
function MembersDetail() {
  //   const params = useParams();
  //   const memberId = params.memberId;
  const { memberId } = useParams();
  return <div>MembersDetail {memberId}</div>;
}

export default MembersDetail;
