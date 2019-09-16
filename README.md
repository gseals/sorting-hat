# beginning Sorting Hat project

# Sorting Hat

## Instructions
You are in charge of bringing the Hogwarts sorting hat to life! 

To start off with, you will use a [bootstrap jumbotron](https://getbootstrap.com/docs/4.0/components/jumbotron/) to have your sorting hat introduce itself and start the sorting process (by clicking on a button). A [bootstrap form](https://getbootstrap.com/docs/4.1/components/forms/) will then appear to fill in the student's name and a button to sort. This should then assign the student to a random house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin). On sorting a student, the form should clear and a [bootstrap card](https://getbootstrap.com/docs/4.1/components/card/) with the student's name and house should print below the form. You should also be able to expel a student after they have been sorted, which should remove their card from the student record.

In the end, your app will look something like: 
![Sorting Hat Mockup](./images/sorting-hat-mockup.png)

## Technical Requirements
- You must use [Boostrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) to style your page components. 
- You should apply responsive design to your page (aka your app should be designed to work on small screens)
- Your JS file should be comprised of functions, no actions should happen in your code outside of a function
- Your HTML and JS should all have proper indentations

## Planning Requrements
- Create a github project for this assignment.
- You should make cards/tickets based on deliverable features, i.e. sorting hat jumbotron with get started button, click event to show form, sorting event to clear form and print student, expel student event.

## Optional Bonus
- Helpful Form: An error message shows if a user tries to sort a student without filling out the form.
- House Colors: The color of the student's card changes depending on which house they were sorted. 
- Card Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.