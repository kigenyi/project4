"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: herbert kigenyi
      Date:   11/20/2022

      Filename: project09-01b.js
*/

//4.	Go to the project09-01b.js file in your code editor. Apply the slice() method to the location.search object, storing the text after the first character in the query variable.
let slicedlocationsearch = location.search.slice(1);
//5.	Use the replace() method to replace very occurrence of the + character in the query variable with a blank space. Apply the decodeURIComponent() method to replace every URI-encoded character in query with the matching character.
let replaceWithBlankSpace = slicedlocationsearch.replaceAll("+", " ");
let decodedURIComponent = decodeURIComponent(replaceWithBlankSpace);

//6.	Appy the split() method to the query string to split the text at every occurrence of the & character, placing each name=value pair as a separate item in the cardFields array.
let cardFields = decodedURIComponent.split("&");
//7.	Create a for of loop that loops through every item in the cardFields array. At each iteration of the loop do the following:
for (let i = 0; i < cardFields.length; i++) {
      //a.	Split each item at the location of the = character, store the substrings in the nameValue array variable.
      let nameValue = cardFields[i].split('=');
      //b.	Store the first item in the nameValue array in the name variable. Store the second item in the nameValue array in the value variable.
      let id = nameValue[0];
      let value = nameValue[1];
      //c.	Store the value of the value variable as the text content of the document element with an id equal to the name variable.
      let element = document.getElementById(id);
      element.innerHTML = value;
}
//8.	Save your changes to the file and then load project09-01a.html in your web browser. Enter sample greeting text in the field of the web form and then click the Submit button. Verify that the browser opens the project09-01b.html file with the text of the greeting message displayed in the page.
