fetch ("http://localhost:3030/api/products")
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })