fetch("https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    query: `query {
          allUsers {
            id
            name
            
          }
        }`
  })
})
  .then(res => res.json())
  .then(res => {
    console.log(res.data);
  });
