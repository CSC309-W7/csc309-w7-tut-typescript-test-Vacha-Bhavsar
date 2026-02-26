import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: "24" }, // invalid
  { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
  let cleanResponse: User[] = [];
  if (Array.isArray(apiResponse)){
    for (let i: number = 0; i < apiResponse.length; i++) {
      let user: User = {
        name: apiResponse[i].name,
        age: Number(apiResponse[i].age)
      };
      cleanResponse.push(user);
    }
  }
  
  return cleanResponse;
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}