var  donateBtn = document.getElementById("donate")

async function donateBook(){
  var book = {
    author : document.getElementById("author").value,
    title: document.getElementById("booktitle").value,
    donated_by: document.getElementById("donatedby").value
  }
  console.log(book)
 
    const response = await fetch('/api/projects/donate', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }

}

donateBtn.addEventListener("click",donateBook)