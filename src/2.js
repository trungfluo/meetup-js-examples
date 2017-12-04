/* @flow */

type Profession = {
  title: string,
  salary: number,
};
type People = { [title: string]: Profession };

const people: People = {
  Thomas: {
    title: 'Teacher',
    salary: 10000,
  },
  Kenzo: {
    title: 'Engineer',
    salary: 20000,
  },
};

const salaries: Array<number> = Object.values(people).map(person => {
  return person.salary;
});
