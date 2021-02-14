const publicId = "35636a0ad5dfa58a94d43c49bc47f871",
    token = "a1226938459e2d730bbcf44fafcee40857f107d7d3bc98ea246af3580baa0304",
    baseURL = "https://trello.com/1/";


  fetch(`${baseURL}cards/5f19b419eb76d924865b38ee/?key=${publicId}&token=${token}`)
    .then(response => console.log(response.json()))
    .catch(e => console.log(e));
