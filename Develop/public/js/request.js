// var  requestBtn = document.getElementById("request")

// async function requestBook(){
//   var book = {
//     author : document.getElementById("author").value,
//     title: document.getElementById("booktitle").value,
//     donated_by: document.getElementById("requestedby").value
//   }
//   console.log(book)
 
//     const response = await fetch('/api/projects/request', {
//       method: 'POST',
//       body: JSON.stringify(book),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       // If successful, redirect the browser to the profile page
//       document.location.replace('/profile');
//     } else {
//       alert(response.statusText);
//     }

// }

// requestBtn.addEventListener("click",requestBook)

async function getallbooks(){
console.log("request JS loaded")
const response = await fetch('/api/projects/allbooks', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
});

if (response.ok) {
  console.log(response.data)
  // If successful, redirect the browser to the profile page
  // document.location.reload('/exchange');
} else {
  alert(response.statusText);
}
}
// getallbooks()