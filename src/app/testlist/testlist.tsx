import { TestType } from "@/models/test.model";
import React from "react";

interface TestListProps {
  testData: TestType[];
}

const TestList: React.FC<TestListProps> = ({ testData }) => {
  return (
    <div className="p-4">
      <table className="mx-auto table-auto">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Age</th>
            <th className="text-left p-2">Gender</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((test, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-zinc-900' : ''}>
              <td className="p-2">{test.name}</td>
              <td className="p-2">{test.age}</td>
              <td className="p-2">{test.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestList;