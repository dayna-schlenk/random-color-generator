// Use a loop to view all list items

const allItems = document.getElementsByTagName("li");

for (let item of allItems) {
    item.hidden = true; //now, all list items are hidden on the page
}