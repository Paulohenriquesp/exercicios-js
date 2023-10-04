const statement = 'create table author (id number, name string, age number, city string, state string, country string)'
const regexp = /create table (author)/;
const parsedStatement = statement.match(regexp)
const tableName = parsedStatement[1];
console.log(parsedStatement);
