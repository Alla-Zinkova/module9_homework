const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const xmlDom = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDom.querySelector("list");
const studentNode = listNode.querySelectorAll("student")[0];
const nameNode = studentNode.querySelector("name");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");

const studentNode_2 = listNode.querySelectorAll("student")[1];
const nameNode_2 = studentNode_2.querySelector("name");
//const firstNode = nameNode.querySelector("first");
//const secondNode = nameNode.querySelector("second");
const ageNode_2 = studentNode_2.querySelector("age");
const profNode_2 = studentNode_2.querySelector("prof");

const langAttr = nameNode.getAttribute('lang');
const langAttr_2 = nameNode_2.getAttribute('lang');

const result_1 = {
  name: nameNode.textContent,
  lang: langAttr,
  age: Number(ageNode.textContent),
  prof: profNode.textContent
};
const result_2 = {
  name: nameNode_2.textContent,
  lang: langAttr_2,
  age: Number(ageNode_2.textContent),
  prof: profNode_2.textContent,
};
const result = {
  result_1,
  result_2
};
console.log('list', result);
