import React from "react";
import TestList from "./testlist";
import { getTestData } from "@/lib/actions/getTestData";

const TestListPage = async () => {
  const testData = await getTestData();
  return (
    <div>
      <TestList testData={testData.data} />
    </div>
  );
};

export default TestListPage;
